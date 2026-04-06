import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'YOUR_PROJECT_ID',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

export const client = createClient(sanityConfig);

// Image URL helper
const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Returns true once real credentials are plugged in
export const isSanityConfigured =
  sanityConfig.projectId !== 'YOUR_PROJECT_ID' &&
  sanityConfig.projectId !== '';
