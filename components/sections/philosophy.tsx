import { LeafIcon, ShieldCheckIcon, SunIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

const CARDS = [
  {
    icon: LeafIcon,
    title: "Soil First",
    body: "We partner with farms that regenerate soil health through crop rotation, composting, and zero synthetic inputs \u2014 so the land gives back more each season.",
  },
  {
    icon: SunIcon,
    title: "Sun-Dried, Not Heat-Blasted",
    body: "Our moringa, spinach, and beetroot are dried in open air under the Indian sun \u2014 preserving volatile oils, enzymes, and colour that industrial ovens destroy.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Batch-Tested Transparency",
    body: "Every harvest lot is lab-tested for heavy metals, microbes, and pesticide residue. Results will be published per batch \u2014 so you know exactly what you're eating.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute top-10 -left-40 size-80 rounded-full bg-sand/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 size-96 rounded-full bg-stone/60 blur-3xl"
      />
      <div className="container-x relative z-[1]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-center">Our Philosophy</span>
          <h2 className="mt-4 font-heading text-[clamp(28px,4.5vw,42px)] font-semibold tracking-[-0.01em] text-ink">
            Why organic isn&apos;t a label &mdash; it&apos;s a promise
          </h2>
          <p className="mt-4 text-[16px] text-ink-muted">
            We don&apos;t just certify. We cultivate. Every decision &mdash; from seed to sachet
            &mdash; is made to protect what nature gave us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i + 1) as 1 | 2 | 3}>
              <article className="h-full rounded-3xl border border-timber/50 bg-card p-7 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-stone text-moss">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-[15px] text-ink-muted">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
