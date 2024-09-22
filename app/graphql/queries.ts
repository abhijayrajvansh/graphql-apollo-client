import { gql } from '@apollo/client';

export const getPokemonByName = gql`
  query getPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
    }
  }
`;
