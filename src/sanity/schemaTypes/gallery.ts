// src/sanity/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: '📸 Before & After Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'treatment',
      title: 'Treatment Name',
      type: 'string',
      description: 'e.g. "Acne Scar Treatment"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description (optional)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: { title: 'treatment', media: 'afterImage' },
    prepare({ title, media }) {
      return { title, subtitle: 'Before & After', media }
    },
  },
})
