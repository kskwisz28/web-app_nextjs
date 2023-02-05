import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
  cache: new InMemoryCache(),
});

export default client;
