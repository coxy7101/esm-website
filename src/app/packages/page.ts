import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { packages, comparisonRows } from "@/data/packages";
import { FadeUp } from "@/components/fade-up";
import { FinalCta } from "@/components/final-cta";
import { PackagesFaq } from "@/components/packages-faq";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "H&S packages tailored to your business — from essential compliance support to fully outsourced health & safety management. Contact us for a quote.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="packages-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Our Packages</p>
            <h1
              id="packages-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              H&amp;S Packages Tailored to Your Needs
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              Choose the package that fits your business. From foundational support to fully outsourced H&amp;S
              management, we have a solution for every size and risk profile.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-background" aria-labelledby="pricing-cards-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 id="pricing-cards-heading" className="sr-only">
            Package Options
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.tier} delay={i * 0.08} className="h-full">
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm ${pkg.mostPopular
                      ? "border-[#F4A020] shadow-lg lg:-translate-y-3"
                      : "border-border"
                    }`}
                >
                  {/* Header */}
                  <div
                    className={`flex flex-col gap-3 p-8 ${pkg.mostPopular ? "bg-[#F4A020] text-navy" : "bg-navy text-white"
                      }`}
                  >
                    {pkg.mostPopular && (
                      <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#F4A020]">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-3xl font-bold">{pkg.name}</h3>
                    <p className={`text-sm ${pkg.mostPopular ? "text-navy/80" : "text-white/70"}`}>{pkg.tagline}</p>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{pkg.description}</p>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-navy">Best Suited For</span>
                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{pkg.bestSuitedFor}</p>
                    </div>

                    <div className="border-t border-border pt-6">
                      <ul className="flex flex-col gap-3">
                        {pkg.included.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                            <Check className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                        {pkg.notIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground/60">
                            <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors ${pkg.mostPopular
                          ? "bg-navy text-white hover:bg-navy-dark"
                          : "bg-brand-green text-white hover:bg-brand-green/85"
                        }`}
                    >
                      Get a Quote
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-muted" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Full Comparison</p>
            <h2 id="comparison-heading" className="mt-2 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Feature Comparison
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-12 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse bg-card text-sm">
              <thead>
                <tr>
                  <th className="bg-navy p-4 text-left font-bold uppercase tracking-wide text-white">Feature</th>
                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Bronze</th>
                  <th className="bg-[#F4A020] p-4 text-center font-bold uppercase tracking-wide text-navy">Silver</th>
                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Gold</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                    <td className="p-4 font-medium text-navy">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.bronze === "boolean" ? (
                        row.bronze ? (
                          <Check className="mx-auto size-5 text-brand-green" aria-hidden="true" />
                        ) : (
                          <X className="mx-auto size-5 text-muted-foreground/40" aria-hidden="true" />
                        )
                      ) : (
                        row.bronze
                      )}
                    </td>
                    <td className="bg-[#F4A020]/10 p-4 text-center text-muted-foreground">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? (
                          <Check className="mx-auto size-5 text-brand-green" aria-hidden="true" />
                        ) : (
                          <X className="mx-auto size-5 text-muted-foreground/40" aria-hidden="true" />
                        )
                      ) : (
                        row.silver
                      )}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <Check className="mx-auto size-5 text-brand-green" aria-hidden="true" />
                        ) : (
                          <X className="mx-auto size-5 text-muted-foreground/40" aria-hidden="true" />
                        )
                      ) : (
                        row.gold
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Common Questions</p>
            <h2 id="faq-heading" className="mt-2 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="mt-12">
            <PackagesFaq />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
