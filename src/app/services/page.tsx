import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Briefcase,
  Store,
  Check,
} from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { FinalCta } from "@/components/final-cta";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Health & safety policies, risk assessments, audits, CDM support, competent person services and training for West Midlands businesses.",
};

const industries = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "CDM compliance, site inspections, RAMS and contractor management for principal contractors and trades of every size.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    description:
      "Machinery safety, COSHH, workplace transport and warehouse risk management that keeps production moving safely.",
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    description:
      "DSE assessments, fire safety, first aid provision and sensible policies that protect staff without the red tape.",
  },
  {
    icon: Store,
    title: "Retail & Hospitality",
    description:
      "Public-facing risk assessments, food safety alignment and staff training built around busy customer environments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="services-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Our Services</p>
            <h1
              id="services-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Expert Health &amp; Safety Services Across the West Midlands
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              Everything your business needs to stay legally compliant, protect your staff and pass any inspection —
              delivered by qualified consultants who speak your language, not legal jargon.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-background" aria-labelledby="service-grid-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="service-grid-heading"
              className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
            >
              What We Deliver
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Six core services covering every stage of your compliance journey — use one, or combine them into a
              complete safety management package.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-navy">
                    <service.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-muted" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="industries-heading"
              className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
            >
              Who We Serve
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Every industry has its own risks. We tailor our approach to the hazards, regulations and working
              practices specific to your sector.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <FadeUp key={industry.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-brand-green/10">
                    <industry.icon className="size-6 text-brand-green" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Discuss your industry with us
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
