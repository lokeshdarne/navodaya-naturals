"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SITE, SUBJECTS } from "@/lib/site";
import {
  buildContactMessage,
  buildWhatsAppUrl,
  openWhatsApp,
  validateContactForm,
  type ContactErrors,
} from "@/lib/whatsapp";

type ContactRow = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const CONTACT_ROWS: ContactRow[] = [
  { icon: MailIcon, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: PhoneIcon, label: "Call us", value: SITE.phoneDisplay, href: SITE.phoneHref },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat with our team",
    href: SITE.whatsappHref,
    external: true,
  },
  { icon: MapPinIcon, label: "Visit us", value: SITE.location },
  { icon: ClockIcon, label: "Hours", value: SITE.hours },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validateContactForm({ name, phone, message });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    openWhatsApp(
      buildWhatsAppUrl(buildContactMessage({ name, phone, subject, message })),
    );
    setStatus("Opening WhatsApp to send your message\u2026");
    setName("");
    setPhone("");
    setMessage("");
  }

  return (
    <section id="contact" className="pb-20 md:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="rounded-[48px] border border-timber/50 bg-card p-8 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.1)] md:p-14">
            <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
              <div>
                <span className="eyebrow">Get in Touch</span>
                <h2 className="mt-4 font-heading text-[clamp(26px,3.4vw,36px)] font-semibold text-ink">
                  Let&apos;s talk superfoods
                </h2>
                <p className="mt-4 text-[15.5px] text-ink-muted">
                  Questions, wholesale enquiries, or partnership opportunities &mdash; we&apos;d
                  love to hear from you. We reply within 24 hours.
                </p>
                <ul className="mt-8 flex flex-col gap-4">
                  {CONTACT_ROWS.map(({ icon: Icon, label, value, href, external }) => {
                    const content = (
                      <>
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-stone text-moss">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span>
                          <strong className="block text-[15px] font-bold text-ink">{label}</strong>
                          <span className="text-[14px] text-ink-muted">{value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={label}>
                        {href ? (
                          <a
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener" } : {})}
                            className="flex items-center gap-3.5 rounded-2xl p-1.5 transition-colors hover:bg-stone/60"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3.5 p-1.5">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="contact-name" className="text-[13px] font-bold text-ink">
                      Name
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className="h-12 rounded-2xl border-timber/70 bg-background px-4"
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="text-[13px] font-semibold text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="contact-phone" className="text-[13px] font-bold text-ink">
                      Phone
                    </Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className="h-12 rounded-2xl border-timber/70 bg-background px-4"
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" role="alert" className="text-[13px] font-semibold text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-subject" className="text-[13px] font-bold text-ink">
                    Subject
                  </Label>
                  <Select value={subject} onValueChange={(v) => setSubject(v as string)}>
                    <SelectTrigger
                      id="contact-subject"
                      name="subject"
                      className="h-12 w-full rounded-2xl border-timber/70 bg-background px-4 text-[15px]"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-message" className="text-[13px] font-bold text-ink">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className="min-h-[130px] rounded-3xl border-timber/70 bg-background px-4 py-3.5"
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="text-[13px] font-semibold text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-moss px-8 text-[15px] font-bold text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-moss-deep active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="size-4.5" aria-hidden="true" />
                    Send via WhatsApp
                  </button>
                </div>
                <p aria-live="polite" className="min-h-5 text-center text-[14px] font-semibold text-moss">
                  {status}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
