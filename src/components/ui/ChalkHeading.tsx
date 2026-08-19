import type { HTMLAttributes, ReactNode } from "react";

type ChalkHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  children: ReactNode;
  tone?: "ink" | "dust";
};

const SIZE = {
  h1: "text-3xl sm:text-4xl lg:text-5xl font-light",
  h2: "text-2xl sm:text-3xl font-light",
  h3: "text-xl sm:text-2xl font-normal",
  h4: "text-lg sm:text-xl font-normal",
  p: "text-base sm:text-lg font-normal",
} as const;

/** Display heading — JetBrains Mono for now (same family as UI). */
export function ChalkHeading({
  as = "h2",
  tone = "ink",
  children,
  className = "",
  ...props
}: ChalkHeadingProps) {
  const Tag = as;
  const color =
    tone === "dust" ? "text-[var(--dust)]" : "text-[var(--ink)]";

  return (
    <Tag
      className={`font-mono tracking-[0.02em] leading-tight ${SIZE[as]} ${color} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
