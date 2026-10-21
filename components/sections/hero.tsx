import Image from "next/image";

import { Parallax } from "@/components/parallax";
import { Reveal } from "@/components/reveal";

const METRICS = [
  { value: "100%", label: "Certified Organic" },
  { value: "0", label: "Additives" },
  { value: "10+", label: "Partner Farmers" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-anchor relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 size-96 rounded-full bg-sand/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -right-32 size-[28rem] rounded-full bg-stone/70 blur-3xl"
      />

      <div className="container-x relative z-[1] grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal className="mb-6 md:hidden">
            <div className="flex items-center justify-center gap-3">
              <span className="grid size-[60px] place-items-center overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/logo.png"
                  alt="Navodaya Naturals logo"
                  width={60}
                  height={60}
                  className="size-full object-cover"
                />
              </span>
              <span className="font-heading text-[22px] font-semibold text-ink">
                Navodaya Naturals
              </span>
            </div>
          </Reveal>

          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-timber/70 bg-card px-4 py-2 text-[12px] font-extrabold tracking-[0.14em] text-moss-deep uppercase">
              <span className="pulse-dot" aria-hidden="true" />
              Launching Soon
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 font-heading text-[clamp(34px,6vw,56px)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink">
              Pure superfoods,
              <br />
              straight from the
              <br />
              <em className="font-heading text-moss italic">Indian soil</em>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-5 max-w-xl text-[17px] text-ink-muted">
              Certified organic. Grown by partner farmers. Harvested fresh, dried gently, and
              packed in small batches &mdash; so nothing comes between you and nature&apos;s
              nutrients.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#notify"
                className="inline-flex h-12 items-center justify-center rounded-full bg-moss px-7 text-[15px] font-bold text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-moss-deep active:scale-[0.98]"
              >
                Notify Me at Launch
              </a>
              <a
                href="#collection"
                className="inline-flex h-12 items-center justify-center rounded-full border border-timber bg-transparent px-7 text-[15px] font-bold text-ink transition-colors duration-200 hover:bg-stone"
              >
                Explore the Collection
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <strong className="block font-heading text-2xl font-semibold text-moss">
                      {m.value}
                    </strong>
                    <span className="mt-1 block text-[11px] font-bold tracking-[0.1em] text-ink-muted uppercase">
                      {m.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative">
          <Parallax className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 size-40 rounded-full bg-sand/60"
            />
            <div className="relative z-[1] overflow-hidden rounded-[42%_58%_52%_48%/48%_42%_58%_52%] border-[6px] border-white shadow-[0_10px_40px_-10px_rgba(193,140,93,0.25)]">
              <Image
                src="/images/hero-banner.jpg"
                alt="Sunlit organic farmland in India"
                width={1600}
                height={1200}
                priority
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="aspect-[4/4.2] w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-6 size-24 rounded-full bg-moss/15"
            />
          </Parallax>
        </Reveal>
      </div>

      <a
        href="#collection"
        aria-label="Scroll to explore"
        className="mx-auto mt-14 hidden w-fit flex-col items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-ink-muted uppercase transition-colors hover:text-moss md:flex"
      >
        <span className="h-10 w-6 rounded-full border-2 border-timber" aria-hidden="true">
          <span className="mx-auto mt-2 block size-1.5 rounded-full bg-moss" />
        </span>
        Scroll
      </a>
    </section>
  );
}
