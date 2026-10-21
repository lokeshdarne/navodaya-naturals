"use client";

import { useScrollBehavior } from "@/hooks/use-scroll-behavior";

export function ScrollProgress() {
  const { progress } = useScrollBehavior();
  return (
    <div
      data-testid="scroll-progress"
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[150] h-[3px] rounded-r-[3px] bg-gradient-to-r from-clay to-moss transition-[width] duration-150 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
