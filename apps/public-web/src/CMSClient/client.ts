import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  // Initialize the Apollo Client with an in-memory cache and HTTP link.
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_URI,
      // Uncomment and customize fetchOptions if you need to bypass result caching.
      fetchOptions: { cache: 'no-store' },
    }),
  });
});

export { getClient, query, PreloadQuery };
