#!/usr/bin/env python3
"""ESM Batch 2 — trust strip rebuild, homepage service cards, clickable service cards."""
import pathlib, re

# 1. trust-strip.tsx — full rewrite
pathlib.Path("src/components/trust-strip.tsx").write_text('''import { FadeUp } from "@/components/fade-up";

const pillars = [
  "UK-wide service delivery",
  "Fully insured consultancy",
  "Project-based and retained support",
  "Practical, sector-specific advice",
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-28 md:-mt-36" aria-label="Why choose us">
      <FadeUp
        delay={0.2}
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl bg-white px-6 py-6 shadow-xl md:px-10 md:py-7"
      >
        {pillars.map((pillar) => (
          <span key={pillar} className="text-sm font-semibold text-navy md:text-base">
            {pillar}
          </span>
        ))}
      </FadeUp>
    </section>
  );
}
''', encoding="utf-8")
print("OK  trust-strip.tsx rewritten")

# 2. services-overview.tsx — full rewrite, pulls all 9 real services
pathlib.Path("src/components/services-overview.tsx").write_text('''import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="bg-background" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <FadeUp>
            <h2 id="services-heading" className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl">
              How We Help
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              From one-off compliance projects to ongoing health and safety management, we provide nine core services tailored to your organisation, sector and risk profile.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(18,41,77,0.18)]">
              <Image
                src="/images/homepage-window-cleaner.jpg"
                priority
                alt="Safety professional working at height, representing our careful, considered approach"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-navy">
                  <service.icon className="size-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors group-hover:text-navy">
                  Learn more
                  <ArrowRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">about {service.title}</span>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK  services-overview.tsx rewritten (now shows all 9 real services)")

# 3. services/page.tsx — make cards clickable (targeted replace, file has more content we're not touching)
p = pathlib.Path("src/app/services/page.tsx")
src = p.read_text(encoding="utf-8")

old = '''            {services.map((service, i) => (
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
            ))}'''

new = '''            {services.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
                >
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
                </Link>
              </FadeUp>
            ))}'''

n = src.count(old)
if n == 1:
    p.write_text(src.replace(old, new), encoding="utf-8")
    print("OK  services/page.tsx cards are now clickable")
else:
    print(f"WARNING  expected 1 match in services/page.tsx, found {n} — no changes written, check manually")

# 4. Delete now-unused credential logo images
for img in ["nebosh-logo.png", "iosh-tech-logo.png", "iosh-managing-safely-logo.png", "licensed-insured-logo.png"]:
    fp = pathlib.Path("public/images") / img
    if fp.exists():
        fp.unlink()
        print(f"OK  deleted public/images/{img}")
    else:
        print(f"SKIP  public/images/{img} not found")
