import type { Metadata } from "next";
import { MapPin, Phone, Mail, Map } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Essential Safety Management",
  description:
    "Book your free, no-obligation health & safety consultation. Serving Coventry, Birmingham, Leicester and Warwickshire from our base in Bulkington.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    content: "Bulkington, Warwickshire",
  },
  {
    icon: Phone,
    label: "Phone",
    content: "024 7601 2642",
    href: "tel:+442476012642",
  },
  {
    icon: Mail,
    label: "Email",
    content: "info@essentialsafetymanagement.com",
    href: "mailto:info@essentialsafetymanagement.com",
  },
];

const coverageAreas = ["Coventry", "Birmingham", "Leicester", "Warwickshire"];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="contact-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Contact Us</p>
            <h1
              id="contact-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Get Your Free, No-Obligation Consultation Today
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              One conversation is all it takes to understand where your business stands. No pressure, no sales pitch —
              just honest, practical advice.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Split layout */}
      <section className="bg-background" aria-labelledby="contact-details-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left: contact info & coverage */}
          <FadeUp className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2
                id="contact-details-heading"
                className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
              >
                Let&apos;s Talk Safety
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Call, email or send us a message — whichever suits you. We answer every enquiry personally, usually the
                same day.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy">
                    <detail.icon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="break-all text-base font-semibold text-navy transition-colors hover:text-brand-green"
                      >
                        {detail.content}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-navy">{detail.content}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Coverage card */}
            <div className="flex flex-col gap-5 rounded-xl bg-navy p-8 text-white">
              <div className="flex items-center gap-3">
                <Map className="size-6 text-brand-green" aria-hidden="true" />
                <h3 className="text-lg font-bold uppercase tracking-wide">Our Coverage Area</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70 text-pretty">
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
                Outside these areas? Get in touch — we regularly travel further for the right projects.
              </p>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
