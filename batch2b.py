#!/usr/bin/env python3
"""ESM Batch 2b — trust strip visual redesign."""
import pathlib

pathlib.Path("src/components/trust-strip.tsx").write_text('''import { Globe2, ShieldCheck, Handshake, Target } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { cn } from "@/lib/utils";

const pillars = [
  { icon: Globe2, label: "UK-wide service delivery" },
  { icon: ShieldCheck, label: "Fully insured consultancy" },
  { icon: Handshake, label: "Project-based and retained support" },
  { icon: Target, label: "Practical, sector-specific advice" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-28 md:-mt-36" aria-label="Why choose us">
      <FadeUp
        delay={0.2}
        className="mx-auto grid max-w-3xl grid-cols-2 gap-y-6 rounded-2xl bg-white px-6 py-7 shadow-xl md:grid-cols-4 md:gap-y-0 md:px-8 md:py-8"
      >
        {pillars.map((pillar, i) => (
          <div
            key={pillar.label}
            className={cn(
              "flex flex-col items-center gap-2.5 px-3 text-center",
              i >= 2 && "border-t border-border pt-6 md:border-t-0 md:pt-0",
              i % 2 === 1 && "border-l border-border md:border-l-0",
              i > 0 && "md:border-l md:border-border"
            )}
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-brand-green/10">
              <pillar.icon className="size-4.5 text-brand-green" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold leading-snug text-navy">
              {pillar.label}
            </span>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
''', encoding="utf-8")
print("OK  trust-strip.tsx redesigned")
