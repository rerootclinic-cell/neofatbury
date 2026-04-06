// src/sanity/schemaTypes/service.ts
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: '💉 Service',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Service Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: [{ title: 'Skin', value: 'skin' }, { title: 'Hair', value: 'hair' }, { title: 'Slimming / Body', value: 'slimming' }], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Lower = shown first' }),
    defineField({ name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean', initialValue: false }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2, validation: (r) => r.max(160) }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'price', title: 'Starting Price (e.g. ₹2,999)', type: 'string' }),
    defineField({ name: 'duration', title: 'Session Duration (e.g. 45 mins)', type: 'string' }),
    defineField({
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (r) => r.max(60) }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (r) => r.max(160) }),
      ],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'mainImage' } },
})
