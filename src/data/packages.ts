export type Package = {
  tier: "bronze" | "silver" | "gold";
  name: string;
  tagline: string;
  mostPopular: boolean;
  description: string;
  bestSuitedFor: string;
  included: string[];
  notIncluded: string[];
};

export const packages: Package[] = [
  {
    tier: "bronze",
    name: "Bronze",
    tagline: "Essential Compliance Support",
    mostPopular: false,
    description:
      "Designed for smaller businesses or low-risk environments requiring foundational support and reassurance.",
    bestSuitedFor: "Low-risk businesses, offices, small workshops, start-ups.",
    included: [
      "Telephone & email H&S advice (Mon–Wed, 09:00–17:00)",
      "Annual Workplace Inspection",
      "Detailed report with findings & action plan",
      "Review of existing H&S Policy",
      "High-level review of key documentation",
      "Access to 3 document templates per quarter",
    ],
    notIncluded: [
      "Competent Advisor appointment",
      "Multiple workplace inspections per year",
      "Risk Assessments included",
      "Training sessions included",
    ],
  },
  {
    tier: "silver",
    name: "Silver",
    tagline: "Managed Compliance & Ongoing Support",
    mostPopular: true,
    description:
      "A structured package providing active management, documentation, and regular oversight.",
    bestSuitedFor: "Growing businesses, light industrial, construction subcontractors, engineering workshops.",
    included: [
      "Appointment as Competent H&S Advisor",
      "Telephone & email support (Mon–Fri, 09:00–17:00)",
      "Full H&S Policy (written & maintained)",
      "Comprehensive Initial Audit",
      "3 Workplace/Site Inspections per year",
      "Full review of all H&S documentation",
      "2 Risk Assessments per year",
      "Quarterly documentation provision (up to 5 templates)",
      "Up to 2 Safe Systems of Work / Method Statements per year",
      "H&S meeting attendance/support",
      "Discounted day/hourly rate for additional services",
    ],
    notIncluded: ["Priority support (extended hours)", "Monthly documentation support", "Training sessions included"],
  },
  {
    tier: "gold",
    name: "Gold",
    tagline: "Fully Outsourced Health & Safety Management",
    mostPopular: false,
    description:
      "A comprehensive solution where Essential Safety Management operates as your external H&S department.",
    bestSuitedFor: "Construction companies, manufacturing, engineering firms, higher-risk operations.",
    included: [
      "Dedicated Competent H&S Advisor",
      "Priority support (Mon–Sat, 09:00–18:00)",
      "Full H&S Policy & Management System",
      "Comprehensive Initial Audit + ongoing compliance tracking",
      "6 Workplace/Site Inspections per year",
      "Full review, creation & implementation of all documentation",
      "Up to 10 Risk Assessments per year",
      "Monthly documentation support",
      "Up to 10 Safe Systems of Work / RAMS per year",
      "Planned H&S meeting attendance",
      "Accident & Incident Investigation support",
      "Employee H&S Training sessions",
      "Permit-to-Work system implementation",
      "Safety Management System development (HSG65 / ISO 45001)",
      "Management training (inspections, responsibilities, culture)",
      "Priority discounted rates for additional works",
    ],
    notIncluded: [],
  },
];

export type ComparisonRow = {
  feature: string;
  bronze: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Competent Advisor Appointment", bronze: false, silver: true, gold: true },
  { feature: "Workplace Inspections", bronze: "1/year", silver: "3/year", gold: "6/year" },
  { feature: "Risk Assessments", bronze: false, silver: "2/year", gold: "10/year" },
  { feature: "H&S Policy Included", bronze: false, silver: true, gold: true },
  { feature: "Document Templates", bronze: "3/quarter", silver: "5/quarter", gold: "Monthly" },
  { feature: "Support Hours", bronze: "Mon–Wed 9–5", silver: "Mon–Fri 9–5", gold: "Mon–Sat 9–6" },
  { feature: "Training Sessions", bronze: false, silver: false, gold: true },
  { feature: "Accident Investigation Support", bronze: false, silver: false, gold: true },
  { feature: "Management Training", bronze: false, silver: false, gold: true },
];

export type FaqItem = { question: string; answer: string };

export const packagesFaq: FaqItem[] = [
  {
    question: "Can I upgrade or downgrade my package?",
    answer:
      "Absolutely. Your package can be adjusted at any time to match your changing business needs. We'll work with you to find the right fit.",
  },
  {
    question: "What happens if I need support outside of the included hours?",
    answer:
      "We offer discounted day/hourly rates for additional services beyond your package. Contact us to discuss your specific needs.",
  },
  {
    question: "Are there any setup fees or hidden costs?",
    answer:
      "No. Your quote covers everything included in your package with no setup fees and no hidden extras — what we agree is what you get.",
  },
  {
    question: "Do you offer bespoke packages?",
    answer:
      "Yes. If none of our standard packages perfectly fit your needs, we can create a customised package built around your business.",
  },
];
