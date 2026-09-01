import { site } from "@/data/site";

/**
 * Person structured data (JSON-LD). Deliberately excludes the phone number —
 * see src/data/site.ts's privacy note.
 */
export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Software Engineer",
    url: site.url,
    email: `mailto:${site.socials.email}`,
    worksFor: {
      "@type": "Organization",
      name: "FenixPyre",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Information Technology, Kottayam",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Cochin University of Science and Technology",
      },
    ],
    sameAs: [site.socials.github, site.socials.linkedin],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.titleDefault,
    url: site.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
