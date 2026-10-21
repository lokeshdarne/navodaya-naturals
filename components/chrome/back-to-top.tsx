"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className={`fixed right-4 bottom-20 z-40 grid size-12 place-items-center rounded-full bg-moss text-primary-foreground shadow-[0_6px_24px_rgba(73,87,63,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:right-6 md:bottom-6 ${
        show
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <ArrowUpIcon className="size-5" aria-hidden="true" />
    </button>
  );
}
