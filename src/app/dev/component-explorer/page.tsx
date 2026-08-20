import {
  Button,
  ChalkHeading,
  Hero,
  Marquee,
  NavBar,
  ProductFrame,
  QuoteCard,
  RAINBOW,
  TextInput,
  TweetCard,
} from "@/components/ui";

const SECTIONS = [
  { id: "tokens", label: "Tokens" },
  { id: "type", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "nav", label: "Nav" },
  { id: "hero", label: "Hero" },
  { id: "frame", label: "Product Frame" },
  { id: "marquee", label: "Marquee" },
  { id: "quote", label: "Quote Card" },
  { id: "tweet", label: "Tweet Card" },
  { id: "input", label: "Text Input" },
] as const;

const COLOR_SWATCHES = [
  { name: "Cream Paper", value: "#f4efea", varName: "--cream" },
  { name: "Board", value: "#2c322c", varName: "--board" },
  { name: "Chalk Dust", value: "#f3efe3", varName: "--dust" },
  { name: "Charcoal Ink", value: "#383838", varName: "--ink" },
  { name: "Sky Crayon", value: "#6fc2ff", varName: "--sky" },
  { name: "Canary Banner", value: "#ffde00", varName: "--canary" },
  { name: "Coral Sketch", value: "#f38e84", varName: "--coral" },
  { name: "Mint Sketch", value: "#38c1b0", varName: "--mint" },
  { name: "Lilac Sketch", value: "#b291de", varName: "--lilac" },
  { name: "Ice Wash", value: "#ebf9ff", varName: "--ice" },
] as const;

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b-2 border-ink py-12">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase text-muted">
          Component
        </p>
        <h2 className="text-2xl font-semibold uppercase text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-ink/30 bg-white px-3 py-2">
      <dt className="text-[10px] font-semibold uppercase text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-xs text-ink">{value}</dd>
    </div>
  );
}

export default function ComponentExplorerPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-20 border-b-2 border-ink bg-white">
        <div className="mx-auto flex max-w-300 flex-col gap-3 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase text-muted">
                /dev/component-explorer
              </p>
              <h1 className="text-xl font-semibold uppercase text-ink sm:text-2xl">
                Design system playground
              </h1>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted">
              Chalkboard + ink system. JetBrains Mono for display and UI.
              Inspired by MotherDuck geometry — not affiliated.
            </p>
          </div>
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 border border-ink bg-cream px-3 py-1 text-[11px] font-medium uppercase text-ink hover:bg-sky"
                style={{ borderRadius: "var(--radius)" }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-300 px-4 sm:px-6">
        <Section
          id="tokens"
          title="Design tokens"
          description="Cream canvas, chalkboard panels, charcoal ink, sky CTA, and crayon accents. JetBrains Mono everywhere for now. Radius stays at 2px; elevation is a hard offset plate."
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {COLOR_SWATCHES.map((swatch) => (
                <div
                  key={swatch.varName}
                  className="border-2 border-ink bg-white"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <div
                    className="h-16 border-b-2 border-ink"
                    style={{ background: swatch.value }}
                  />
                  <div className="p-2">
                    <p className="text-[11px] font-semibold text-ink">
                      {swatch.name}
                    </p>
                    <p className="text-[10px] text-muted">
                      {swatch.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <dl className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <Spec label="Typeface" value="JetBrains Mono (display + UI)" />
              <Spec label="Tracking" value="0.02em" />
              <Spec label="Radius" value="2px everywhere" />
              <Spec label="Lift shadow" value="fixed ink plate · face eases 300ms" />
              <Spec label="Max width" value="1200px" />
              <Spec label="Display weights" value="300–400 for headlines" />
            </dl>
          </div>
        </Section>

        <Section
          id="type"
          title="Typography"
          description="One family for now: JetBrains Mono. Light weights for headlines, regular/medium for UI. Board panels still work for contrast — same type, dust-on-board color."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="border-2 border-ink bg-cream p-6 sm:p-8"
              style={{ borderRadius: "var(--radius)" }}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase text-muted">
                Mono on cream · ink
              </p>
              <ChalkHeading as="h1" className="uppercase">
                Hello, portfolio
              </ChalkHeading>
              <ChalkHeading as="h2" className="mt-4 uppercase">
                Selected work
              </ChalkHeading>
              <ChalkHeading as="h3" className="mt-4">
                Case study notes
              </ChalkHeading>
              <p className="mt-6 text-sm leading-relaxed text-ink">
                Body and chrome share the same mono face. Personality comes from
                weight, case, color, and layout — not a second font (yet).
              </p>
            </div>

            <div className="chalkboard p-6 sm:p-8">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.02em] text-dust-soft">
                Mono on board · dust
              </p>
              <ChalkHeading as="h1" tone="dust" className="uppercase">
                Today&apos;s brief
              </ChalkHeading>
              <ChalkHeading as="h2" tone="dust" className="mt-4 uppercase">
                Ship something sharp
              </ChalkHeading>
              <p className="mt-6 font-mono text-sm leading-relaxed tracking-[0.02em] text-dust-soft">
                Board panels are for featured statements — hero moments, chapter
                breaks, or a single memorable line.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            <Spec label="Family" value="JetBrains Mono" />
            <Spec label="Headlines" value="Light weight · optional uppercase" />
            <Spec label="UI / body" value="Regular / medium" />
          </div>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          description="Primary sky fill for main CTAs. Secondary is white outline. Rainbow borders cycle crayon colors across tiles. Nav CTA is flat (no shadow). A fixed ink plate stays put while the face eases up and down over 300ms."
        >
          <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <Spec label="Primary" value="sky fill · ink border · hard shadow" />
            <Spec label="Secondary" value="white fill · ink border · hard shadow" />
            <Spec label="Rainbow" value="rotating crayon borders" />
            <Spec label="Nav" value="sky fill · white text · no shadow" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Try 7 Days Free</Button>
            <Button variant="secondary">Book a Demo</Button>
            <Button variant="nav">Start Free</Button>
            <Button variant="ghost">Log In</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Community",
              "Docs",
              "Cookbook",
              "Slack",
              "Videos",
              "Blog",
              "Events",
              "Merch",
            ].map((label, index) => (
              <Button key={label} variant="rainbow" rainbowIndex={index}>
                {label}
              </Button>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Rainbow cycle: {RAINBOW.length} outline colors
          </p>
        </Section>

        <Section
          id="nav"
          title="Top navigation"
          description="White bar, ink bottom border, brand left, uppercase links center, ghost login + flat sky CTA right. No sticky elevation — keep the header lightweight."
        >
          <div
            className="overflow-hidden border-2 border-ink shadow-hard"
            style={{ borderRadius: "var(--radius)" }}
          >
            <NavBar
              brand="Portfolio"
              links={[
                { label: "Product", href: "#buttons" },
                { label: "Community", href: "#tweet" },
                { label: "Company", href: "#quote" },
                { label: "Docs", href: "#tokens" },
              ]}
              ctaLabel="Start Free"
            />
          </div>
        </Section>

        <Section
          id="hero"
          title="Hero"
          description="Cream canvas. Light-weight uppercase mono display. Short supporting sentence. Two CTAs (primary + secondary). Optional logo strip below. Keep the first viewport to brand + headline + sentence + CTAs + one visual."
        >
          <div
            className="overflow-hidden border-2 border-ink"
            style={{ borderRadius: "var(--radius)" }}
          >
            <Hero
              eyebrow="Chalkboard + ink"
              title="Infrastructure for answers"
              description="Fast, serverless ideas with chalk for the voice and mono for the tools."
              primaryLabel="Try 7 Days Free"
              secondaryLabel="Book a Demo"
              logos={["Ahead", "Goodship", "Together", "FinQore", "David AI"]}
            />
          </div>
        </Section>

        <Section
          id="frame"
          title="Product screenshot frame"
          description="White (or dark) panel framed by a 2px ink border and hard offset shadow. Optional hand-drawn cloud/triangle accents. Use for project previews and product mockups."
        >
          <ProductFrame title="Agent console" badge="3 questions left" />
        </Section>

        <Section
          id="marquee"
          title="Marquee banner"
          description="Full-bleed canary yellow strip. Uppercase mono text scrolling horizontally. No border, no shadow — a rhythmic visual reset between sections."
        >
          <div
            className="overflow-hidden border-2 border-ink"
            style={{ borderRadius: "var(--radius)" }}
          >
            <Marquee
              items={[
                "Data Warehouse + AI",
                "Hypertenancy",
                "Ducklings per Agent",
                "Zero Contention",
                "Scale Independently",
              ]}
            />
          </div>
        </Section>

        <Section
          id="quote"
          title="Testimonial quote card"
          description="Canary wash background, ink border, large open-quote glyph, body quote, white name label card, and a Read more link."
        >
          <div className="max-w-2xl">
            <QuoteCard
              quote="Agent-driven queries would create a serious cost problem on compute-heavy warehouses. This architecture is an excellent fit for the kind of exploration agents need."
              name="Pablo Ferrari"
              role="Director of Data Engineering"
            />
          </div>
        </Section>

        <Section
          id="tweet"
          title="Community tweet card"
          description="White surface, ink border, no shadow. Avatar + name + handle header, body copy below. Border alone defines the card edge."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TweetCard
              name="Alex Rivers"
              handle="@alexbuilds"
              body="Shipped a portfolio kit with cream paper, mono type, and hard offset shadows. Feels like a notebook that can ship product."
              platform="x"
            />
            <TweetCard
              name="Jordan Lee"
              handle="jordan.lee"
              body="The 2px radius + press-into-shadow buttons are doing all the brand work. Zero glow, zero pills, still playful."
              platform="linkedin"
            />
          </div>
        </Section>

        <Section
          id="input"
          title="Text input / search"
          description="White field, 2px ink border, 2px radius. Focus washes to ice blue. Label above in uppercase mono; optional muted hint below."
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <TextInput
              id="explorer-search"
              label="Search"
              placeholder="Which duck species flies furthest?"
              hint="Enter to run a sample query"
            />
            <TextInput
              id="explorer-email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              defaultValue=""
            />
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-muted">
          Inspired by MotherDuck’s public visual language · JetBrains Mono ·
          Next.js 16 / React 19
        </footer>
      </main>
    </div>
  );
}
