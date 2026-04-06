// ─────────────────────────────────────────────────────────────
//  GROQ Queries – one per content type
//  These map to the schemas you'll create in Sanity Studio
// ─────────────────────────────────────────────────────────────

export const homePageQuery = `*[_type == "homePage"][0]{
  heroHeading,
  heroSubheading,
  heroImage,
  trustBadges,
  specializations[]{
    title,
    description,
    image,
    link
  },
  whyUsPoints[]{
    title,
    description
  },
  locationKukatpally,
  locationHimayatnagar
}`;

export const servicePageQuery = (slug: string) => `
  *[_type == "servicePage" && slug.current == "${slug}"][0]{
    title,
    heroHeading,
    heroSubHeading,
    heroImage,
    trustBadges,
    problemHeading,
    problemPoints[],
    whatIsHeading,
    whatIsContent,
    suitableFor[],
    benefitsHeading,
    benefits[],
    processSteps[]{
      step,
      title,
      description
    },
    faqItems[]{
      question,
      answer
    },
    finalCtaHeading,
    finalCtaSubtext,
    seo{
      metaTitle,
      metaDescription
    }
  }
`;

export const allServicePagesQuery = `*[_type == "servicePage"]{
  _id,
  title,
  "slug": slug.current,
  heroImage,
  heroHeading
}`;
