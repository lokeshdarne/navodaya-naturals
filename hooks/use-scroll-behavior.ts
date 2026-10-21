"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HIDE_THRESHOLD = 6;
const MIN_SCROLL = 140;

export type ScrollBehaviorOptions = {
  menuOpen?: boolean;
};

/**
 * Apple-style navbar behavior: hide on scroll down past a small threshold,
 * reveal on scroll up (or near the top), on every viewport. Never hides while
 * a menu is open or when the user has keyboard focus inside the navbar.
 */
export function useScrollBehavior({ menuOpen = false }: ScrollBehaviorOptions = {}) {
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  const reveal = useCallback(() => setNavHidden(false), []);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);

        const delta = y - lastYRef.current;
        if (menuOpen) {
          setNavHidden(false);
        } else if (delta > HIDE_THRESHOLD && y > MIN_SCROLL) {
          setNavHidden(true);
        } else if (delta < -HIDE_THRESHOLD || y <= MIN_SCROLL) {
          setNavHidden(false);
        }
        lastYRef.current = y;

        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return { navHidden, scrolled, progress, reveal };
}
