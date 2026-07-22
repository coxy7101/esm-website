import {
  FileText,
  ClipboardCheck,
  SearchCheck,
  HardHat,
  PhoneCall,
  GraduationCap,
  Flame,
  AlertTriangle,
  Award,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  intro: string;
  whatsIncluded: string[];
  whyItMatters: string;
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "policies-documentation",
    icon: FileText,
    title: "Policies & Documentation",
    description:
      "Legally compliant health & safety policies written in plain English and tailored to how your business actually operates.",
    points: ["Tailored employee handbooks", "Annual policy reviews", "Method statements & safe systems of work"],
    intro:
      "Generic downloaded templates rarely hold up to scrutiny — and they don't reflect how your business actually works. We write policies and documentation from scratch, built around your real operations, so they're genuinely useful day-to-day and defensible if you're ever inspected.",
    whatsIncluded: [
      "H&S policy development",
      "Procedure writing",
      "Risk management systems",
      "Documentation templates",
      "Policy implementation support",
      "Annual policy reviews",
    ],
    whyItMatters:
      "Under the Health and Safety at Work etc. Act 1974, employers with five or more staff are legally required to have a written health & safety policy. Beyond the legal minimum, clear documentation is often the first thing an inspector, insurer, or client asks to see — and the difference between a smooth audit and a serious problem.",
    idealFor: ["Businesses without any current H&S policy", "Growing teams past the 5-employee threshold", "Anyone renewing insurance or tendering for contracts"],
  },
  {
    slug: "risk-assessments",
    icon: ClipboardCheck,
    title: "Risk Assessments",
    description:
      "Practical assessments that identify real hazards in your workplace — and give you clear, prioritised actions to control them.",
    points: ["Fire risk assessments", "COSHH assessments", "Workplace & task-specific hazards"],
    intro:
      "A risk assessment that just ticks boxes doesn't protect anyone. We walk your site, talk to your team, and identify the hazards that actually exist in your workplace — then give you a clear, prioritised plan to control them.",
    whatsIncluded: [
      "General workplace risk assessments",
      "COSHH assessments",
      "Manual handling assessments",
      "Display screen equipment (DSE) assessments",
      "Working at height assessments",
      "Lone worker risk assessments",
    ],
    whyItMatters:
      "The Management of Health and Safety at Work Regulations 1999 require every employer to carry out suitable risk assessments. More importantly, a good one is the single biggest factor in preventing workplace incidents before they happen — not just paperwork after the fact.",
    idealFor: ["Any workplace with physical hazards", "Businesses handling hazardous substances", "Sites due for renewal of an outdated assessment"],
  },
  {
    slug: "audits-compliance",
    icon: SearchCheck,
    title: "Audits & Compliance",
    description:
      "Independent audits that show exactly where you stand against current legislation, with a clear roadmap to full compliance.",
    points: ["Full compliance gap analysis", "Workplace inspections", "Prioritised action plans"],
    intro:
      "An independent set of eyes catches what internal reviews miss. We audit your current practices against current legislation and industry best practice, then hand you a clear, prioritised roadmap — not just a list of problems.",
    whatsIncluded: [
      "Compliance audits",
      "Site safety inspections",
      "HSE audit preparation",
      "Internal audit training",
      "Audit report preparation",
      "Follow-up verification",
    ],
    whyItMatters:
      "Legislation changes, teams change, and practices drift over time even at well-run businesses. A periodic independent audit catches gaps before they become HSE enforcement action, insurance disputes, or — worst case — a preventable incident.",
    idealFor: ["Businesses preparing for ISO 45001", "Anyone unsure of their current compliance status", "Post-incident review requirements"],
  },
  {
    slug: "construction-safety-cdm",
    icon: HardHat,
    title: "Construction Safety / CDM Support",
    description:
      "Hands-on CDM 2015 support for clients, principal contractors and designers — from pre-construction to handover.",
    points: ["Site inspections & reports", "RAMS preparation & review", "Construction phase plans"],
    intro:
      "CDM 2015 places specific legal duties on clients, designers, and contractors alike. We provide hands-on, practical support through every stage of a project — from pre-construction planning to handover — so nothing falls through the gaps.",
    whatsIncluded: [
      "Principal Designer support",
      "CDM Coordinator services",
      "Pre-construction information",
      "Construction phase plans",
      "Health & safety file preparation",
      "CDM compliance audits",
    ],
    whyItMatters:
      "CDM 2015 duties apply to every construction project, regardless of size — and clients and principal contractors carry real legal liability if they're not met. Getting the right support in place early avoids delays, disputes, and enforcement risk later.",
    idealFor: ["Principal contractors on active builds", "Clients commissioning construction work", "Designers needing CDM-compliant documentation"],
  },
  {
    slug: "competent-person",
    icon: PhoneCall,
    title: "Competent Person Service",
    description:
      "Meet your legal duty to appoint a competent person — with a retained consultant who knows your business inside out.",
    points: ["Retained advisory service", "24/7 incident support line", "Named consultant for your business"],
    intro:
      "Every employer is legally required to appoint a competent person for health & safety. Rather than a rotating call centre, you get a named consultant who actually knows your business, your site, and your history.",
    whatsIncluded: [
      "Retained monthly advisory service",
      "Named consultant, direct contact",
      "Ongoing compliance monitoring",
      "Support with incident response and reporting",
      "Regular check-ins, not just reactive calls",
    ],
    whyItMatters:
      "Section 7 of the Management of Health and Safety at Work Regulations 1999 requires every employer to appoint one or more competent persons. It's one of the most commonly overlooked legal duties for smaller businesses — and one of the simplest to resolve properly.",
    idealFor: ["Businesses without an internal H&S manager", "SMEs needing ongoing, not one-off, support", "Anyone currently relying on an informal arrangement"],
  },
  {
    slug: "training",
    icon: GraduationCap,
    title: "H&S Training",
    description:
      "Engaging, jargon-free training delivered on-site or remotely, so your team understands safety rather than just signing a form.",
    points: ["Staff safety awareness", "Fire warden training", "Manual handling & toolbox talks"],
    intro:
      "Training that's just a slideshow and a signature doesn't change behaviour. We deliver practical, jargon-free sessions — on-site or remote — that your team actually engages with and remembers.",
    whatsIncluded: [
      "Manual handling training",
      "Health & safety induction",
      "Supervisor training",
      "Audit skills development",
      "Bespoke training programmes",
      "Competency assessments",
    ],
    whyItMatters:
      "Well-trained staff are your best line of defence against incidents — and demonstrable training records are exactly what insurers and inspectors look for. Untrained teams are consistently the biggest single risk factor in workplace incidents.",
    idealFor: ["New starters needing induction training", "Teams handling manual tasks or hazardous materials", "Businesses needing refresher training for compliance"],
  },
  {
    slug: "fire-risk-assessments",
    icon: Flame,
    title: "Fire Risk Assessments",
    description:
      "Detailed fire risk assessments in line with the Regulatory Reform (Fire Safety) Order 2005, with clear, actionable recommendations.",
    points: ["Fire risk assessments", "Emergency evacuation plans", "Fire safety training"],
    intro:
      "Fire safety failures are among the most serious — and most preventable — risks any business faces. We identify fire hazards on your premises and give you a clear, practical plan of control measures, not just a compliance certificate.",
    whatsIncluded: [
      "Fire risk assessments",
      "Fire safety audits",
      "Emergency evacuation plans",
      "Fire safety training",
      "Equipment inspections",
      "Compliance certification",
    ],
    whyItMatters:
      "The Regulatory Reform (Fire Safety) Order 2005 places a legal duty on the 'responsible person' at any non-domestic premises to carry out and regularly review a fire risk assessment. Getting this wrong carries some of the most severe enforcement penalties in UK H&S law, including unlimited fines and imprisonment.",
    idealFor: ["Any commercial premises", "Businesses due a fire risk assessment review", "Landlords of multi-occupancy buildings"],
  },
  {
    slug: "accident-investigation",
    icon: AlertTriangle,
    title: "Accident Investigation",
    description:
      "Thorough, impartial investigation following a workplace incident — establishing root cause and preventing recurrence.",
    points: ["Root cause analysis", "RIDDOR reporting support", "Corrective action planning"],
    intro:
      "What happens after an incident matters as much as prevention beforehand. We carry out thorough, impartial investigations to establish exactly what happened and why — then help you put changes in place so it doesn't happen again.",
    whatsIncluded: [
      "On-site incident investigation",
      "Root cause analysis",
      "RIDDOR reporting support",
      "Witness statement gathering",
      "Corrective action planning",
      "Investigation report for insurers/HSE",
    ],
    whyItMatters:
      "Serious workplace incidents may be reportable under RIDDOR, and a poorly handled investigation can expose a business to greater liability — or miss the real cause, leaving the risk of recurrence in place. An independent, properly documented investigation protects both your people and your business.",
    idealFor: ["Businesses that have had a reportable incident", "Anyone facing an HSE investigation", "Insurers requiring an independent report"],
  },
  {
    slug: "iso-45001-support",
    icon: Award,
    title: "ISO 45001 Support",
    description:
      "Practical support building and maintaining an ISO 45001 occupational health & safety management system, from gap analysis to certification readiness.",
    points: ["Gap analysis against ISO 45001", "Management system documentation", "Certification readiness support"],
    intro:
      "ISO 45001 is the international standard for occupational health & safety management systems — but building one from scratch, or maintaining an existing one, takes real expertise. We support you through every stage, from initial gap analysis to certification-ready documentation.",
    whatsIncluded: [
      "Gap analysis against ISO 45001 requirements",
      "Management system documentation",
      "Internal audit programme setup",
      "Staff training on the management system",
      "Certification readiness review",
      "Ongoing system maintenance support",
    ],
    whyItMatters:
      "ISO 45001 certification is increasingly a requirement for tendering on larger contracts, and demonstrates a genuine commitment to managing risk systematically rather than reactively. It also tends to reduce incident rates and insurance costs over time by embedding safety into how the business actually runs.",
    idealFor: ["Businesses tendering for contracts requiring certification", "Companies wanting a systematic H&S framework", "Organisations maintaining an existing ISO 45001 system"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
