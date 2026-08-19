import Link from "next/link";
import {
  ChalkHeading,
  CopyEmailButton,
  Hero,
  LIFT_FACE,
  Marquee,
  NavBar,
  PopLift,
} from "@/components/ui";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--cream)]">
      <NavBar
        brand={site.name}
        showGhost
        ghostLabel="GitHub"
        ghostHref={site.github}
        ctaLabel="Email"
        copyEmail={site.email}
      />

      <Hero
        eyebrow={site.hero.eyebrow}
        title={site.hero.title}
        description={site.hero.description}
        actions={[
          { label: "View work", href: "#work", variant: "primary" },
          { label: "Contact me", href: "#contact" },
          { label: "LinkedIn", href: site.linkedin },
          { label: "Email me", copyEmail: site.email },
        ]}
        logos={[site.experiences[0].company, site.experiences[1].company, site.education.school]}
      />

      <Marquee items={[...site.marquee]} speedSeconds={32} />

      <section
        id="work"
        className="scroll-mt-24 border-b-2 border-[var(--ink)] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase text-[var(--muted)]">
            Experience
          </p>
          <ChalkHeading as="h2" className="mt-2 max-w-2xl uppercase">
            Selected engineering work
          </ChalkHeading>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink)] sm:text-base">
            Deeper cuts from a curated brag sheet — grouped by problem area, with
            attribution-safe wording and concrete scope where the evidence
            supports it
          </p>

          <div className="mt-12 space-y-14">
            {site.experiences.map((job) => (
              <article
                key={job.id}
                id={job.id}
                className="scroll-mt-24 border-2 border-[var(--ink)] bg-[var(--white)] shadow-[var(--shadow)]"
                style={{ borderRadius: "var(--radius)" }}
              >
                <header className="border-b-2 border-[var(--ink)] px-6 py-6 sm:px-8 sm:py-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold uppercase text-[var(--ink)] sm:text-2xl">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--ink)]">
                        {job.role}
                      </p>
                    </div>
                    <p className="text-xs font-medium uppercase text-[var(--muted)]">
                      {job.dates}
                    </p>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--ink)] sm:text-base">
                    {job.summary}
                  </p>
                  {"note" in job && job.note ? (
                    <p className="mt-3 text-xs text-[var(--muted)]">{job.note}</p>
                  ) : null}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-[var(--ink)] bg-[var(--cream)] px-2 py-1 text-[10px] font-medium uppercase text-[var(--ink)]"
                        style={{ borderRadius: "var(--radius)" }}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </header>

                <div className="divide-y-2 divide-[var(--ink)]">
                  {job.themes.map((theme, index) => (
                    <section
                      key={theme.title}
                      className="grid gap-4 px-6 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-8 sm:px-8 sm:py-8"
                    >
                      <div>
                        <p className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                          0{index + 1}
                        </p>
                        <h4 className="mt-2 text-base font-semibold uppercase leading-snug text-[var(--ink)] sm:text-lg">
                          {theme.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">
                          {theme.body}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {theme.points.map((point) => (
                          <li
                            key={point}
                            className="border-l-2 border-[var(--sky)] pl-4 text-sm leading-relaxed text-[var(--ink)]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="focus"
        className="scroll-mt-24 border-b-2 border-[var(--ink)] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase text-[var(--muted)]">
            Focus
          </p>
          <ChalkHeading as="h2" className="mt-2 max-w-2xl uppercase">
            Where I spend my depth
          </ChalkHeading>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {site.focuses.map((focus, index) => (
              <div key={focus.title} className="border-t-2 border-[var(--ink)] pt-4">
                <p className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold uppercase text-[var(--ink)]">
                  {focus.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">
                  {focus.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-b-2 border-[var(--ink)] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div>
            <p className="text-xs font-semibold uppercase text-[var(--muted)]">
              About
            </p>
            <ChalkHeading as="h2" className="mt-2 uppercase">
              Hands-on builder
            </ChalkHeading>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink)] sm:text-base">
              I care about systems you can defend in an interview: clear
              ownership, real blast radius, and wording that matches the code.
              Day to day that means TypeScript platforms, Python data services,
              and AI product surfaces that stay operable in production
            </p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-[var(--ink)]/30 bg-[var(--white)] px-3 py-2">
                <dt className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                  Education
                </dt>
                <dd className="mt-1 text-xs text-[var(--ink)]">
                  {site.education.degree}
                  <br />
                  {site.education.school}
                </dd>
              </div>
              <div className="border border-[var(--ink)]/30 bg-[var(--white)] px-3 py-2">
                <dt className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                  Graduation
                </dt>
                <dd className="mt-1 text-xs text-[var(--ink)]">
                  {site.education.graduation}
                </dd>
              </div>
              <div className="border border-[var(--ink)]/30 bg-[var(--white)] px-3 py-2">
                <dt className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                  Location
                </dt>
                <dd className="mt-1 text-xs text-[var(--ink)]">{site.location}</dd>
              </div>
              <div className="border border-[var(--ink)]/30 bg-[var(--white)] px-3 py-2">
                <dt className="text-[10px] font-semibold uppercase text-[var(--muted)]">
                  LinkedIn
                </dt>
                <dd className="mt-1 text-xs text-[var(--ink)]">
                  <a
                    href={site.linkedin}
                    className="underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.linkedinDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="chalkboard flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase text-[var(--dust-soft)]">
                Working notes
              </p>
              <ChalkHeading as="h3" tone="dust" className="mt-3 uppercase">
                Evidence over adjectives
              </ChalkHeading>
              <p className="mt-4 text-sm leading-relaxed text-[var(--dust-soft)]">
                Prefer numbers you can open in a repo. Prefer collaborative
                wording when ownership is shared. Keep prototypes labeled as
                prototypes
              </p>
            </div>
            <p className="mt-8 text-xs uppercase text-[var(--dust-soft)]">
              {site.githubDisplay}
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[var(--muted)]">
              Contact
            </p>
            <ChalkHeading as="h2" className="mt-2 uppercase">
              Let&apos;s talk
            </ChalkHeading>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--ink)]">
              Open to software engineering roles across backend, platform, data,
              and AI product work
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CopyEmailButton email={site.email}>{site.email}</CopyEmailButton>
            <PopLift>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center border-2 border-[var(--ink)] bg-[var(--white)] px-6 py-2.5 text-sm font-medium text-[var(--ink)] ${LIFT_FACE}`}
                style={{ borderRadius: "var(--radius)" }}
              >
                LinkedIn
              </a>
            </PopLift>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-[var(--ink)] bg-[var(--white)] px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <Link
            href="/dev/component-explorer"
            className="uppercase underline underline-offset-2 hover:text-[var(--ink)]"
          >
            Component explorer
          </Link>
        </div>
      </footer>
    </div>
  );
}
