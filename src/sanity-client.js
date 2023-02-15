import {createClient} from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '7hja5omh',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-02-14',
})
