// src/sanity/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: '📸 Before & After Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'treatment', title: 'Treatment', type: 'string',
      description: 'e.g. Laser Hair Reduction, Acne Scar Treatment',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Result Description (optional)', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'treatment', media: 'afterImage' } },
})
