import Link from "next/link";
import type { ReactNode } from "react";
import { Button, LIFT_FACE, PopLift } from "./Button";
import { ChalkHeading } from "./ChalkHeading";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  logos?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  children?: ReactNode;
};

const linkButtonClass = `inline-flex items-center justify-center border-2 border-[var(--ink)] px-6 py-2.5 text-sm font-medium text-[var(--ink)] ${LIFT_FACE}`;

export function Hero({
  eyebrow = "Software engineer",
  title = "Build with clarity",
  description = "Mono type, hard shadows, cream paper, and board panels.",
  primaryLabel = "View work",
  secondaryLabel = "Contact",
  primaryHref,
  secondaryHref,
  logos = [],
  onPrimaryClick,
  onSecondaryClick,
  children,
}: HeroProps) {
  return (
    <section className="w-full bg-[var(--cream)] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase text-[var(--muted)]">
            {eyebrow}
          </p>
        ) : null}
        <ChalkHeading as="h1" className="max-w-3xl uppercase">
          {title}
        </ChalkHeading>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink)] sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {primaryHref ? (
            <PopLift>
              <Link
                href={primaryHref}
                className={`${linkButtonClass} bg-[var(--sky)]`}
                style={{ borderRadius: "var(--radius)" }}
              >
                {primaryLabel}
              </Link>
            </PopLift>
          ) : (
            <Button variant="primary" type="button" onClick={onPrimaryClick}>
              {primaryLabel}
            </Button>
          )}
          {secondaryHref ? (
            <PopLift>
              <Link
                href={secondaryHref}
                className={`${linkButtonClass} bg-[var(--white)]`}
                style={{ borderRadius: "var(--radius)" }}
                target={secondaryHref.startsWith("http") ? "_blank" : undefined}
                rel={
                  secondaryHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {secondaryLabel}
              </Link>
            </PopLift>
          ) : (
            <Button variant="secondary" type="button" onClick={onSecondaryClick}>
              {secondaryLabel}
            </Button>
          )}
        </div>
        {logos.length > 0 ? (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink)] opacity-70"
              >
                {logo}
              </span>
            ))}
          </div>
        ) : null}
        {children ? <div className="mt-14 w-full">{children}</div> : null}
      </div>
    </section>
  );
}
