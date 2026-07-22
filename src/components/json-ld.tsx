export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Essential Safety Management",
    description:
      "Expert health & safety consultancy for West Midlands businesses. Audits, risk assessments, policies and documentation.",
    url: "https://essentialsafetymanagement.com",
    telephone: "+442476012642",
    email: "info@essentialsafetymanagement.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulkington",
      addressRegion: "Warwickshire",
      addressCountry: "GB",
    },
    areaServed: ["Coventry", "Birmingham", "Leicester", "Warwickshire"],
    priceRange: "££",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
