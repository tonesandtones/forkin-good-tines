'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  InMemoryCache,
  ApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';

// Define the GraphQL endpoint URI as a constant to avoid magic strings.
const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

// Function to create an instance of Apollo Client tailored for SSR or client-side usage.
function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_URI,
    // Uncomment and customize fetchOptions if you need to bypass result caching.
    // fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // For SSR: Handle multipart messages and strip 'defer' fields.
            new SSRMultipartLink({ stripDefer: true }),
            httpLink,
          ])
        : httpLink, // For client-side: Use the simple HTTP link.
  });
}

// ApolloWrapper component to provide Apollo Client to the application.
const ApolloWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    {children}
  </ApolloNextAppProvider>
);

export { ApolloWrapper };
