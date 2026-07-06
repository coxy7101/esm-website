import { ShieldCheck, Award, GraduationCap, BadgeCheck } from "lucide-react";
import { FadeUp } from "@/components/fade-up";

const credentials = [
  { icon: ShieldCheck, label: "TechIOSH" },
  { icon: Award, label: "NEBOSH Certified" },
  { icon: GraduationCap, label: "IOSH Managing Safely" },
  { icon: BadgeCheck, label: "Fully Insured" },
];

export function TrustStrip() {
  return (
    <section className="bg-muted" aria-label="Credentials">
      <FadeUp className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {credentials.map((cred) => (
          <div key={cred.label} className="flex items-center justify-center gap-3">
            <cred.icon className="size-6 shrink-0 text-brand-green" aria-hidden="true" />
            <span className="text-sm font-semibold text-navy">{cred.label}</span>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
