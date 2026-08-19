type MarqueeProps = {
  items?: string[];
  speedSeconds?: number;
};

export function Marquee({
  items = [
    "Data Warehouse + AI",
    "Hypertenancy",
    "Ducklings per Agent",
    "Zero Contention",
  ],
  speedSeconds = 28,
}: MarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[var(--canary)] py-3">
      <div
        className="flex w-max animate-marquee gap-10 whitespace-nowrap px-4"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {sequence.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-lg font-semibold uppercase tracking-[0.04em] text-[var(--ink)] sm:text-xl"
          >
            {item}
            <span className="ml-10 text-[var(--ink)]/40" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
