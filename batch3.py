#!/usr/bin/env python3
"""ESM Batch 3 — UK-wide copy sweep + SEO metadata + JSON-LD."""
import pathlib

def replace_one(path, old, new, label):
    p = pathlib.Path(path)
    src = p.read_text(encoding="utf-8")
    n = src.count(old)
    if n == 1:
        p.write_text(src.replace(old, new), encoding="utf-8")
        print(f"  OK    {path} [{label}]")
    else:
        print(f"  WARN  {path} [{label}] — found {n} matches, expected 1. Skipped, check manually.")

# ---------- hero.tsx: full rewrite ----------
pathlib.Path("src/components/hero.tsx").write_text('''"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-dark text-white">
      {/* Background photograph */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-window-cleaners.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(100%)" }}
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(18,41,77,0.78)" }} />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            Practical health and safety management for organisations <span className="text-brand-green">across the UK</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="max-w-lg text-lg leading-relaxed text-white/75 text-pretty"
          >
            Audits, risk assessments, policies, training and retained competent-person support&mdash;delivered on site throughout the UK and remotely where appropriate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-brand-green px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-green/85"
            >
              Book an Initial Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>

        <div className="relative flex items-end justify-center pb-6 md:justify-end md:pr-10" aria-hidden="true">
          <div className="relative w-64 md:w-80">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            >
              <Image
                src="/images/logo-bars-only.png"
                alt=""
                width={1280}
                height={1290}
                className="h-auto w-full"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.3, type: "spring", stiffness: 200, damping: 12 }}
              className="absolute inset-0 drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]"
            >
              <Image
                src="/images/logo-checkmark-only.png"
                alt=""
                width={1280}
                height={1290}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK  hero.tsx rewritten")

# ---------- layout.tsx: metadata block ----------
replace_one(
    "src/app/layout.tsx",
    '''export const metadata: Metadata = {
  metadataBase: new URL("https://essentialsafetymanagement.com"),
  title: {
    default: "Essential Safety Management | Health & Safety Consultancy, West Midlands",
    template: "%s | Essential Safety Management",
  },
  description:
    "Expert health & safety consultancy for West Midlands businesses. Audits, risk assessments, policies and documentation done right. Based in Bulkington, Warwickshire.",
  openGraph: {
    title: "Essential Safety Management | Health & Safety Consultancy",
    description:
      "Expert health & safety consultancy for West Midlands businesses. Audits, risk assessments, policies and documentation done right.",
    url: "https://essentialsafetymanagement.com",
    siteName: "Essential Safety Management",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};''',
    '''export const metadata: Metadata = {
  metadataBase: new URL("https://essentialsafetymanagement.com"),
  title: {
    default: "Health & Safety Consultancy UK | Essential Safety Management",
    template: "%s | Essential Safety Management",
  },
  description:
    "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
  openGraph: {
    title: "Health & Safety Consultancy UK | Essential Safety Management",
    description:
      "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
    url: "https://essentialsafetymanagement.com",
    siteName: "Essential Safety Management",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};''',
    "root metadata"
)

# ---------- json-ld.tsx: full rewrite ----------
pathlib.Path("src/components/json-ld.tsx").write_text('''export function JsonLd() {
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
    priceRange: "\\u00a3\\u00a3",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
''', encoding="utf-8")
print("OK  json-ld.tsx rewritten")

# ---------- about/page.tsx ----------
replace_one(
    "src/app/about/page.tsx",
    '''  description:
    "Essential Safety Management is a health & safety consultancy based in Bulkington, Warwickshire, delivering practical, jargon-free safety advice across the West Midlands.",''',
    '''  description:
    "Essential Safety Management is a UK-wide health and safety consultancy based in Bulkington, Warwickshire, delivering practical, jargon-free safety advice to organisations across the UK.",''',
    "about metadata description"
)

replace_one(
    "src/app/about/page.tsx",
    '''              <h1
                id="about-hero-heading"
                className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
              >
                Moving West Midlands Businesses From Risk to Compliance
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
                A hands-on health &amp;amp; safety consultancy built on one belief: compliance should make your business
                safer and stronger - not bury it in paperwork.
              </p>'''.replace("&amp;amp;", "&amp;"),
    '''              <h1
                id="about-hero-heading"
                className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
              >
                Practical Health and Safety Support for Organisations Across the UK
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
                Essential Safety Management is a UK health and safety consultancy helping organisations manage risk,
                meet their legal duties and build safety systems that work in practice.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
                Based in Warwickshire and supporting clients throughout the UK, we provide project-based and retained
                consultancy across construction, manufacturing, logistics, commercial and other working environments.
                Our approach combines clear advice, practical implementation and accountable ongoing support.
              </p>''',
    "about H1 + intro"
)

replace_one(
    "src/app/about/page.tsx",
    '''    icon: Award,
    title: "Certified Expertise",
    description:
      "NEBOSH and IOSH qualified consultants with hands-on experience across construction, manufacturing and commercial environments - not just theory from a textbook.",''',
    '''    icon: Award,
    title: "Competence Matched to the Assignment",
    description:
      "Every engagement is scoped according to the sector, level of risk and specialist competence required. Evidence of relevant professional competence and insurance is available on request.",''',
    "about value: Certified Expertise"
)

replace_one(
    "src/app/about/page.tsx",
    '''    icon: MapPin,
    title: "Local & Reliable",
    description:
      "Based in Bulkington, we're on-site across the West Midlands when you need us most - for planned visits, urgent incidents or a same-day phone call.",''',
    '''    icon: MapPin,
    title: "UK-Wide, Responsive Delivery",
    description:
      "On-site support is available throughout the UK, supported by remote advice, structured reporting and clear agreed timescales.",''',
    "about value: Local & Reliable"
)

replace_one(
    "src/app/about/page.tsx",
    '''              Accreditations &amp; Industry Standards We Work To''',
    '''              Professional Standards and Frameworks''',
    "about accreditations heading"
)

replace_one(
    "src/app/about/page.tsx",
    '''const accreditations = ["CHAS", "SafeContractor", "ISO 45001", "Constructionline", "NEBOSH", "IOSH"];''',
    '''const accreditations = ["CHAS", "SafeContractor", "ISO 45001", "Constructionline"];''',
    "about accreditations array (NEBOSH/IOSH removed, rest pending client confirmation)"
)

# ---------- contact/page.tsx ----------
replace_one(
    "src/app/contact/page.tsx",
    '''  description:
    "Book your free, no-obligation health & safety consultation. Serving Coventry, Birmingham, Leicester and Warwickshire from our base in Bulkington.",''',
    '''  description:
    "Book your free, no-obligation health & safety consultation. Essential Safety Management supports organisations throughout the UK from our base in Bulkington, Warwickshire.",''',
    "contact metadata description"
)

replace_one(
    "src/app/contact/page.tsx",
    '''              <h2
                id="contact-details-heading"
                className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
              >
                Let&apos;s Talk Safety
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Call, email or send us a message - whichever suits you. We answer every enquiry personally, usually the
                same day.
              </p>'''.replace("&apos;", "'"),
    '''              <h2
                id="contact-details-heading"
                className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
              >
                Discuss Your Health and Safety Requirements
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Tell us about your organisation, locations and priorities. Our team will review your enquiry and
                respond within one working day.
              </p>'''.replace("Let's", "Let&apos;s"),
    "contact heading + intro"
)

replace_one(
    "src/app/contact/page.tsx",
    '''const coverageAreas = ["Coventry", "Birmingham", "Leicester", "Warwickshire"];''',
    '''const coverageDetails = [
  { label: "Head office", value: "Bulkington, Warwickshire" },
  { label: "Service area", value: "United Kingdom" },
];''',
    "contact coverage data"
)

replace_one(
    "src/app/contact/page.tsx",
    '''              <p className="text-sm leading-relaxed text-white/70 text-pretty">
                Based in Bulkington, we provide on-site health &amp; safety support across the wider West Midlands
                region, including:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-white/70">
                Outside these areas? Get in touch - we regularly travel further for the right projects.
              </p>''',
    '''              <ul className="flex flex-col gap-3">
                {coverageDetails.map((detail) => (
                  <li key={detail.label} className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
                    <span className="font-semibold">{detail.label}:</span>
                    <span className="text-white/80">{detail.value}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-white/70">
                Site visits are arranged according to project scope and urgency, with remote consultancy available
                nationwide.
              </p>''',
    "contact coverage card"
)

print("\\nDone. Review WARN lines above before committing.")
