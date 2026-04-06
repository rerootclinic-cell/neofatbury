// src/sanity/sanity.config.ts
// Used when running the Studio embedded inside Next.js at /studio route
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { structure } from './structure'

// ── Schemas ──────────────────────────────────────────────
import { homePage }    from './schemas/homePage'
import { service }     from './schemas/service'
import { blogPost }    from './schemas/blogPost'
import { teamMember }  from './schemas/teamMember'
import { testimonial } from './schemas/testimonial'
import { gallery }     from './schemas/gallery'
import { siteSettings } from './schemas/siteSettings'
import { locationPage } from './schemas/locationPage'

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
    types: [
      homePage,
      service,
      blogPost,
      teamMember,
      testimonial,
      gallery,
      siteSettings,
      locationPage,
    ],
  },
})
