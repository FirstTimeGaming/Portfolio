import type { ButtonHTMLAttributes, ReactNode } from "react";

const RAINBOW = [
  "var(--coral)",
  "var(--peach)",
  "var(--mint)",
  "var(--lilac)",
  "var(--lime)",
  "var(--periwinkle)",
  "var(--slate-sketch)",
  "var(--marigold)",
] as const;

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "rainbow"
  | "nav"
  | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  rainbowIndex?: number;
  children: ReactNode;
};

/** Face only moves; the ink plate stays put so lift/fall eases cleanly both ways.
 *  Lift on real hover / keyboard focus-visible only — not sticky :focus after click. */
const LIFT_FACE =
  "relative z-10 -translate-x-1.5 translate-y-1.5 transition-transform duration-300 ease-in-out motion-reduce:transition-none [@media(hover:hover)]:group-hover:translate-x-0 [@media(hover:hover)]:group-hover:translate-y-0 focus-visible:translate-x-0 focus-visible:translate-y-0 active:-translate-x-1.5 active:translate-y-1.5";

function PopLift({ children }: { children: ReactNode }) {
  return (
    <span className="group relative isolate inline-flex">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 -translate-x-1.5 translate-y-1.5 bg-ink"
        style={{ borderRadius: "var(--radius)" }}
      />
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  rainbowIndex = 0,
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-mono font-medium tracking-[0.02em] border-2 disabled:opacity-50 disabled:pointer-events-none";

  if (variant === "primary") {
    return (
      <PopLift>
        <button
          className={`${base} ${LIFT_FACE} bg-sky border-ink text-ink px-6 py-2.5 text-sm ${className}`}
          style={{ borderRadius: "var(--radius)", ...style }}
          {...props}
        >
          {children}
        </button>
      </PopLift>
    );
  }

  if (variant === "secondary") {
    return (
      <PopLift>
        <button
          className={`${base} ${LIFT_FACE} bg-white border-ink text-ink px-6 py-2.5 text-sm ${className}`}
          style={{ borderRadius: "var(--radius)", ...style }}
          {...props}
        >
          {children}
        </button>
      </PopLift>
    );
  }

  if (variant === "rainbow") {
    const borderColor = RAINBOW[rainbowIndex % RAINBOW.length];
    return (
      <PopLift>
        <button
          className={`${base} ${LIFT_FACE} bg-white text-ink px-6 py-2.5 text-sm ${className}`}
          style={{
            borderRadius: "var(--radius)",
            borderColor,
            ...style,
          }}
          {...props}
        >
          {children}
        </button>
      </PopLift>
    );
  }

  if (variant === "nav") {
    return (
      <button
        className={`${base} bg-sky border-ink text-white px-4 py-2 text-xs font-semibold uppercase ${className}`}
        style={{ borderRadius: "var(--radius)", ...style }}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${base} border-transparent bg-transparent text-ink px-3 py-2 text-xs font-medium uppercase hover:bg-chalk ${className}`}
      style={{ borderRadius: "var(--radius)", ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

export { RAINBOW, PopLift, LIFT_FACE };
