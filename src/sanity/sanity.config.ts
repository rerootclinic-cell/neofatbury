// src/sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { structure } from './structure'
import { homepage, siteSettings, service, blogPost, teamMember, testimonial, gallery } from './schemaTypes'

export default defineConfig({
  name:  'neofatbury',
  title: 'NeoFatbury CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  schema: {
    types: [homepage, siteSettings, service, blogPost, teamMember, testimonial, gallery],
  },
})
