import {
  FileText,
  HardHat,
  Coffee,
  ShieldCheck,
  BookOpen,
  Stethoscope,
  Truck,
  ClipboardList,
  Trash2,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
  keyServices: string[];
  keyLegislation: string;
};

export const industries: Industry[] = [
  {
    icon: FileText,
    title: "Construction",
    description:
      "From groundworks to high-rise, we provide specialist CDM consultancy, site safety management, and construction-specific risk assessments to keep your projects compliant and your workforce safe.",
    keyServices: ["CDM Principal Designer", "Construction phase plans", "Site safety inspections", "RAMS review", "Toolbox talks"],
    keyLegislation: "CDM Regulations 2015, Work at Height Regulations 2005",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
    description:
      "Manufacturing environments present complex hazards. We help manufacturers manage machinery safety, COSHH, manual handling, and noise risks to meet their legal obligations and protect their workforce.",
    keyServices: ["COSHH assessments", "Machinery risk assessments", "PUWER compliance", "Manual handling competency", "Noise assessments"],
    keyLegislation: "PUWER 1998, COSHH Regulations 2002, Noise at Work Regulations 2005",
  },
  {
    icon: Coffee,
    title: "Hospitality",
    description:
      "Hotels, restaurants, and leisure venues face unique health and safety challenges. We provide tailored risk assessments, food safety integration, and practical competency development for the hospitality sector.",
    keyServices: ["General risk assessments", "Fire risk assessments", "Manual handling competency", "Slips and trips management", "Lone worker policies"],
    keyLegislation: "Health and Safety at Work Act 1974, Fire Safety Order 2005",
  },
  {
    icon: ShieldCheck,
    title: "Retail & Leisure",
    description:
      "From high street retailers to leisure facilities, we help businesses manage public safety, employee welfare, and compliance with health and safety legislation across multiple sites.",
    keyServices: ["Multi-site risk assessments", "Fire risk assessments", "Gap analysis and auditing", "Safety management systems", "Incident investigation"],
    keyLegislation: "Workplace Regulations 1992, Fire Safety Order 2005",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Schools, colleges, and universities have a duty of care to students, staff, and visitors. We provide comprehensive health and safety support tailored to educational settings.",
    keyServices: ["Educational risk assessments", "Science lab safety", "Outdoor education safety", "Staff competency development", "Policy development"],
    keyLegislation: "Health and Safety at Work Act 1974, Children Act 2004",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Healthcare settings present specific risks including manual handling, infection control, and lone working. We provide specialist support to NHS and private healthcare providers.",
    keyServices: ["Patient handling assessments", "Lone worker policies", "Infection control procedures", "Violence and aggression policies", "Staff competency development"],
    keyLegislation: "Health and Safety at Work Act 1974, Manual Handling Operations Regulations 1992",
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "The logistics sector faces significant safety challenges including vehicle movements, manual handling, and driver welfare. We help logistics businesses manage these risks effectively.",
    keyServices: ["Vehicle and pedestrian segregation", "Loading bay risk assessments", "Driver health and safety", "Manual handling competency", "Fatigue management"],
    keyLegislation: "Workplace Transport Regulations, Manual Handling Operations Regulations 1992",
  },
  {
    icon: ClipboardList,
    title: "Facilities Management",
    description:
      "Facilities managers are responsible for the safety of complex built environments. We provide the expertise to manage contractor safety, statutory compliance, and multi-occupancy building risks.",
    keyServices: ["Contractor management systems", "Statutory compliance audits", "Fire risk assessments", "Asbestos management support", "Permit to work systems"],
    keyLegislation: "CDM Regulations 2015, Fire Safety Order 2005, Asbestos Regulations 2012",
  },
  {
    icon: Trash2,
    title: "Waste & Recycling",
    description:
      "The waste and recycling sector faces significant health and safety challenges including hazardous materials, machinery hazards, and manual handling. We provide specialist auditing, gap analysis, and competency development to help waste management businesses operate safely and compliantly.",
    keyServices: ["Hazardous waste risk assessments", "Machinery and equipment safety", "Manual handling competency", "Confined space procedures", "Waste segregation protocols", "Staff competency development"],
    keyLegislation: "Environmental Protection Act 1990, Environmental Permitting Regulations 2016, Manual Handling Operations Regulations 1992",
  },
];
