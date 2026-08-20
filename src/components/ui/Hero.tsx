"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button, LIFT_FACE, PopLift } from "./Button";
import { CopyEmailButton } from "./CopyEmailButton";
import { ChalkHeading } from "./ChalkHeading";

export type HeroLinkAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroCopyAction = {
  label: string;
  copyEmail: string;
  variant?: "primary" | "secondary";
};

export type HeroAction = HeroLinkAction | HeroCopyAction;

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  actions?: HeroAction[];
  logos?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  children?: ReactNode;
};

const linkButtonClass = `inline-flex items-center justify-center border-2 border-ink px-6 py-2.5 text-sm font-medium text-ink ${LIFT_FACE}`;

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isPlainAnchorHref(href: string) {
  return href.startsWith("#") || href.startsWith("mailto:");
}

function isCopyAction(action: HeroAction): action is HeroCopyAction {
  return "copyEmail" in action;
}

function faceClass(variant: "primary" | "secondary" = "secondary") {
  return `${linkButtonClass} ${
    variant === "primary" ? "bg-sky" : "bg-white"
  }`;
}

function HeroActionButton(action: HeroAction) {
  const variant = action.variant ?? "secondary";
  const style = { borderRadius: "var(--radius)" };

  if (isCopyAction(action)) {
    return (
      <CopyEmailButton
        email={action.copyEmail}
        variant={variant === "primary" ? "primary" : "secondary"}
      >
        {action.label}
      </CopyEmailButton>
    );
  }

  const { href } = action;
  const className = faceClass(variant);

  if (isPlainAnchorHref(href)) {
    return (
      <PopLift>
        <a href={href} className={className} style={style}>
          {action.label}
        </a>
      </PopLift>
    );
  }

  return (
    <PopLift>
      <Link
        href={href}
        className={className}
        style={style}
        target={isExternalHref(href) ? "_blank" : undefined}
        rel={isExternalHref(href) ? "noopener noreferrer" : undefined}
      >
        {action.label}
      </Link>
    </PopLift>
  );
}

export function Hero({
  eyebrow = "Software engineer",
  title = "Build with clarity",
  description = "Mono type, hard shadows, cream paper, and board panels.",
  primaryLabel = "View work",
  secondaryLabel = "Contact",
  primaryHref,
  secondaryHref,
  actions,
  logos = [],
  onPrimaryClick,
  onSecondaryClick,
  children,
}: HeroProps) {
  const fallbackActions: HeroAction[] = [];
  if (primaryHref) {
    fallbackActions.push({
      label: primaryLabel,
      href: primaryHref,
      variant: "primary",
    });
  }
  if (secondaryHref) {
    fallbackActions.push({
      label: secondaryLabel,
      href: secondaryHref,
      variant: "secondary",
    });
  }
  const resolvedActions = actions ?? fallbackActions;

  return (
    <section className="w-full bg-cream px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-300 flex-col items-center text-center">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase text-muted">
            {eyebrow}
          </p>
        ) : null}
        <ChalkHeading as="h1" className="max-w-3xl uppercase">
          {title}
        </ChalkHeading>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {resolvedActions.length > 0 ? (
            resolvedActions.map((action) => (
              <HeroActionButton
                key={
                  isCopyAction(action)
                    ? `${action.label}-copy`
                    : `${action.label}-${action.href}`
                }
                {...action}
              />
            ))
          ) : (
            <>
              <Button variant="primary" type="button" onClick={onPrimaryClick}>
                {primaryLabel}
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={onSecondaryClick}
              >
                {secondaryLabel}
              </Button>
            </>
          )}
        </div>
        {logos.length > 0 ? (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold uppercase tracking-[0.08em] text-ink opacity-70"
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
