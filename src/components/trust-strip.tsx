import { FadeUp } from "@/components/fade-up";

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
