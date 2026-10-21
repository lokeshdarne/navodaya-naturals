import Image from "next/image";
import { LeafIcon, ShieldCheckIcon, SunIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

const STAND_FOR = [
  "Healthy soil, because good food starts there",
  "Responsible use of water",
  "Natural, seasonal farming",
  "Traditional, better quality crop varieties",
  "Harvests preserved naturally, for use all year",
  "Respect for farmers",
  "Simple, honest food",
];

const STATS = [
  { value: "0", label: "Additives" },
  { value: "48h", label: "Field to pack" },
  { value: "100%", label: "Traceable" },
];

const PILLARS = [
  {
    icon: LeafIcon,
    title: "Our Mission",
    body: [
      "To bring the honest taste of naturally grown food back to every Indian home. One healed acre, one traditional variety, one chemical free harvest at a time.",
      "Good food should not be a rare find or a luxury. Every family should be able to trust what it eats, every season. That is why Navodaya Naturals exists: to make purity accessible, to give farmers a reason to choose the harder and better path, and to remind people what real food is supposed to taste like.",
    ],
  },
  {
    icon: SunIcon,
    title: "Our Vision",
    body: [
      "A future where every Indian household eats food grown the way nature intended. Chemical free, seasonal, and full of the flavour we have been slowly losing.",
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Our Values",
    body: [
      "Healthy soil. Responsible water use. Honest, seasonal farming. Traditional, better quality crop varieties. Respect for the farmers who make it all possible. And food kept as close to its natural form as it can be. Every Navodaya Naturals product carries this story, from the soil to the harvest to your home.",
    ],
  },
];

export function About() {
  return (
    <section id="story" className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-6 size-40 rounded-full bg-sand/60"
            />
            <div className="relative z-[1] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-[6px] border-white shadow-[0_10px_40px_-10px_rgba(193,140,93,0.2)]">
              <Image
                src="/images/hero-banner.jpg"
                alt="Indian farmland"
                width={1600}
                height={1680}
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="aspect-[4/4.2] w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-5 z-[2] size-24 rounded-full bg-moss/15"
            />
          </Reveal>

          <Reveal delay={1}>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-4 font-heading text-[clamp(28px,3.6vw,40px)] font-semibold tracking-[-0.01em] text-ink">
              A New Dawn
              <br />
              of Purity
            </h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-[1.8] text-ink-muted">
              <p>
                I&apos;m Pratyush Misal. Since 2018, I have been running an oxygen manufacturing
                plant in Yavatmal, Maharashtra. Farming was never part of my world, and my family
                had not farmed for generations.
              </p>
              <p>
                That changed over one meal. At a farmer&apos;s home in Konkan, I tasted cowpea
                bhaji and jowar bhakri unlike anything I had eaten before. The farmer had grown
                everything himself, chemical free, and saved his own seeds every season. That
                conversation stayed with me.
              </p>
              <p>
                Back home, I looked for farmers doing the same and found very few, not because
                they didn&apos;t care, but because natural farming is harder and slower and often
                pays no better than chemical farming. I wanted to understand why, so I kept asking
                questions and listening. Those conversations eventually led me to Padma Shri
                Subhash Palekar, who showed me that every plant carries its own natural strength.
              </p>
              <p>
                That day, I decided to farm, with no land under cultivation, no training, and no
                family history to draw on. I found 10 acres to rent, spent six months healing soil
                that had known only chemicals, and began farming at the end of October.
              </p>
            </div>

            <h3 className="mt-8 font-heading text-[21px] font-semibold text-ink">We stand for</h3>
            <ul className="mt-3 grid gap-2.5">
              {STAND_FOR.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-moss"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-stone px-2 py-[18px] text-center ${
                    i === 0
                      ? "rounded-3xl rounded-tr-lg"
                      : i === 1
                        ? "rounded-3xl rounded-tl-lg"
                        : "rounded-3xl rounded-bl-lg"
                  }`}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <strong className="block font-heading text-[26px] font-semibold text-moss">
                      {stat.value}
                    </strong>
                    <span className="mt-0.5 block text-[11px] font-bold tracking-[0.1em] text-ink-muted uppercase">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="h-full rounded-3xl border border-timber/50 bg-card p-7 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.08)]">
                  <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-stone text-moss">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
                  {body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="mt-3 text-[15px] text-ink-muted">
                      {paragraph}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
            <span className="eyebrow eyebrow-center">Meet the Founder</span>
            <h2 className="mt-4 font-heading text-[clamp(28px,4.5vw,42px)] font-semibold text-ink">
              Pratyush Misal
            </h2>
            <p className="mt-2 font-bold text-ink">
              Founder, Navodaya Naturals Pvt. Ltd.
            </p>
            <p className="mt-4 text-[16px] text-ink-muted">
              Pratyush previously ran an oxygen manufacturing plant in Yavatmal, Maharashtra. A
              chance meal in Konkan drew him toward natural farming, and later to Padma Shri
              Subhash Palekar. With no farming background, he began restoring 10 acres of
              chemically farmed land to health, and started Navodaya Naturals to bring that
              soil-first philosophy to everyday food.
            </p>
            <p className="mt-5 font-heading text-[19px] text-clay-deep italic">
              Navodaya Naturals. A New Dawn of Purity.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
