import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We have deep experience across a wide range of sectors, allowing us to provide genuinely sector-specific health and safety advice rather than generic guidance.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="industries-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Sectors We Serve</p>
            <h1
              id="industries-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Industries We Work With
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              We have deep experience across a wide range of sectors, allowing us to provide genuinely
              sector-specific health and safety advice rather than generic guidance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industry cards */}
      <section className="bg-background" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 id="industries-heading" className="sr-only">
            Industries
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry, i) => (
              <FadeUp key={industry.title} delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-r-xl border-l-4 border-[#F4A020] bg-card p-8 shadow-sm">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-navy">
                    <industry.icon className="size-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{industry.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{industry.description}</p>

                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-navy">Key Services</span>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto rounded-lg bg-[#F4A020]/10 px-4 py-3">
                    <p className="text-xs leading-relaxed text-navy">
                      <span className="font-bold">Key Legislation:</span> {industry.keyLegislation}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#F4A020] text-white" aria-labelledby="industries-cta-heading">
        <FadeUp className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 id="industries-cta-heading" className="text-3xl font-bold uppercase tracking-tight text-balance md:text-4xl">
            Don&apos;t See Your Sector?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/90 text-pretty">
            We work with businesses across all industries. Contact us to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Discuss Your Requirements
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
