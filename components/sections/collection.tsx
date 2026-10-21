import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { PRODUCTS } from "@/lib/products";

export function Collection() {
  return (
    <section id="collection" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-center">The Collection</span>
          <h2 className="mt-4 font-heading text-[clamp(28px,4.5vw,42px)] font-semibold tracking-[-0.01em] text-ink">
            The first harvest awaits
          </h2>
          <p className="mt-4 text-[16px] text-ink-muted">
            We&apos;re putting the finishing touches on our founding range. These six essentials
            are launching first &mdash; join the list to be the first to taste them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <article
                data-testid={`product-${product.id}`}
                className="group h-full overflow-hidden rounded-3xl border border-timber/50 bg-card shadow-[0_4px_20px_-2px_rgba(93,112,82,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3.1] bg-white">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                      product.contain ? "object-contain p-4" : "object-cover"
                    }`}
                  />
                  <span className="absolute top-4 left-4 z-[1] inline-flex items-center gap-2 rounded-full bg-card/90 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.1em] text-ink uppercase shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur">
                    <span className="pulse-dot" aria-hidden="true" /> Coming Soon
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-extrabold tracking-[0.14em] text-clay-deep uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-xl font-semibold text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] text-ink-muted">{product.desc}</p>
                  <a
                    href="#notify"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-moss transition-colors hover:text-moss-deep"
                  >
                    Get notified
                    <ArrowRightIcon className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
