import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export function TextInput({
  label = "Search",
  hint,
  className = "",
  id = "text-input",
  ...props
}: TextInputProps) {
  return (
    <label className="flex w-full max-w-md flex-col gap-2" htmlFor={id}>
      <span className="text-xs font-semibold uppercase text-[var(--ink)]">
        {label}
      </span>
      <input
        id={id}
        className={`w-full border-2 border-[var(--ink)] bg-[var(--white)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:bg-[var(--ice)] ${className}`}
        style={{ borderRadius: "var(--radius)" }}
        {...props}
      />
      {hint ? (
        <span className="text-xs text-[var(--muted)]">{hint}</span>
      ) : null}
    </label>
  );
}
