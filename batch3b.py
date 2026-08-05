#!/usr/bin/env python3
"""ESM Batch 3b — service page copy fixes + Services page hero/process section."""
import pathlib

def replace_one(path, old, new, label):
    p = pathlib.Path(path)
    src = p.read_text(encoding="utf-8")
    n = src.count(old)
    if n == 1:
        p.write_text(src.replace(old, new), encoding="utf-8")
        print(f"  OK    {path} [{label}]")
    else:
        print(f"  WARN  {path} [{label}] — found {n} matches, expected 1. Skipped.")

SVC = "src/data/services.ts"

replace_one(SVC,
    '''    whyItMatters:
      "Under the Health and Safety at Work etc. Act 1974, employers with five or more staff are legally required to have a written health & safety policy. Beyond the legal minimum, clear documentation is often the first thing an inspector, insurer, or client asks to see - and the difference between a smooth audit and a serious problem.",''',
    '''    whyItMatters:
      "Every organisation needs clear arrangements for managing health and safety. Where five or more people are employed, the policy must be recorded in writing. We develop proportionate documentation that reflects how your organisation actually operates - not generic templates that sit unused.",''',
    "policies-documentation: whyItMatters")

replace_one(SVC,
    '''    intro:
      "A risk assessment that just ticks boxes doesn't protect anyone. We walk your site, talk to your team, and identify the hazards that actually exist in your workplace - then give you a clear, prioritised plan to control them.",''',
    '''    intro:
      "Effective risk assessments should identify the hazards present, establish who may be harmed and set out proportionate control measures. We combine site observation, consultation and document review to produce clear, prioritised actions.",''',
    "risk-assessments: intro")

replace_one(SVC,
    '''    description:
      "Independent audits that show exactly where you stand against current legislation, with a clear roadmap to full compliance.",''',
    '''    description:
      "Independent audits that show exactly where you stand against current legislation, with a clear, prioritised improvement plan.",''',
    "audits-compliance: description")

replace_one(SVC,
    '''    whatsIncluded: [
      "Principal Designer support",
      "CDM Coordinator services",
      "Pre-construction information",
      "Construction phase plans",
      "Health & safety file preparation",
      "CDM compliance audits",
    ],''',
    '''    whatsIncluded: [
      "Client dutyholder support",
      "Principal Designer advisory support, where within our competence and appointment scope",
      "Pre-construction information support",
      "Construction phase plan reviews",
      "Health & safety file support",
      "CDM compliance reviews and site inspections",
    ],''',
    "construction-safety-cdm: whatsIncluded")

replace_one(SVC,
    '''    intro:
      "Every employer is legally required to appoint a competent person for health & safety. Rather than a rotating call centre, you get a named consultant who actually knows your business, your site, and your history.",''',
    '''    intro:
      "Every employer is legally required to appoint a competent person for health & safety. You receive a consistent lead contact, documented service history and continuity of support throughout the engagement.",''',
    "competent-person: intro")

replace_one(SVC,
    '''    whyItMatters:
      "Section 7 of the Management of Health and Safety at Work Regulations 1999 requires every employer to appoint one or more competent persons. It's one of the most commonly overlooked legal duties for smaller businesses - and one of the simplest to resolve properly.",''',
    '''    whyItMatters:
      "Regulation 7 of the Management of Health and Safety at Work Regulations 1999 requires employers to appoint one or more competent persons to assist them in meeting their health and safety duties. Our retained service provides structured advice, monitoring and practical support while keeping responsibilities and actions clearly documented.",''',
    "competent-person: whyItMatters (Section 7 -> Regulation 7)")

replace_one(SVC,
    '''    intro:
      "Training that's just a slideshow and a signature doesn't change behaviour. We deliver practical, jargon-free sessions - on-site or remote - that your team actually engages with and remembers.",''',
    '''    intro:
      "Practical health and safety training tailored to your workplace, workforce and risk profile. Sessions can be delivered on site or remotely and are supported by attendance records and relevant course materials.",''',
    "training: intro")

replace_one(SVC,
    '''      "Equipment inspections",
      "Compliance certification",
    ],
    whyItMatters:
      "The Regulatory Reform (Fire Safety) Order 2005''',
    '''      "Equipment inspections",
      "Written findings, action plan and review schedule",
    ],
    whyItMatters:
      "The Regulatory Reform (Fire Safety) Order 2005''',
    "fire-risk-assessments: whatsIncluded (compliance certification)")

replace_one(SVC,
    '''    intro:
      "ISO 45001 is the international standard for occupational health & safety management systems - but building one from scratch, or maintaining an existing one, takes real expertise. We support you through every stage, from initial gap analysis to certification-ready documentation.",''',
    '''    intro:
      "ISO 45001 is the international standard for occupational health & safety management systems - but building one from scratch, or maintaining an existing one, takes real expertise. We support you through every stage, from initial gap analysis to preparing your management system for independent certification assessment.",''',
    "iso-45001-support: intro")

SVP = "src/app/services/page.tsx"

replace_one(SVP,
    '''  description:
    "Health & safety policies, risk assessments, audits, CDM support, competent person services and training for West Midlands businesses.",''',
    '''  description:
    "Health & safety policies, risk assessments, audits, CDM support, competent person services and training for organisations across the UK.",''',
    "services metadata description")

replace_one(SVP,
    '''            <h1
              id="services-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              Expert Health &amp; Safety Services Across the West Midlands
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              Everything your business needs to stay legally compliant, protect your staff and pass any inspection - 
              delivered by qualified consultants who speak your language, not legal jargon.
            </p>''',
    '''            <h1
              id="services-hero-heading"
              className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl"
            >
              UK-Wide Health and Safety Consultancy Services
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              Practical support to help your organisation meet its legal duties, manage workplace risk and maintain
              effective safety systems. Services are available as individual projects or as part of an ongoing
              consultancy package.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
              Our support is delivered on site throughout the UK and remotely where appropriate, with every
              assignment scoped around your operations, sector and risk profile.
            </p>''',
    "services H1 + opening copy")

replace_one(SVP,
    '''import {
  ArrowRight,
  Building2,
  Factory,
  Briefcase,
  Store,
  Check,
} from "lucide-react";''',
    '''import {
  ArrowRight,
  Building2,
  Factory,
  Briefcase,
  Store,
  Check,
  Search,
  ClipboardList,
  Wrench,
  RefreshCw,
} from "lucide-react";''',
    "services icon imports")

replace_one(SVP,
    '''export default function ServicesPage() {''',
    '''const process = [
  { icon: Search, title: "Assess", description: "We establish your current position and priorities." },
  { icon: ClipboardList, title: "Plan", description: "You receive a clear scope, deliverables and timescale." },
  { icon: Wrench, title: "Implement", description: "We help put practical controls and documentation in place." },
  { icon: RefreshCw, title: "Review", description: "Progress is checked and support adjusted as your organisation develops." },
];

export default function ServicesPage() {''',
    "services: add process array")

replace_one(SVP,
    '''      {/* Who we serve */}
      <section className="bg-muted" aria-labelledby="industries-heading">''',
    '''      {/* Our process */}
      <section className="bg-background" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="process-heading"
              className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
            >
              How We Work
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              A clear, consistent process from first conversation to ongoing support.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-navy">
                    <step.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-muted" aria-labelledby="industries-heading">''',
    "services: insert process section")

print("\\nDone. Review WARN lines above before committing.")
