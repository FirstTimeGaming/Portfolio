type TweetCardProps = {
  name?: string;
  handle?: string;
  body?: string;
  platform?: "x" | "linkedin";
};

export function TweetCard({
  name = "Alex Rivers",
  handle = "@alexbuilds",
  body = "Shipped a portfolio kit with cream paper, mono type, and hard offset shadows. Feels like a notebook that can ship product.",
  platform = "x",
}: TweetCardProps) {
  return (
    <article
      className="border-2 border-ink bg-white p-6 sm:p-8"
      style={{ borderRadius: "var(--radius)" }}
    >
      <header className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-ice text-sm font-semibold text-ink"
          style={{ borderRadius: "999px" }}
          aria-hidden
        >
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">
            {name}
          </p>
          <p className="truncate text-xs text-muted">{handle}</p>
        </div>
        <span
          className="text-xs font-semibold uppercase text-sky"
          aria-label={platform}
        >
          {platform === "x" ? "𝕏" : "in"}
        </span>
      </header>
      <p className="text-sm leading-relaxed text-ink">{body}</p>
    </article>
  );
}
