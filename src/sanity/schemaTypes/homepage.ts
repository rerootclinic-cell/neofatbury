// src/sanity/schemaTypes/homepage.ts
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: '🏠 Homepage',
  type: 'document',
  // Only one homepage document ever
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section (Top Banner)',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          description: 'Big title text e.g. "Reveal Your Best Skin"',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 2,
          description: 'Short description below the main heading',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'e.g. "Book a Consultation"',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'e.g. /contact or /book',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'body', title: 'Text', type: 'text', rows: 5 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'whyUsPoints',
      title: 'Why Choose Us (3-4 points)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Emoji Icon', type: 'string', description: 'e.g. ✨ 💉 🌿' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
      ],
    }),
  ],

  preview: {
    prepare: () => ({ title: 'Homepage Content' }),
  },
})
