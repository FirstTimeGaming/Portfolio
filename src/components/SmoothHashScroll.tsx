"use client";

import { useEffect } from "react";

function hashTargetId(anchor: HTMLAnchorElement): string | null {
  const raw = anchor.getAttribute("href");
  if (!raw || raw === "#") return null;

  if (raw.startsWith("#")) {
    return decodeURIComponent(raw.slice(1));
  }

  try {
    const url = new URL(raw, window.location.href);
    if (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.hash.length > 1
    ) {
      return decodeURIComponent(url.hash.slice(1));
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Same-hash clicks are ignored by the browser / Next.js Link. Capture the
 * click first, always smooth-scroll, and stop Next from short-circuiting.
 */
export function SmoothHashScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank") return;

      const id = hashTargetId(anchor);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      const nextHash = `#${id}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
