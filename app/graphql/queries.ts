import { gql } from "@apollo/client";

export const getContinentsName = gql`
  query Continents {
    continents {
      name
    }
  }
`;
