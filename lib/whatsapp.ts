import { SITE } from "@/lib/site";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone).replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildNotifyMessage(email: string): string {
  return `Hello Navodaya Naturals!\n\nPlease add me to the launch list.\nEmail: ${email.trim()}`;
}

export function buildContactMessage(input: {
  name: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  return [
    "Hello Navodaya Naturals!",
    "",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim() || "-"}`,
    `Subject: ${input.subject.trim()}`,
    "",
    input.message.trim(),
  ].join("\n");
}

export type ContactErrors = {
  name?: string;
  phone?: string;
  message?: string;
};

export function validateContactForm(input: {
  name: string;
  phone: string;
  message: string;
}): ContactErrors {
  const errors: ContactErrors = {};
  if (!input.name.trim()) errors.name = "Please enter your name.";
  if (!input.message.trim()) errors.message = "Please enter a message.";
  if (input.phone.trim() && !isValidPhone(input.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  return errors;
}

/**
 * Opens a WhatsApp thread in a new tab from a user gesture.
 * Uses a temporary anchor so popup blockers allow it; `window.open` cannot be
 * used reliably because `noopener` makes it return null even on success.
 */
export function openWhatsApp(url: string): void {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
