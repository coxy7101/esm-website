import type { Metadata } from "next";
import { AlertTriangle, Users, TrendingUp, Check } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { FadeUp } from "@/components/fade-up";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we've helped businesses across construction, manufacturing, hospitality, and more achieve compliance, reduce incidents, and build genuine safety cultures.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="case-studies-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Real Results</p>
            <h1
              id="case-studies-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Case Studies
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              See how we&apos;ve helped businesses across construction, manufacturing, hospitality, and more achieve
              compliance, reduce incidents, and build genuine safety cultures.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-background" aria-labelledby="case-studies-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 id="case-studies-heading" className="sr-only">
            Case Studies
          </h2>
          <div className="flex flex-col gap-10">
            {caseStudies.map((study, i) => (
              <FadeUp key={study.title} delay={i * 0.05}>
                <article className="grid overflow-hidden rounded-xl border border-border shadow-sm lg:grid-cols-[280px_1fr]">
                  {/* Sidebar */}
                  <div className="flex flex-col gap-6 bg-navy p-8 text-white">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Sector</span>
                      <span className="text-xl font-bold">{study.sector}</span>
                    </div>
                    <div className="h-px w-10 bg-brand-green" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                        Client Profile
                      </span>
                      <span className="text-sm leading-relaxed text-white/90">{study.clientProfile}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/60">Timeframe</span>
                      <span className="text-sm leading-relaxed text-white/90">{study.timeframe}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-8 bg-card p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-navy text-balance md:text-3xl">{study.title}</h3>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2.5">
                        <AlertTriangle className="size-5 text-[#F4A020]" aria-hidden="true" />
                        <h4 className="text-lg font-bold text-navy">The Challenge</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{study.challenge}</p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2.5">
                        <Users className="size-5 text-[#F4A020]" aria-hidden="true" />
                        <h4 className="text-lg font-bold text-navy">Our Solution</h4>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {study.solution.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                            <Check className="mt-0.5 size-4 shrink-0 text-[#F4A020]" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2.5">
                        <TrendingUp className="size-5 text-brand-green" aria-hidden="true" />
                        <h4 className="text-lg font-bold text-navy">The Outcome</h4>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {study.outcome.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                            <Check className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
