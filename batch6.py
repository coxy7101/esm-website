#!/usr/bin/env python3
"""ESM Batch 6 -- canonical URLs, page titles, Service/Breadcrumb/FAQ schema."""
import pathlib

def replace_one(path, old, new, label):
    p = pathlib.Path(path)
    src = p.read_text(encoding="utf-8")
    n = src.count(old)
    if n == 1:
        p.write_text(src.replace(old, new), encoding="utf-8")
        print(f"  OK    {path} [{label}]")
    else:
        print(f"  WARN  {path} [{label}] -- found {n} matches, expected 1. Skipped.")

# ---------- layout.tsx: canonical for homepage ----------
replace_one("src/app/layout.tsx",
    '''  description:
    "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
  openGraph: {''',
    '''  description:
    "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {''',
    "homepage canonical")

# ---------- services/page.tsx: title + canonical ----------
replace_one("src/app/services/page.tsx",
    '''export const metadata: Metadata = {
  title: "Services",
  description:
    "Health & safety policies, risk assessments, audits, CDM support, competent person services and training for organisations across the UK.",
};''',
    '''export const metadata: Metadata = {
  title: "Health & Safety Consultancy Services UK",
  description:
    "Health & safety policies, risk assessments, audits, CDM support, competent person services and training for organisations across the UK.",
  alternates: {
    canonical: "/services",
  },
};''',
    "services title + canonical")

# ---------- about/page.tsx: title + canonical ----------
replace_one("src/app/about/page.tsx",
    '''export const metadata: Metadata = {
  title: "About",
  description:
    "Essential Safety Management is a UK-wide health and safety consultancy based in Bulkington, Warwickshire, delivering practical, jargon-free safety advice to organisations across the UK.",
};''',
    '''export const metadata: Metadata = {
  title: "About Our UK Health & Safety Consultancy",
  description:
    "Essential Safety Management is a UK-wide health and safety consultancy based in Bulkington, Warwickshire, delivering practical, jargon-free safety advice to organisations across the UK.",
  alternates: {
    canonical: "/about",
  },
};''',
    "about title + canonical")

# ---------- contact/page.tsx: title (absolute override) + canonical ----------
replace_one("src/app/contact/page.tsx",
    '''export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your free, no-obligation health & safety consultation. Essential Safety Management supports organisations throughout the UK from our base in Bulkington, Warwickshire.",
};''',
    '''export const metadata: Metadata = {
  title: {
    absolute: "Contact Essential Safety Management | UK-Wide Consultancy",
  },
  description:
    "Book your free, no-obligation health & safety consultation. Essential Safety Management supports organisations throughout the UK from our base in Bulkington, Warwickshire.",
  alternates: {
    canonical: "/contact",
  },
};''',
    "contact title + canonical")

# ---------- packages/page.tsx: canonical ----------
replace_one("src/app/packages/page.tsx",
    '''export const metadata: Metadata = {
  title: "Packages",
  description:
    "H&S packages tailored to your business - from essential compliance support to fully outsourced health & safety management. Contact us for a quote.",
};''',
    '''export const metadata: Metadata = {
  title: "Packages",
  description:
    "H&S packages tailored to your business - from essential compliance support to fully outsourced health & safety management. Contact us for a quote.",
  alternates: {
    canonical: "/packages",
  },
};''',
    "packages canonical")

# ---------- case-studies/page.tsx: canonical ----------
replace_one("src/app/case-studies/page.tsx",
    '''export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we've helped businesses across construction, manufacturing, hospitality, and more achieve compliance, reduce incidents, and build genuine safety cultures.",
};''',
    '''export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we've helped businesses across construction, manufacturing, hospitality, and more achieve compliance, reduce incidents, and build genuine safety cultures.",
  alternates: {
    canonical: "/case-studies",
  },
};''',
    "case-studies canonical")

# ---------- industries/page.tsx: canonical ----------
replace_one("src/app/industries/page.tsx",
    '''export const metadata: Metadata = {
  title: "Industries",
  description:
    "We have deep experience across a wide range of sectors, allowing us to provide genuinely sector-specific health and safety advice rather than generic guidance.",
};''',
    '''export const metadata: Metadata = {
  title: "Industries",
  description:
    "We have deep experience across a wide range of sectors, allowing us to provide genuinely sector-specific health and safety advice rather than generic guidance.",
  alternates: {
    canonical: "/industries",
  },
};''',
    "industries canonical")

# ---------- privacy-policy/page.tsx: canonical ----------
replace_one("src/app/privacy-policy/page.tsx",
    '''export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Essential Safety Management collects, uses, and protects your personal data.",
};''',
    '''export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Essential Safety Management collects, uses, and protects your personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};''',
    "privacy-policy canonical")

# ---------- service detail pages: fix duplicated title + canonical ----------
SLUG = "src/app/services/[slug]/page.tsx"

replace_one(SLUG,
    '''  return {
    title: `${service.title} | Essential Safety Management`,
    description: service.description,
  };''',
    '''  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };''',
    "service detail: fix duplicated title, add canonical")

replace_one(SLUG,
    '''  if (!service) notFound();

  const Icon = service.icon;''',
    '''  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Essential Safety Management",
    },
    areaServed: "United Kingdom",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://essentialsafetymanagement.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://essentialsafetymanagement.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://essentialsafetymanagement.com/services/${service.slug}` },
    ],
  };

  const Icon = service.icon;''',
    "service detail: add schema objects")

replace_one(SLUG,
    '''  return (
    <>
      {/* Hero */}''',
    '''  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}''',
    "service detail: render schema scripts")

# ---------- packages/page.tsx: FAQ schema ----------
replace_one("src/app/packages/page.tsx",
    '''import { packages, comparisonRows } from "@/data/packages";''',
    '''import { packages, comparisonRows, packagesFaq } from "@/data/packages";''',
    "packages: import packagesFaq")

replace_one("src/app/packages/page.tsx",
    '''export default function PackagesPage() {
  return (
    <>
      {/* Hero */}''',
    '''export default function PackagesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: packagesFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}''',
    "packages: render FAQ schema")

print("\\nDone. Review WARN lines above before committing.")
