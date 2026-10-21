"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollBehavior } from "@/hooks/use-scroll-behavior";
import { cn } from "cn";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navHidden, scrolled, reveal } = useScrollBehavior({ menuOpen });

  return (
    <header
      id="navbar"
      data-navbar
      data-testid="navbar"
      data-hidden={navHidden ? "true" : "false"}
      onFocusCapture={reveal}
      className={cn(
        "fixed inset-x-4 top-4 z-[100] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        navHidden && "-translate-y-[130%]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1200px] items-center gap-2 rounded-full border border-timber/60 bg-white/75 px-3 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.12)] backdrop-blur-xl transition-shadow duration-300",
          scrolled &&
            "shadow-[0_4px_30px_rgba(93,112,82,0.16),0_1px_0_rgba(222,216,207,0.4)]",
        )}
      >
        <Link href="#top" className="hidden shrink-0 items-center gap-2.5 md:flex">
          <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-[width,height] duration-300">
            <Image
              src="/images/logo.png"
              alt="Navodaya Naturals logo"
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </span>
          <span className="font-heading text-[18px] leading-none font-semibold text-ink">
            Navodaya Naturals
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[15px] font-semibold text-ink-muted transition-colors duration-200 hover:bg-stone/70 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-2">
          <a
            href="#notify"
            className="inline-flex h-10 items-center justify-center rounded-full bg-moss px-5 text-sm font-bold text-primary-foreground shadow-none transition-[transform,background-color] duration-200 hover:bg-moss-deep active:scale-[0.98]"
          >
            Get Notified
          </a>
        </div>

        <Sheet
          open={menuOpen}
          onOpenChange={(open) => {
            setMenuOpen(open);
            if (open) reveal();
          }}
        >
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="size-11 shrink-0 rounded-full text-ink md:hidden"
              />
            }
          >
            {menuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 rounded-l-3xl border-l border-timber/60 bg-background/95 p-6 backdrop-blur-xl"
          >
            <SheetHeader className="p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate the Navodaya Naturals site
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-stone"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#notify"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-moss px-4 py-3.5 text-center text-base font-bold text-primary-foreground"
              >
                Get Notified
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
