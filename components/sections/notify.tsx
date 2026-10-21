"use client";

import { useState } from "react";
import { LockIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/reveal";
import { isValidEmail, buildNotifyMessage, buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

export function Notify() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    openWhatsApp(buildWhatsAppUrl(buildNotifyMessage(email)));
    setDone(true);
    setEmail("");
    toast.success("Thanks for joining the launch list!");
  }

  return (
    <section id="notify" className="py-10 md:py-14">
      <div className="container-x">
        <Reveal>
          <div className="rounded-[40px] bg-gradient-to-br from-moss-deep via-moss to-[#6a8060] px-6 py-14 text-center text-primary-foreground shadow-[0_20px_50px_-15px_rgba(73,87,63,0.4)] md:px-14">
            <h3 className="font-heading text-[clamp(26px,3.6vw,36px)] font-semibold">
              Be the first to know
            </h3>
            <p className="mx-auto mt-3 max-w-[520px] text-[15.5px] text-primary-foreground/85">
              Join the launch list and get first access, early-bird pricing, and a small gift in
              your first order.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={handleSubmit}
              noValidate
            >
              <label htmlFor="notify-email" className="sr-only">
                Your email address
              </label>
              <input
                id="notify-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 min-w-0 flex-1 rounded-full border border-white/25 bg-white/95 px-5 text-[15px] text-ink outline-none placeholder:text-ink-muted/70 focus-visible:ring-2 focus-visible:ring-white"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-ink px-7 text-[15px] font-bold text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-black active:scale-[0.98]"
              >
                Notify Me
              </button>
            </form>
            <p
              id="notify-status"
              aria-live="polite"
              className="mx-auto mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-primary-foreground/80"
            >
              {done ? (
                <CheckIcon className="size-3.5" aria-hidden="true" />
              ) : (
                <LockIcon className="size-3.5" aria-hidden="true" />
              )}
              {done ? "Thanks! We'll reach out on WhatsApp to confirm." : "No spam. Unsubscribe anytime."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
