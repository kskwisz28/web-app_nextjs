import {createClient} from "next-sanity";

export const projectId = process.env.SANITY_PROJECT_ID || '7hja5omh'

export const dataset = process.env.SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2023-02-14',
})
