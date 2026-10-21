import { describe, expect, it } from "vitest";

import { NAV_LINKS, SITE, SUBJECTS } from "@/lib/site";

describe("site constants", () => {
  it("whatsapp number matches the displayed phone", () => {
    const digits = SITE.phoneDisplay.replace(/\D/g, "");
    expect(SITE.whatsappNumber).toBe(digits);
    expect(SITE.whatsappHref).toBe(`https://wa.me/${digits}`);
  });

  it("exposes a valid email and mailto", () => {
    expect(SITE.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("nav links point at real section anchors", () => {
    const anchors = NAV_LINKS.map((l) => l.href);
    expect(anchors).toEqual(["#collection", "#philosophy", "#story", "#contact"]);
  });

  it("has the five contact form subjects", () => {
    expect(SUBJECTS).toHaveLength(5);
    expect(SUBJECTS[0]).toBe("General enquiry");
  });
});
