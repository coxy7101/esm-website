import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export function FinalCta() {
  return (
    <section className="bg-navy-dark text-white" aria-labelledby="cta-heading">
      <FadeUp className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="text-3xl font-bold uppercase tracking-tight text-balance md:text-4xl">
          Book your free, no-obligation consultation today.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty">
          One conversation is all it takes to understand where your business stands — and what it would take to get
          fully compliant.
        </p>
        <Link
          href="/contact"
          className="rounded-lg bg-brand-green px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-green/85"
        >
          Book a Free Consultation
        </Link>
      </FadeUp>
    </section>
  );
}
