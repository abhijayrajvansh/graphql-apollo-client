'use client';

import React, { useEffect, useState } from 'react';
import gqlClient from '@/app/graphql';
import { getPokemonByName } from '@/app/graphql/queries';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Pokemon {
  id: number | null;
  name: string | null;
  image: string | null;
}

const Home = () => {
  useEffect(() => {
    fetchPokemon(pokename);
  }, []);

  const [pokename, setPokename] = useState('pikachu');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const pokemonImageUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  async function fetchPokemon(pokename: string) {
    const { data } = await gqlClient.query({
      query: getPokemonByName,
      variables: {
        name: pokename,
      },
    });

    setPokemon({
      id: data.pokemon.id,
      name: data.pokemon.name,
      image: pokemonImageUrl(data.pokemon.id),
    });
  }

  return (
    <div className="w-full px-4 sm:w-80 mt-10">
      <h1 className="text-4xl text-center font-semibold">Pokédex</h1>
      <p className="text-center text-sm">nostalgia, yes!</p>
      <div className="space-y-3 mt-10">
        <Input
          onChange={e => {
            setPokename(e.target.value);
          }}
          type="text"
          value={pokename}
          placeholder="enter pokémon name..."
        />
        <div className='flex gap-3'>
        <Button className="w-full" onClick={() => fetchPokemon(pokename)}>
          search
        </Button>
        <Button
          className="w-full bg-red-500 hover:bg-red-400"
          onClick={() => console.log(pokemon)}
        >
          log
        </Button>
        </div>
      </div>
      {pokemon !== null && pokemon?.id !== null ? (
        <div className="flex flex-col items-center w-full mt-5">
          <p>Pokémon Name: {pokemon?.name}</p>
          <img
            className="h-40"
            src={typeof pokemon?.image === 'string' ? pokemon?.image : ''}
            alt="pokemon-image"
          />
        </div>
      ) : (
        <div>
          <p className='text-red-700 bg-red-200 mt-3 p-1 px-2 rounded-sm'>enter a valid pokémon name!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
