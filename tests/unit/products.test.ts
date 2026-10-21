import { describe, expect, it } from "vitest";

import { PRODUCTS } from "@/lib/products";

// Under Next's bundler `img` is a StaticImageData object with `.src`;
// under vitest (no bundler) the import resolves to a plain path string.
function imgSrc(img: unknown): string {
  if (typeof img === "string") return img;
  if (img && typeof img === "object" && "src" in img) {
    return String((img as { src: unknown }).src);
  }
  return "";
}

describe("products data", () => {
  it("contains the six launch products", () => {
    expect(PRODUCTS).toHaveLength(6);
    const ids = PRODUCTS.map((p) => p.id);
    expect(ids).toEqual([
      "moringa",
      "chia",
      "spinach",
      "basil-seeds",
      "beetroot",
      "garlic",
    ]);
  });

  it("has unique ids and names", () => {
    const ids = new Set(PRODUCTS.map((p) => p.id));
    const names = new Set(PRODUCTS.map((p) => p.name));
    expect(ids.size).toBe(PRODUCTS.length);
    expect(names.size).toBe(PRODUCTS.length);
  });

  it("every product has an image and description", () => {
    for (const p of PRODUCTS) {
      expect(p.img, `${p.id} image`).toBeTruthy();
      expect(imgSrc(p.img), `${p.id} image src`).toMatch(/\.(png|jpe?g|webp|avif)($|\?)/i);
      expect(p.desc.length, `${p.id} desc`).toBeGreaterThan(20);
      expect(p.category.length, `${p.id} category`).toBeGreaterThan(0);
    }
  });

  it("garlic uses contain mode so it is not cropped", () => {
    const garlic = PRODUCTS.find((p) => p.id === "garlic");
    expect(garlic?.contain).toBe(true);
    const others = PRODUCTS.filter((p) => p.id !== "garlic");
    for (const p of others) {
      expect(p.contain).toBeFalsy();
    }
  });
});
