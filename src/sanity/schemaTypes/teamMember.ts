// src/sanity/schemaTypes/teamMember.ts
import { defineType, defineField } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: '👩‍⚕️ Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / Designation', type: 'string', description: 'e.g. Senior Dermatologist, Trichologist' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 4 }),
    defineField({
      name: 'qualifications', title: 'Qualifications',
      type: 'array', of: [{ type: 'string' }],
      description: 'e.g. MBBS, MD (Dermatology), DNB',
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
