// lib/sanityClient.js
import { createClient } from "@sanity/client";

// Validate environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable');
}

if (!apiVersion) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_API_VERSION environment variable');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
});
