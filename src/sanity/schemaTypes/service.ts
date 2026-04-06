// src/sanity/schemaTypes/service.ts
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: '💉 Services & Treatments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'e.g. "Hydrafacial", "Botox", "Laser Hair Removal"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug (auto-generated)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Facial Treatments', value: 'facial' },
          { title: 'Body Treatments', value: 'body' },
          { title: 'Laser Treatments', value: 'laser' },
          { title: 'Injectables', value: 'injectables' },
          { title: 'Hair Treatments', value: 'hair' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (shown on cards)',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(160),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }], // rich text editor
    }),
    defineField({
      name: 'mainImage',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "From ₹2,999" or "₹5,000 - ₹8,000"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "45 minutes", "1 hour"',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first',
    }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'category', media: 'mainImage' },
  },

  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
