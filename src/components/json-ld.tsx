export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Essential Safety Management",
    description:
      "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
    url: "https://essentialsafetymanagement.com",
    telephone: "+442476012642",
    email: "info@essentialsafetymanagement.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulkington",
      addressRegion: "Warwickshire",
      addressCountry: "GB",
    },
    areaServed: "United Kingdom",
    priceRange: "\u00a3\u00a3",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
