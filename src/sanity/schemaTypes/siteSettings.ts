// src/sanity/schemaTypes/siteSettings.ts
import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '⚙️ Clinic Info & Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'clinicName', title: 'Clinic Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({
      name: 'contact', title: 'Contact Details', type: 'object',
      fields: [
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
        defineField({ name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' }),
      ],
    }),
    defineField({
      name: 'openingHours', title: 'Opening Hours', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'day', title: 'Day', type: 'string', description: 'e.g. Monday - Friday' }),
          defineField({ name: 'hours', title: 'Hours', type: 'string', description: 'e.g. 10:00 AM - 7:00 PM' }),
        ],
        preview: { select: { title: 'day', subtitle: 'hours' } },
      }],
    }),
    defineField({
      name: 'socialMedia', title: 'Social Media Links', type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
    defineField({ name: 'bookingUrl', title: 'Online Booking Link', type: 'url', description: 'Link to your booking system (if any)' }),
  ],
  preview: { prepare: () => ({ title: 'Clinic Info & Settings' }) },
})
