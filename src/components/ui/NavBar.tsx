"use client";

import Link from "next/link";
import { Button } from "./Button";
import { CopyEmailButton } from "./CopyEmailButton";

type NavLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  brand?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  copyEmail?: string;
  onCtaClick?: () => void;
  showGhost?: boolean;
  ghostLabel?: string;
  ghostHref?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Focus", href: "#focus" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function isHashHref(href: string) {
  return href.startsWith("#");
}

export function NavBar({
  brand = "Chase Wasalaski",
  links = DEFAULT_LINKS,
  ctaLabel = "Email",
  ctaHref,
  copyEmail,
  onCtaClick,
  showGhost = false,
  ghostLabel = "GitHub",
  ghostHref,
}: NavBarProps) {
  return (
    <header className="w-full border-b border-ink bg-white">
      <div className="mx-auto flex max-w-300 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.02em] text-ink"
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) =>
            isHashHref(link.href) ? (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium uppercase text-ink transition-colors hover:bg-chalk"
                style={{ borderRadius: "var(--radius)" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium uppercase text-ink transition-colors hover:bg-chalk"
                style={{ borderRadius: "var(--radius)" }}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          {showGhost ? (
            ghostHref ? (
              <Link
                href={ghostHref}
                target={ghostHref.startsWith("http") ? "_blank" : undefined}
                rel={
                  ghostHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="hidden px-3 py-2 text-xs font-medium uppercase text-ink transition-colors hover:bg-chalk sm:inline-flex"
                style={{ borderRadius: "var(--radius)" }}
              >
                {ghostLabel}
              </Link>
            ) : (
              <Button
                variant="ghost"
                type="button"
                className="hidden sm:inline-flex"
              >
                {ghostLabel}
              </Button>
            )
          ) : null}
          {copyEmail ? (
            <CopyEmailButton
              email={copyEmail}
              lift={false}
              className="inline-flex items-center justify-center border-2 border-ink bg-sky px-4 py-2 text-xs font-semibold uppercase text-white"
              style={{ borderRadius: "var(--radius)" }}
            >
              {ctaLabel}
            </CopyEmailButton>
          ) : ctaHref ? (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center border-2 border-ink bg-sky px-4 py-2 text-xs font-semibold uppercase text-white"
              style={{ borderRadius: "var(--radius)" }}
            >
              {ctaLabel}
            </a>
          ) : (
            <Button variant="nav" type="button" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
