import Image from "next/image";
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
