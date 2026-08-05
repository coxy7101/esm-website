#!/usr/bin/env python3
"""ESM Batch 2c — trust strip as dark glass cards matching hero."""
import pathlib

pathlib.Path("src/components/trust-strip.tsx").write_text('''import { Globe2, ShieldCheck, Handshake, Target } from "lucide-react";
import { FadeUp } from "@/components/fade-up";

const pillars = [
  { icon: Globe2, label: "UK-wide service delivery" },
  { icon: ShieldCheck, label: "Fully insured consultancy" },
  { icon: Handshake, label: "Project-based and retained support" },
  { icon: Target, label: "Practical, sector-specific advice" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-24 md:-mt-32" aria-label="Why choose us">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-4">
        {pillars.map((pillar, i) => (
          <FadeUp key={pillar.label} delay={0.2 + i * 0.08}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-navy-dark/70 px-4 py-6 text-center shadow-lg backdrop-blur-md">
              <div className="flex size-10 items-center justify-center rounded-full bg-brand-green/15">
                <pillar.icon className="size-5 text-brand-green" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold leading-snug text-white">
                {pillar.label}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK  trust-strip.tsx rebuilt as dark glass cards")
