"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "cn";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", delay > 0 && `delay-${delay}`, className)}
    >
      {children}
    </Tag>
  );
}
