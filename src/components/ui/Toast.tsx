"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnimationEvent,
  type ReactNode,
} from "react";

type ToastContextValue = {
  showToast: (message: string) => void;
};

type ToastPhase = "enter" | "shown" | "exit";

const ToastContext = createContext<ToastContextValue | null>(null);

const ENTER_MS = 320;
const EXIT_MS = 280;
const HOLD_MS = 2200;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [phase, setPhase] = useState<ToastPhase>("enter");
  const [toastId, setToastId] = useState(0);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generation = useRef(0);

  const clearHold = useCallback(() => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  }, []);

  const showToast = useCallback(
    (next: string) => {
      clearHold();
      generation.current += 1;
      setToastId(generation.current);
      setMessage(next);
      setPhase("enter");
    },
    [clearHold],
  );

  useEffect(() => clearHold, [clearHold]);

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;

      if (phase === "enter") {
        setPhase("shown");
        const gen = generation.current;
        holdTimer.current = setTimeout(() => {
          if (generation.current !== gen) return;
          setPhase("exit");
        }, HOLD_MS);
        return;
      }

      if (phase === "exit") {
        setMessage(null);
      }
    },
    [phase],
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {message ? (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
        >
          <div
            key={toastId}
            onAnimationEnd={handleAnimationEnd}
            className="border-2 border-ink bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-hard motion-reduce:animate-none motion-reduce:opacity-100"
            style={{
              borderRadius: "var(--radius)",
              animationName:
                phase === "exit"
                  ? "toast-fall"
                  : phase === "enter"
                    ? "toast-rise"
                    : "none",
              animationDuration: `${phase === "exit" ? EXIT_MS : ENTER_MS}ms`,
              animationTimingFunction:
                phase === "exit" ? "ease-in" : "ease-out",
              animationFillMode: "forwards",
              ...(phase === "shown"
                ? { opacity: 1, transform: "translateY(0)" }
                : null),
            }}
          >
            {message}
          </div>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
