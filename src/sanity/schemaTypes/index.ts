// src/sanity/schemaTypes/index.ts
import { homepage } from './homepage'
import { service } from './service'
import { blogPost } from './blogPost'
import { teamMember } from './teamMember'
import { testimonial } from './testimonial'
import { gallery } from './gallery'
import { siteSettings } from './siteSettings'

export const schemaTypes = [
  // Singleton documents (only one each)
  homepage,
  siteSettings,

  // Repeatable content
  service,
  blogPost,
  teamMember,
  testimonial,
  gallery,
]
