import { gql } from "@apollo/client";

export const generateGoogleSignedInToken = gql `
  query Query($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;

