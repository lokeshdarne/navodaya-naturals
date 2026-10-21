import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useScrollBehavior } from "@/hooks/use-scroll-behavior";

function setScrollY(y: number) {
  Object.defineProperty(window, "scrollY", { value: y, configurable: true, writable: true });
}

function setScrollHeight(height: number) {
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: height,
    configurable: true,
  });
}

async function flushRaf() {
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
  });
}

async function scrollBy(y: number) {
  setScrollY(y);
  act(() => {
    window.dispatchEvent(new Event("scroll"));
  });
  await flushRaf();
}

describe("useScrollBehavior", () => {
  beforeEach(() => {
    setScrollY(0);
    setScrollHeight(4000);
    Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });
  });

  it("starts visible at the top of the page", () => {
    const { result } = renderHook(() => useScrollBehavior());
    expect(result.current.navHidden).toBe(false);
    expect(result.current.scrolled).toBe(false);
  });

  it("hides on scroll down past the threshold (desktop bug regression test)", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(400);
    expect(result.current.navHidden).toBe(true);
    expect(result.current.scrolled).toBe(true);
  });

  it("reveals again on scroll up", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(400);
    expect(result.current.navHidden).toBe(true);
    await scrollBy(300);
    expect(result.current.navHidden).toBe(false);
  });

  it("never hides near the top of the page", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(100);
    expect(result.current.navHidden).toBe(false);
  });

  it("ignores tiny scroll jitters below the threshold", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(140);
    expect(result.current.navHidden).toBe(false);
    await scrollBy(144);
    expect(result.current.navHidden).toBe(false);
    await scrollBy(160);
    expect(result.current.navHidden).toBe(true);
  });

  it("stays visible while the menu is open", async () => {
    const { result, rerender } = renderHook(({ menuOpen }) => useScrollBehavior({ menuOpen }), {
      initialProps: { menuOpen: true },
    });
    await scrollBy(500);
    expect(result.current.navHidden).toBe(false);
    rerender({ menuOpen: false });
    await scrollBy(700);
    expect(result.current.navHidden).toBe(true);
  });

  it("computes scroll progress as a percentage", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(1600);
    // (1600 / (4000 - 800)) * 100 = 50
    expect(result.current.progress).toBeCloseTo(50, 1);
  });

  it("reveal() forces the navbar visible", async () => {
    const { result } = renderHook(() => useScrollBehavior());
    await scrollBy(400);
    expect(result.current.navHidden).toBe(true);
    act(() => {
      result.current.reveal();
    });
    expect(result.current.navHidden).toBe(false);
  });
});
