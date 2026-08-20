type QuoteCardProps = {
  quote?: string;
  name?: string;
  role?: string;
  href?: string;
};

export function QuoteCard({
  quote = "Agent-driven queries would create a serious cost problem on compute-heavy warehouses. This architecture is an excellent fit for exploration.",
  name = "Pablo Ferrari",
  role = "Director of Data Engineering",
  href = "#",
}: QuoteCardProps) {
  return (
    <figure
      className="relative border-2 border-ink bg-canary p-8 sm:p-10"
      style={{ borderRadius: "var(--radius)" }}
    >
      <span
        aria-hidden
        className="absolute left-6 top-4 text-5xl font-light leading-none text-ink"
      >
        “
      </span>
      <blockquote className="mt-6 text-lg leading-relaxed text-ink sm:text-xl">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="border-2 border-ink bg-white px-3 py-2">
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
        <a
          href={href}
          className="text-sm font-medium underline underline-offset-4 text-ink"
        >
          Read more ↗
        </a>
      </figcaption>
    </figure>
  );
}
