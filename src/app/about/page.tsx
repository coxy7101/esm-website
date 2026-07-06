import type { Metadata } from "next";
import { Award, MessagesSquare, MapPin, ShieldCheck } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "About | Essential Safety Management",
  description:
    "Essential Safety Management is a health & safety consultancy based in Bulkington, Warwickshire, delivering practical, jargon-free safety advice across the West Midlands.",
};

const values = [
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "NEBOSH and IOSH qualified consultants with hands-on experience across construction, manufacturing and commercial environments — not just theory from a textbook.",
  },
  {
    icon: MessagesSquare,
    title: "Jargon-Free Approach",
    description:
      "We translate legislation into practical actions your team can actually follow. Real safety improvements, not just boxes ticked and paperwork filed.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description:
      "Based in Bulkington, we're on-site across the West Midlands when you need us most — for planned visits, urgent incidents or a same-day phone call.",
  },
];

const accreditations = ["CHAS", "SafeContractor", "ISO 45001", "Constructionline", "NEBOSH", "IOSH"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="about-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">About Us</p>
            <h1
              id="about-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Moving West Midlands Businesses From Risk to Compliance
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              A hands-on health &amp; safety consultancy built on one belief: compliance should make your business
              safer and stronger — not bury it in paperwork.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story / mission */}
      <section className="bg-background" aria-labelledby="story-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <FadeUp className="flex flex-col gap-5">
            <h2
              id="story-heading"
              className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
            >
              Our Story &amp; Mission
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Essential Safety Management was founded in Bulkington, Warwickshire, with a simple goal: give small and
              medium-sized businesses access to the same calibre of health &amp; safety expertise that big companies
              take for granted — without the big-company price tag or the big-company jargon.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Too many businesses see health &amp; safety as a burden: confusing legislation, generic templates and
              consultants who disappear once the invoice is paid. We do things differently. We get to know how your
              business actually works, then build practical safety systems your team will genuinely use.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              From a first fire risk assessment to a fully retained competent person service, our mission is the same:
              move your business from risk to compliance — and keep it there.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-6 rounded-xl bg-navy p-8 text-white md:p-10">
              <ShieldCheck className="size-12 text-brand-green" aria-hidden="true" />
              <blockquote className="text-xl font-semibold leading-relaxed text-balance md:text-2xl">
                &ldquo;Good safety advice shouldn&apos;t need a law degree to understand. If your team can&apos;t
                follow it, it isn&apos;t working.&rdquo;
              </blockquote>
              <p className="text-sm font-medium uppercase tracking-widest text-white/60">
                Essential Safety Management — Bulkington, Warwickshire
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Value propositions */}
      <section className="bg-muted" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="values-heading"
              className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
            >
              Why Businesses Choose Us
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Three things every client gets, on every job, without exception.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-navy">
                    <value.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-background" aria-labelledby="accreditations-heading">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col items-center gap-8 text-center">
            <h2
              id="accreditations-heading"
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Accreditations &amp; Industry Standards We Work To
            </h2>
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {accreditations.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy"
                >
                  <ShieldCheck className="size-4 text-brand-green" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
