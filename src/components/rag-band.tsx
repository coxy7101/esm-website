import Link from "next/link";
import { AlertTriangle, TrendingUp, ShieldCheck } from "lucide-react";
import { FadeUp } from "@/components/fade-up";

const stages = [
  {
    icon: AlertTriangle,
    label: "At Risk",
    accent: "bg-brand-red",
    text: "text-brand-red",
    description:
      "No formal policies, out-of-date assessments, or unknown legal duties. You're exposed to enforcement action, fines and — worst of all — preventable harm.",
  },
  {
    icon: TrendingUp,
    label: "Getting There",
    accent: "bg-brand-amber",
    text: "text-brand-amber",
    description:
      "Some documentation exists but gaps remain. Assessments need reviewing, training has lapsed, and no one is quite sure what an inspector would find.",
  },
  {
    icon: ShieldCheck,
    label: "Compliant",
    accent: "bg-brand-green",
    text: "text-brand-green",
    description:
      "Policies current, risks assessed, staff trained, records audit-ready. You can prove compliance on demand — and focus on running your business.",
  },
];

export function RagBand() {
  return (
    <section className="bg-navy text-white" aria-labelledby="rag-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <h2 id="rag-heading" className="text-3xl font-bold uppercase tracking-tight text-balance md:text-4xl">
            Where Do You Stand?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
            Every business sits somewhere on the compliance journey. We meet you where you are and get you to green.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stages.map((stage, i) => (
            <FadeUp key={stage.label} delay={i * 0.12}>
              <div className="flex h-full flex-col gap-4 rounded-xl bg-navy-dark p-7">
                <div className={`h-1.5 w-full rounded-full ${stage.accent}`} aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <stage.icon className={`size-6 ${stage.text}`} aria-hidden="true" />
                  <h3 className="text-xl font-bold">{stage.label}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">{stage.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="rounded-lg bg-brand-green px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-green/85"
          >
            Find Out Where You Stand
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
