import Link from "next/link";
import { FileText, ClipboardCheck, SearchCheck, HardHat, TrafficCone, Siren, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/fade-up";

const services = [
  {
    slug: "policies-documentation",
    icon: FileText,
    title: "Policies & Documentation",
    description: "Health & safety policies and documentation tailored to your business, kept audit-ready.",
  },
  {
    slug: "risk-assessments",
    icon: ClipboardCheck,
    title: "Risk Assessments",
    description: "Thorough, practical risk assessments that identify hazards before they become incidents.",
  },
  {
    slug: "audits-compliance",
    icon: SearchCheck,
    title: "Audits & Compliance",
    description: "Independent audits that show exactly where you stand and how to close the gaps.",
  },
  {
    slug: "construction-safety-cdm",
    icon: HardHat,
    title: "Construction Safety (CDM)",
    description: "CDM 2015 support for clients, contractors and designers across every project phase.",
  },
  {
    slug: "safety-signage-equipment",
    icon: TrafficCone,
    title: "Safety Signage & Equipment",
    description: "The right signage and safety equipment specified, sourced and positioned correctly.",
  },
  {
    slug: "training-emergency-planning",
    icon: Siren,
    title: "Training & Emergency Planning",
    description: "Staff training and emergency plans your team actually understands and follows.",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-background" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 id="services-heading" className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl">
            How We Help
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Six core services covering everything from your first policy document to full compliance audits.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-lg bg-navy">
                  <service.icon className="size-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors group-hover:text-navy"
                >
                  Learn more
                  <ArrowRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">about {service.title}</span>
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
