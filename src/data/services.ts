import {
  FileText,
  ClipboardCheck,
  SearchCheck,
  HardHat,
  PhoneCall,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Short bullet points shown on the overview card */
  points: string[];
  /** Extended detail content shown on the individual service page */
  detail: {
    intro: string;
    bullets: string[];
    closing: string;
  };
}

export const services: Service[] = [
  {
    slug: "policies-documentation",
    icon: FileText,
    title: "Policies & Documentation",
    description:
      "Legally compliant health & safety policies written in plain English and tailored to how your business actually operates.",
    points: [
      "Tailored employee handbooks",
      "Annual policy reviews",
      "Method statements & safe systems of work",
    ],
    detail: {
      intro:
        "Every business with five or more employees must have a written health & safety policy — but a generic template downloaded from the internet won't protect you when an inspector calls. We write policies that reflect your actual operations, your workforce and your specific risks.",
      bullets: [
        "Bespoke health & safety policy statements",
        "Employee handbooks covering your specific risks",
        "Safe systems of work and method statements",
        "Annual reviews to keep you current with legislation",
        "Fire, first aid and emergency procedures",
        "COSHH information sheets and substance inventories",
      ],
      closing:
        "Our documentation is written in plain English — your employees will actually read it, and your managers will actually use it. We'll also brief your team so everyone understands what's expected of them.",
    },
  },
  {
    slug: "risk-assessments",
    icon: ClipboardCheck,
    title: "Risk Assessments",
    description:
      "Practical assessments that identify real hazards in your workplace — and give you clear, prioritised actions to control them.",
    points: [
      "Fire risk assessments",
      "COSHH assessments",
      "Workplace & task-specific hazards",
    ],
    detail: {
      intro:
        "Risk assessments are a legal requirement, but more importantly they are the foundation of a safe workplace. We carry out thorough, site-specific assessments that go beyond a checklist — we look at how work is actually done, not just how it's supposed to be done.",
      bullets: [
        "General workplace risk assessments",
        "Fire risk assessments (FRA)",
        "COSHH assessments for hazardous substances",
        "Manual handling and ergonomic assessments",
        "Display screen equipment (DSE) assessments",
        "Task-specific and activity-based assessments",
        "Young person and new/expectant mother assessments",
      ],
      closing:
        "Every assessment comes with a prioritised action plan so you know exactly what to fix first. We revisit and update assessments when your work changes — because a risk assessment should be a living document, not a paper exercise.",
    },
  },
  {
    slug: "audits-compliance",
    icon: SearchCheck,
    title: "Audits & Compliance",
    description:
      "Independent audits that show exactly where you stand against current legislation, with a clear roadmap to full compliance.",
    points: [
      "Full compliance gap analysis",
      "Workplace inspections",
      "Prioritised action plans",
    ],
    detail: {
      intro:
        "Not sure whether your business is compliant? An independent audit gives you a clear, honest picture of where you stand — and what you need to do. We audit against current legislation and HSE guidance, not a generic checklist.",
      bullets: [
        "Full health & safety management system audits",
        "Compliance gap analysis against current legislation",
        "Workplace inspections and physical site walk-arounds",
        "Documentation and record-keeping reviews",
        "Contractor and supply chain compliance checks",
        "Prioritised, costed action plans",
        "Follow-up reviews to confirm improvements",
      ],
      closing:
        "Our audit reports are written in plain language — no jargon, no unnecessary complexity. You'll receive a scored assessment, a clear gap analysis and a realistic timeline for achieving full compliance.",
    },
  },
  {
    slug: "construction-safety-cdm",
    icon: HardHat,
    title: "Construction Safety / CDM Support",
    description:
      "Hands-on CDM 2015 support for clients, principal contractors and designers — from pre-construction to handover.",
    points: [
      "Site inspections & reports",
      "RAMS preparation & review",
      "Construction phase plans",
    ],
    detail: {
      intro:
        "The Construction (Design and Management) Regulations 2015 place legal duties on clients, principal designers and principal contractors. Getting CDM wrong can result in enforcement action, project delays and, most importantly, serious harm to workers. We provide practical, experienced CDM support throughout the project lifecycle.",
      bullets: [
        "Pre-construction phase support for clients and principal designers",
        "Construction phase plan preparation and review",
        "RAMS (Risk Assessment & Method Statement) preparation and review",
        "Regular site inspections with written reports",
        "F10 project notification to the HSE",
        "Health & safety file compilation and handover",
        "Contractor pre-qualification and vetting",
        "Toolbox talks and site inductions",
      ],
      closing:
        "We work directly on site, not just at a desk. Our consultants understand real construction environments and give advice that works in practice, not just on paper.",
    },
  },
  {
    slug: "competent-person",
    icon: PhoneCall,
    title: "Competent Person Service",
    description:
      "Meet your legal duty to appoint a competent person — with a retained consultant who knows your business inside out.",
    points: [
      "Retained advisory service",
      "24/7 incident support line",
      "Named consultant for your business",
    ],
    detail: {
      intro:
        "The Management of Health & Safety at Work Regulations require every employer to appoint a 'competent person' to help them meet their legal obligations. For most SMEs, the most cost-effective solution is to retain an external consultant — giving you access to expert advice without the cost of a full-time hire.",
      bullets: [
        "Named, dedicated consultant who knows your business",
        "Unlimited phone and email advice during business hours",
        "24/7 emergency incident support line",
        "Regular site visits included as standard",
        "Representation during HSE inspections or enforcement action",
        "Assistance with accident and near-miss investigations",
        "Quarterly compliance updates relevant to your sector",
        "Attendance at management or board meetings on request",
      ],
      closing:
        "Think of us as your outsourced health & safety department — available whenever you need us, with the knowledge and qualifications to back it up. Most clients find that retained support pays for itself within the first year through avoided fines and insurance savings.",
    },
  },
  {
    slug: "training",
    icon: GraduationCap,
    title: "H&S Training",
    description:
      "Engaging, jargon-free training delivered on-site or remotely, so your team understands safety rather than just signing a form.",
    points: [
      "Staff safety awareness",
      "Fire warden training",
      "Manual handling & toolbox talks",
    ],
    detail: {
      intro:
        "Training only works if people actually understand it. We deliver practical, engaging sessions tailored to your industry and your team — not death-by-PowerPoint compliance box-ticking. All training can be delivered on your premises, minimising disruption to your working day.",
      bullets: [
        "General health & safety awareness for all staff",
        "Fire warden and fire marshal training",
        "Manual handling and ergonomics",
        "Working at height awareness",
        "COSHH awareness and safe chemical handling",
        "Toolbox talks on specific hazards or incidents",
        "Management and supervisor health & safety responsibilities",
        "Bespoke training programmes for your specific operations",
      ],
      closing:
        "All training is documented and certificated. We keep records so you have clear evidence of compliance for insurers, clients and regulators. Refresher scheduling is managed by us so nothing lapses without notice.",
    },
  },
];
