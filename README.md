# Graphql client Implementation

Documented By: [Abhijay Rajvansh](https://abhijayrajvansh.com)

## Description

- client using @apollo/client

```typescript
import { ApolloClient, InMemoryCache } from '@apollo/client';

const gqlClient = new ApolloClient({
  uri: 'SERVER_URL',
  cache: new InMemoryCache(),
});

export default gqlClient;
```

- queries using `gql` documented form:
```typescript
import { gql } from '@apollo/client';

export const getPokemonByName = gql`
  query getPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
    }
  }
`;
```

- parse variables: `GET Request`
```typescript
async function fetchPokemon(pokename: string) {
    const { data } = await gqlClient.query({ // gqlClient.mutate(... for mutation
      query: getPokemonByName, // parse muatation: addMutationFn
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
```