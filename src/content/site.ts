/**
 * Site copy sourced from BragSheet (resume/history + safe resume bullets).
 * Keep claims aligned with shared/attribution-guardrails.md.
 */

export const site = {
  name: "Chase Wasalaski",
  title: "Software Engineer",
  location: "Jupiter, FL",
  email: "chase.wasalaski@gmail.com",
  linkedin: "https://www.linkedin.com/in/chase-dev",
  linkedinDisplay: "linkedin.com/in/chase-dev",
  github: "https://github.com/FirstTimeGaming",
  githubDisplay: "github.com/FirstTimeGaming",
  education: {
    school: "Florida Polytechnic University",
    degree: "B.S. Computer Science",
    graduation: "Expected Spring 2028",
  },
  hero: {
    eyebrow: "Software engineer · Jupiter, FL",
    title: "Production systems with clear ownership",
    description:
      "I build data pipelines, AI-backed product surfaces, and TypeScript platforms — with evidence-backed scope and careful attribution.",
  },
  marquee: [
    "TypeScript",
    "PostgreSQL",
    "Drizzle ORM",
    "Python",
    "AWS",
    "Next.js",
    "Supabase",
    "tRPC",
    "Vitest",
    "DataDog",
  ],
  experiences: [
    {
      id: "nbf",
      company: "National Breathe Free",
      role: "Software Engineer",
      dates: "June 2025 — Present",
      summary:
        "Healthcare operations analytics, multi-facility reporting, and hybrid-cloud clinical data pipelines.",
      bullets: [
        "Migrated a production TypeScript/PostgreSQL app to Drizzle ORM v1 across a 102-file blast radius, resolving 521 TypeScript errors while modernizing relation/query APIs and migration tooling.",
        "Built a PostgreSQL trigger-based normalization pipeline that turns raw medical appointment feeds into normalized patient, provider, referral, facility, and visit records with idempotent upserts.",
        "Built a Python clinical extraction service that checkpointed incremental ODBC pulls from on-prem MSSQL sources and landed partitioned Parquet in Amazon S3.",
        "Stabilized real-time collaborative editing across Supabase Realtime, PostgreSQL triggers, and Yjs by fixing channel/topic mismatches and separating cursor traffic from presence state.",
      ],
    },
    {
      id: "lumifi",
      company: "LumiFi AI",
      role: "Software Engineer",
      dates: "March 2026 — Present",
      summary:
        "AI-backed personal finance platform work spanning model orchestration, fintech integrations, and type-safe APIs.",
      note: "Formal titles include Co-Founder / CTO; IC applications use Software Engineer.",
      bullets: [
        "Implemented persistent AI memory and user-profile repositories for a financial assistant, enabling cross-session personalization and tooling-backed user context.",
        "Implemented Plaid webhook routing and verification for secure bank-data event ingestion.",
        "Implemented and tested PostgreSQL/Supabase RLS while building schema-introspection, migration, and Drizzle tooling for a multi-user financial application.",
        "Introduced tRPC as an additive type-safe API surface alongside an existing REST architecture.",
      ],
    },
  ],
  focuses: [
    {
      title: "Data & cloud pipelines",
      body: "ODBC extraction, S3/Parquet landing, transform workers, and control-plane surfaces for clinical and operational data.",
    },
    {
      title: "Product platforms",
      body: "Next.js/TypeScript apps with Drizzle, realtime collaboration, audit trails, and exportable operational reporting.",
    },
    {
      title: "AI product engineering",
      body: "Persistent memory, provider integrations, prompt tooling, and fintech event ingestion on multi-user schemas.",
    },
  ],
} as const;
