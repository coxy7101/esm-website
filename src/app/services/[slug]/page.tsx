import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { FinalCta } from "@/components/final-cta";
import { services } from "@/data/services";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Essential Safety Management`,
    description: service.description,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  // Adjacent services for prev/next navigation
  const index = services.indexOf(service);
  const prev = index > 0 ? services[index - 1] : null;
  const next = index < services.length - 1 ? services[index + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white" aria-labelledby="service-hero-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeUp className="flex max-w-3xl flex-col gap-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-green transition-opacity hover:opacity-75"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All Services
            </Link>

            <div className="flex size-16 items-center justify-center rounded-xl bg-white/10">
              <Icon className="size-8 text-white" aria-hidden="true" />
            </div>

            <h1
              id="service-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              {service.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              {service.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background" aria-labelledby="service-detail-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
            {/* Left — detail copy */}
            <FadeUp className="flex flex-col gap-8">
              <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {service.detail.intro}
              </p>

              <div>
                <h2
                  id="service-detail-heading"
                  className="mb-5 text-xl font-bold uppercase tracking-tight text-navy"
                >
                  What&apos;s Included
                </h2>
                <ul className="flex flex-col gap-3">
                  {service.detail.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                        <Check className="size-3 text-brand-green" aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {service.detail.closing}
              </p>
            </FadeUp>

            {/* Right — sidebar CTA */}
            <FadeUp delay={0.15} className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Ready to get started?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Book a free, no-obligation consultation and find out exactly how we can help your business.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
                >
                  Book a Free Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              {/* All services list */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  All Services
                </h3>
                <ul className="flex flex-col gap-1">
                  {services.map((s) => {
                    const SIcon = s.icon;
                    const isActive = s.slug === service.slug;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-navy text-white"
                              : "text-foreground hover:bg-muted"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <SIcon className="size-4 shrink-0" aria-hidden="true" />
                          {s.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <FadeUp delay={0.2} className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8">
              {prev ? (
                <Link
                  href={`/services/${prev.slug}`}
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
                >
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest">Previous</span>
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/services/${next.slug}`}
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
                >
                  <span className="text-right">
                    <span className="block text-xs uppercase tracking-widest">Next</span>
                    {next.title}
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ) : (
                <div />
              )}
            </FadeUp>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
