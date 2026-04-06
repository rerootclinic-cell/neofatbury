// src/sanity/schemaTypes/blogPost.ts
import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: '📝 Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Post Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt / Short Summary', type: 'text', rows: 3, validation: (r) => r.max(200) }),
    defineField({
      name: 'tags', title: 'Tags', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'body', title: 'Article Content', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (r) => r.max(60) }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (r) => r.max(160) }),
      ],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' } },
  orderings: [{ title: 'Newest First', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
