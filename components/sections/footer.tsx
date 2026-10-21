import Image from "next/image";
import { SunIcon } from "lucide-react";

import { NAV_LINKS, SITE } from "@/lib/site";

const SUPPORT_LINKS = [
  { label: "Shipping & Returns", href: "#contact" },
  { label: "Bulk Orders", href: "#contact" },
  { label: "FAQ", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "WhatsApp Channel", href: SITE.whatsappHref },
];

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className="bg-[#2C2C24] pt-16 pb-8 text-[#E6DCCD]">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
              <Image
                src="/images/logo.png"
                alt="Navodaya Naturals logo"
                width={56}
                height={56}
                className="size-full object-cover"
              />
            </span>
            <div>
              <span className="block font-heading text-lg font-semibold text-[#FDFCF8]">
                {SITE.name}
              </span>
              <span className="mt-1.5 inline-flex items-center gap-2 rounded-full border border-[#E6DCCD]/25 px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase">
                <span className="pulse-dot" aria-hidden="true" />
                Launching Soon
              </span>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-[#E6DCCD]/75">
                Bringing the purest organic superfoods from Indian farms directly to your table.
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-3.5 font-heading text-[15px] font-semibold text-[#FDFCF8]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]">
                    {link.label === "Collection" ? "The Collection" : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-heading text-[15px] font-semibold text-[#FDFCF8]">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]">
                  Email us
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-heading text-[15px] font-semibold text-[#FDFCF8]">
              Support
            </h4>
            <ul className="space-y-2.5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-heading text-[15px] font-semibold text-[#FDFCF8]">
              Follow Us
            </h4>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-[14px] text-[#E6DCCD]/75 transition-colors hover:text-[#FDFCF8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#E6DCCD]/15 pt-6 text-[13px] text-[#E6DCCD]/60 md:flex-row">
          <span>
            &copy; {year} {SITE.name}. Purely Organic. Farmer Direct.
          </span>
          <span className="inline-flex items-center gap-1.5">
            Crafted with
            <SunIcon className="size-3.5 text-clay" aria-hidden="true" />
            from the Indian soil
          </span>
        </div>
      </div>
    </footer>
  );
}
