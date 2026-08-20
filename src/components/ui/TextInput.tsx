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
      <span className="text-xs font-semibold uppercase text-ink">
        {label}
      </span>
      <input
        id={id}
        className={`w-full border-2 border-ink bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:bg-ice ${className}`}
        style={{ borderRadius: "var(--radius)" }}
        {...props}
      />
      {hint ? (
        <span className="text-xs text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
