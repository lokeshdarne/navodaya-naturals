"use client";

import { useEffect, useState } from "react";

import { LeafIcon } from "lucide-react";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero-anchor");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 400;
      setShow(heroBottom < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="sticky-cta"
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#notify"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-moss text-[15px] font-bold text-primary-foreground shadow-[0_8px_30px_rgba(73,87,63,0.35)]"
      >
        <LeafIcon className="size-4" aria-hidden="true" />
        Notify Me at Launch
      </a>
    </div>
  );
}
