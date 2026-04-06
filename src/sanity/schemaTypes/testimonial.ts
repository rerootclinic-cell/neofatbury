// src/sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: '⭐ Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'treatment', title: 'Treatment Taken', type: 'string', description: 'e.g. Laser Hair Reduction, CoolSculpting' }),
    defineField({
      name: 'rating', title: 'Rating (1–5)', type: 'number',
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({ name: 'review', title: 'Review Text', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'clientPhoto', title: 'Client Photo (optional)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'treatment', media: 'clientPhoto' },
    prepare({ title, subtitle }) { return { title, subtitle: `⭐ ${subtitle ?? ''}` } },
  },
})
