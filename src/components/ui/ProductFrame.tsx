import type { ReactNode } from "react";

type ProductFrameProps = {
  title?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
};

export function ProductFrame({
  title = "Agent console",
  badge = "3 questions left",
  children,
  className = "",
}: ProductFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-3xl ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-8 hidden h-16 w-24 border-2 border-[var(--wet-cement)] sm:block"
        style={{
          borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-4 -right-4 hidden h-0 w-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-[var(--ink)] sm:block"
      />

      <div
        className="overflow-hidden border-2 border-[var(--ink)] bg-[var(--white)] shadow-[var(--shadow)]"
        style={{ borderRadius: "var(--radius)" }}
      >
        <div className="flex items-center justify-between border-b-2 border-[var(--ink)] bg-[#1e2430] px-4 py-2.5 text-[var(--white)]">
          <span className="text-xs font-medium uppercase">{title}</span>
          <span className="bg-[var(--canary)] px-2 py-0.5 text-[10px] font-semibold uppercase text-[var(--ink)]">
            {badge}
          </span>
        </div>
        <div className="min-h-[200px] bg-[#12171f] p-4 text-left text-sm text-[#d7dde8] sm:min-h-[260px] sm:p-6">
          {children ?? (
            <div className="space-y-3 font-mono">
              <p className="text-[var(--sky)]">❯ why did weekly active ducks dip?</p>
              <p className="text-[#9aa3b5]">
                ● Queried warehouse — dip isolated to EU flock (−22% after
                07-28 release).
              </p>
              <p className="text-[var(--canary)]">
                ⎿ ran on duckling agent-7f2 (isolated)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
