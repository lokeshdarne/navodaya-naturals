import { HandshakeIcon, LeafIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

const TRUST_ITEMS = [
  { icon: LeafIcon, title: "100% Pure Organic", sub: "Grown without chemicals" },
  { icon: ShieldCheckIcon, title: "FSSAI Certified", sub: "Lab-tested for purity" },
  { icon: HandshakeIcon, title: "Farmer Direct", sub: "Fair prices, no middlemen" },
  { icon: TruckIcon, title: "Doorstep Delivery", sub: "Cash on delivery available" },
];

export function Trust() {
  return (
    <div className="container-x">
      <Reveal>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-3 rounded-3xl border border-timber/50 bg-card px-4 py-7 text-center shadow-[0_4px_20px_-2px_rgba(93,112,82,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-stone text-moss">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <strong className="font-heading text-[15px] font-semibold text-ink">{title}</strong>
              <span className="text-sm text-ink-muted">{sub}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
