"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { Button } from "./Button";
import { useToast } from "./Toast";

type CopyEmailButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "children" | "type"
> & {
  email: string;
  children?: ReactNode;
  lift?: boolean;
  toastMessage?: string;
  variant?: "primary" | "secondary";
};

export function CopyEmailButton({
  email,
  children = "Email me",
  lift = true,
  toastMessage = "Email copied to clipboard",
  variant = "primary",
  className = "",
  style,
  ...props
}: CopyEmailButtonProps) {
  const { showToast } = useToast();

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    // Drop focus so focus-visible lift doesn't stick after a pointer click.
    event.currentTarget.blur();

    try {
      await navigator.clipboard.writeText(email);
      showToast(toastMessage);
    } catch {
      showToast("Couldn't copy email — try again");
    }
  }

  if (!lift) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Button
      variant={variant}
      type="button"
      onClick={handleClick}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
}
