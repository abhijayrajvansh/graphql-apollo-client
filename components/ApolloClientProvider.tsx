'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {

  const SERVER_1 = "https://countries.trevorblades.com/";
  const SERVER_2 = "http://localhost:8080/graphql"

  const client = new ApolloClient({
    uri: SERVER_2,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};

export default ApolloClientProvider;
