export type CaseStudy = {
  sector: string;
  title: string;
  clientProfile: string;
  timeframe: string;
  challenge: string;
  solution: string[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    sector: "Manufacturing",
    title: "Manufacturing Plant: Reducing Incident Rates by 40%",
    clientProfile: "Mid-sized Engineering Workshop (50+ employees)",
    timeframe: "6-month engagement, ongoing quarterly audits",
    challenge:
      "A manufacturing facility was experiencing frequent near-misses and minor incidents, with inconsistent H&S practices across departments. Management lacked visibility into compliance gaps, and employees had limited safety awareness.",
    solution: [
      "Comprehensive workplace risk assessment across all production areas",
      "Development of tailored Safe Systems of Work (SSOW) for high-risk machinery",
      "Implementation of COSHH assessments for chemical handling",
      "Delivery of practical manual handling and machinery safety training",
      "Establishment of monthly H&S audit schedule with corrective action tracking",
      "Creation of incident investigation procedures and reporting system",
    ],
    outcome: [
      "40% reduction in incident rates within 12 months",
      "100% compliance with PUWER and COSHH regulations",
      "Improved employee safety awareness and engagement",
      "Zero lost-time accidents in the 18 months following implementation",
      "Enhanced insurance premium negotiations due to improved safety record",
    ],
  },
  {
    sector: "Construction",
    title: "Construction Subcontractor: CDM Compliance & Site Safety",
    clientProfile: "Construction Subcontracting Firm (30 employees, multiple sites)",
    timeframe: "4-month implementation, ongoing support",
    challenge:
      "A construction subcontractor was struggling with CDM Regulations compliance, inconsistent site safety practices across multiple projects, and lack of documented H&S procedures. Risk of project delays and regulatory penalties.",
    solution: [
      "Full CDM Regulations audit and compliance gap analysis",
      "Development of comprehensive H&S Management System aligned to CDM requirements",
      "Creation of site-specific risk assessments and method statements",
      "Implementation of permit-to-work system for high-risk activities",
      "Delivery of CDM awareness training to project managers and site teams",
      "Establishment of pre-site induction checklist and toolbox talk procedures",
      "Monthly site compliance audits with corrective action follow-up",
    ],
    outcome: [
      "100% CDM compliance across all active projects",
      "Zero enforcement notices from HSE inspections",
      "Reduced project delays due to improved safety planning",
      "Enhanced client confidence and contract renewals",
      "Improved tender success rate due to strong H&S credentials",
      "Estimated £50,000+ savings in potential penalties and project delays",
    ],
  },
  {
    sector: "Hospitality & Leisure",
    title: "Hospitality Group: Creating a Safety Culture Across 8 Venues",
    clientProfile: "Multi-venue Hospitality Group (200+ employees across 8 locations)",
    timeframe: "3-month initial implementation, ongoing quarterly reviews",
    challenge:
      "A hospitality group with 8 venues (restaurants, bars, events spaces) had no centralised H&S strategy. Each venue operated independently with varying levels of compliance. High staff turnover made consistent training difficult, and management had limited visibility into safety performance.",
    solution: [
      "Audit of all 8 venues to identify compliance gaps and inconsistencies",
      "Development of centralised H&S Policy and Procedures manual",
      "Creation of venue-specific risk assessments (slip/trip/fall, manual handling, food safety, etc.)",
      "Design of staff induction and ongoing training programme",
      "Implementation of incident reporting and investigation procedures",
      "Establishment of monthly venue audits with manager training",
      "Creation of H&S performance dashboard for senior management",
      "Quarterly gap analysis and compliance reviews",
    ],
    outcome: [
      "Consistent H&S standards across all 8 venues",
      "85% reduction in slip/trip/fall incidents",
      "Improved staff awareness and engagement with H&S",
      "Reduced insurance premiums due to improved safety record",
      "Enhanced customer confidence and online reviews mentioning safety",
      "Streamlined onboarding process reducing training time by 30%",
      "Management visibility into safety performance across the group",
    ],
  },
];
