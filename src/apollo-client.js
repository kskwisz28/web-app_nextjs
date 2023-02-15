import {ApolloClient, InMemoryCache} from "@apollo/client";
import {createClient} from "next-sanity";

const apolloClient = new ApolloClient({
  uri: `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
  cache: new InMemoryCache(),
});

export default apolloClient;

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '7hja5omh',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-02-14',
})
