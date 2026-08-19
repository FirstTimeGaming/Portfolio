/**
 * Site copy sourced from BragSheet (resume banks + category notes).
 * Keep claims aligned with shared/attribution-guardrails.md.
 */

export type ExperienceTheme = {
  title: string;
  body: string;
  points: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  summary: string;
  note?: string;
  stack: string[];
  themes: ExperienceTheme[];
};

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
      "I build data pipelines, AI-backed product surfaces, and TypeScript platforms — with evidence-backed scope and careful attribution",
  },
  marquee: [
    "TypeScript",
    "PostgreSQL",
    "Drizzle ORM",
    "Python",
    "EC2",
    "Next.js",
    "Supabase",
    "Edge Functions",
    "Plaid",
    "SQS",
    "AWS Lambda",
    "CloudWatch",
    "S3",
    "Yjs",
    "tRPC",
    "Vitest",
    "DataDog",
    "Protocol Buffers",
    "React Native",
    "ECS",
    "Capacitor",
  ],
  experiences: [
    {
      id: "nbf",
      company: "National Breathe Free",
      role: "Software Engineer",
      dates: "June 2025 — Present",
      summary:
        "National Breathe Free runs multi-facility healthcare operations software — analytics, collaborative reporting, and clinical data movement from fragmented office systems into cloud pipelines. My work spans the TypeScript product platform and the Python/AWS side of extraction and transform, with an emphasis on migrations, correctness, and systems you can debug when they break",
      stack: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Drizzle",
        "Supabase",
        "Yjs",
        "Python",
        "ODBC / MSSQL",
        "S3",
        "SQS",
        "Protobuf",
        "Vitest",
        "DataDog",
      ],
      themes: [
        {
          title: "Platform migrations & architecture",
          body: "Large production changes need blast-radius awareness, not just feature delivery. I owned a Drizzle ORM v1 migration that touched relation APIs, query shapes, migration tooling, and environment safeguards — then tightened the architecture so tests and layer boundaries could keep pace with the codebase",
          points: [
            "Migrated a production TypeScript/PostgreSQL app to Drizzle ORM v1 across a 102-file blast radius, clearing 521 TypeScript errors while modernizing relation/query APIs and migration tooling",
            "Reworked testing from DB-coupled action-level suites into isolated use-case unit tests, enabling Vitest in CI with parallel lint, type-check, and test jobs",
            "Developed custom ESLint rules enforcing clean-architecture boundaries (server actions → use cases → persistence) and blocking direct database access outside the data layer",
          ],
        },
        {
          title: "Clinical data pipelines",
          body: "Clinic data lives in fragmented AdvancedMD Databases. I built and extended the path that pulls AdvancedMD/MSSQL clinical streams over ODBC, lands partitioned Apache Parquet in S3, and feeds downstream transform/control-plane work — with checkpointing so long runs can restart safely",
          points: [
            "Built a Python clinical extraction service with checkpointed incremental ODBC pulls and partitioned Parquet landing in Amazon S3 for downstream transformation",
            "Implemented transform workers (shared ownership) that consume S3/SQS claim-check messages, transform Parquet artifacts, dual-write to Supabase targets, and honor pause/resume/shutdown control-plane commands",
            "Built Next.js control-surface features for DynamoDB-backed pipeline configuration and SQS/protobuf command operations so extractor/transformer fleets can be inspected and controlled safely",
            "Defined Buf-managed Protocol Buffer contracts for the pipeline control surface, generating Python and TypeScript clients with linting, breaking-change checks, and CI drift detection",
          ],
        },
        {
          title: "Realtime reporting & operational workflows",
          body: "Operators need shared, attributable report edits — not siloed spreadsheets. I worked across PostgreSQL triggers, Supabase Realtime, and Yjs client state to keep collaborative editing trustworthy, and shipped audit and export paths that match how clinics actually work",
          points: [
            "Stabilized realtime collaborative editing by fixing channel/topic mismatches and separating high-frequency cursor broadcasts from presence state across Supabase Realtime, PostgreSQL triggers, and Yjs",
            "Built a PostgreSQL trigger-based normalization pipeline that turns raw appointment feeds into patient, provider, referral, facility, and visit records with idempotent upserts and failure logging",
            "Implemented an end-to-end audit trail for operational report changes — actor, required reason, action type, and old/new values — through a layered TypeScript/Drizzle path that does not block the primary write on logging failure",
            "Built facility/date-filtered billing and operational report workflows with CSV, Excel, and multi-file ZIP export across domain, use-case, repository, and UI layers",
          ],
        },
        {
          title: "Observability & delivery safeguards",
          body: "Production healthcare workflows need signals when something drifts. I added frontend telemetry with a controlled intake path, and helped productionize notification delivery with idempotent fan-out where design ownership was shared",
          points: [
            "Added DataDog RUM, user/error-boundary instrumentation, and a server-side telemetry intake proxy to a production Next.js application",
            "Implemented and productionized a role-scoped overdue-report notification pipeline using a transactional outbox, PostgreSQL cron, Resend, idempotent fan-out, and retryable delivery (shared design attribution)",
            "Added database-backed feature flags and application-wide flag context to support safer incremental rollout of admin and reporting workflows",
          ],
        },
      ],
    },
    {
      id: "lumifi",
      company: "LumiFi AI",
      role: "Software Engineer",
      dates: "March 2026 — Present",
      summary:
        "LumiFi is an AI-backed personal finance platform. I contribute as a hands-on engineer across the assistant stack, verified Plaid webhook ingestion (Edge Function → SQS/Supabase → Lambda), multi-user Postgres security, and type-safe APIs",
      note: "Formal titles: Software Engineer, Co-Founder / CTO",
      stack: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Supabase RLS",
        "Supabase Edge Functions",
        "Drizzle",
        "tRPC",
        "Plaid",
        "SQS",
        "AWS Lambda",
        "CloudWatch",
        "AWS Bedrock",
        "Discord.js",
        "React Native",
        "ECS / EC2",
        "Capacitor",
        "pnpm",
      ],
      themes: [
        {
          title: "AI product surfaces",
          body: "Assistants only feel useful when context survives a session and tools stay bounded. I built persistent memory and profile repositories for the financial assistant, iterated model-provider integration (including a Bedrock migration path), and shipped a Discord AI bot with memory, search tooling, prompt hardening, and usage-cost tracking",
          points: [
            "Implemented persistent AI memory and user-profile repositories so the assistant can personalize across sessions with tooling-backed user context",
            "Integrated AWS Bedrock inference and migrated the model-execution path off the Anthropic Vercel SDK to widen model options and consolidate cost reporting",
            "Built a TypeScript Discord AI assistant with persistent memory, web-search tooling, prompt-hardening, and model-usage cost tracking for internal team prompt and cost testing",
          ],
        },
        {
          title: "Fintech event ingestion",
          body: "Bank data arrives as untrusted external events. Plaid webhooks are verified in a Supabase Edge Function, then dual-written for durability — enqueued on SQS and persisted in Supabase — before Lambda workers on a CloudWatch schedule fully process them into the database. Latency-sensitive paths (such as login-related webhooks) can also be consumed on demand from the client instead of waiting on the batch cycle",
          points: [
            "Implemented Plaid webhook intake in a Supabase Edge Function with signature verification before any downstream work",
            "After verification, dual-wrote events to an SQS processing queue and the Supabase database so ingestion stays resilient if a worker fails or retries",
            "Built Lambda consumers triggered on a CloudWatch schedule to fully process queued webhooks into Supabase",
            "Supported on-demand client consumption for time-sensitive webhook types (including login-related flows) alongside the scheduled worker path",
          ],
        },
        {
          title: "Multi-user data & APIs",
          body: "A finance app is only as safe as its row boundaries and API contracts. I worked on PostgreSQL/Supabase RLS with tests, Drizzle migration/introspection tooling, and an additive tRPC surface beside existing REST so new TypeScript clients could grow without a hard cutover",
          points: [
            "Implemented and tested PostgreSQL/Supabase RLS while building schema-introspection, migration, and Drizzle tooling for a multi-user financial application",
            "Introduced tRPC as an additive type-safe API surface alongside an existing REST architecture",
            "Standardized developer workflows with pnpm, lint/build tooling, recovery scripts, migration documentation, and local setup guidance",
          ],
        },
        {
          title: "Mobile delivery",
          body: "The durable mobile path is React Native with automated CI phone-app builds on ECS/EC2 that publish artifacts to S3. A hosted tRPC API keeps web and native clients on the same typed contract — expandable to surfaces like Electron later — while early Capacitor work helped the team iterate quickly against the web app before that native pipeline was the default",
          points: [
            "Built toward a React Native mobile path with automated CI phone-app build pipelines running on ECS/EC2 and publishing build artifacts to S3",
            "Shared a hosted tRPC API across separate clients so the Next.js web app and React Native app consume the same typed procedures — keeping the backend expandable to additional surfaces such as Electron desktop",
            "Used Capacitor as an early-stage iOS wrapper around the Next.js app for fast iteration, debugging routing, styling, generated-build, and hosted-link issues at the native boundary",
          ],
        },
      ],
    },
  ] satisfies Experience[],
  focuses: [
    {
      title: "Data & cloud pipelines",
      body: "ODBC extraction, S3/Parquet landing, SQS transform workers, protobuf control planes — and verified fintech webhooks through Edge Functions, dual-write queues, and scheduled Lambda consumers",
    },
    {
      title: "Product platforms",
      body: "Next.js/TypeScript systems with Drizzle, realtime collaboration, and a hosted tRPC API shared across web and React Native — expandable to desktop — with automated mobile CI builds on ECS/EC2 publishing to S3",
    },
    {
      title: "AI product engineering",
      body: "Persistent memory, provider migrations including Bedrock, prompt/tooling boundaries, and internal Discord assistants with usage-cost tracking on multi-user Postgres with RLS",
    },
  ],
} as const;
