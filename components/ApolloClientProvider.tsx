'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};

export default ApolloClientProvider;
