// src/sanity/structure.ts
// This controls what clients see in the Studio sidebar
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Neofatbury CMS')
    .items([
      // --- SINGLETON: Homepage ---
      S.listItem()
        .title('🏠 Homepage')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      // --- SINGLETON: Clinic Settings ---
      S.listItem()
        .title('⚙️ Clinic Info & Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // --- Services ---
      S.listItem()
        .title('💉 Services & Treatments')
        .schemaType('service')
        .child(S.documentTypeList('service').title('All Services')),

      // --- Blog ---
      S.listItem()
        .title('📝 Blog & Articles')
        .schemaType('blogPost')
        .child(S.documentTypeList('blogPost').title('All Articles')),

      // --- Gallery ---
      S.listItem()
        .title('📸 Before & After Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      S.divider(),

      // --- Team ---
      S.listItem()
        .title('👩‍⚕️ Team Members')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team')),

      // --- Testimonials ---
      S.listItem()
        .title('⭐ Client Testimonials')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
    ])
