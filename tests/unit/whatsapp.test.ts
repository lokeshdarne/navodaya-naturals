import { describe, expect, it } from "vitest";

import {
  buildContactMessage,
  buildNotifyMessage,
  buildWhatsAppUrl,
  isValidEmail,
  isValidPhone,
  normalizePhone,
  validateContactForm,
} from "@/lib/whatsapp";

describe("isValidEmail", () => {
  it("accepts common email formats", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("  first.last+tag@sub.domain.co.in ")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("missing@tld")).toBe(false);
    expect(isValidEmail("spaces in@email.com")).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts 10-15 digit numbers with optional +", () => {
    expect(isValidPhone("+91 82650 98123")).toBe(true);
    expect(isValidPhone("8265098123")).toBe(true);
    expect(isValidPhone("+1 555 123 4567")).toBe(true);
  });

  it("rejects short, long, or non-numeric values", () => {
    expect(isValidPhone("")).toBe(false);
    expect(isValidPhone("12345")).toBe(false);
    expect(isValidPhone("not a phone")).toBe(false);
    expect(isValidPhone("1234567890123456")).toBe(false);
  });

  it("normalizePhone strips non-digit characters except +", () => {
    expect(normalizePhone("+91-82650 98123")).toBe("+918265098123");
  });
});

describe("message builders", () => {
  it("buildWhatsAppUrl encodes the text parameter", () => {
    const url = buildWhatsAppUrl("Hello there");
    expect(url).toBe("https://wa.me/918265098123?text=Hello%20there");
  });

  it("buildNotifyMessage includes the email", () => {
    const msg = buildNotifyMessage("a@b.com ");
    expect(msg).toContain("Please add me to the launch list.");
    expect(msg).toContain("Email: a@b.com");
  });

  it("buildContactMessage formats all fields and trims input", () => {
    const msg = buildContactMessage({
      name: "  Pratyush  ",
      phone: "",
      subject: "Partnership",
      message: "  Hello!  ",
    });
    expect(msg).toContain("Name: Pratyush");
    expect(msg).toContain("Phone: -");
    expect(msg).toContain("Subject: Partnership");
    expect(msg).toContain("Hello!");
  });
});

describe("validateContactForm", () => {
  it("returns no errors for a valid form", () => {
    expect(
      validateContactForm({ name: "A", phone: "+91 99999 99999", message: "Hi" }),
    ).toEqual({});
  });

  it("requires name and message", () => {
    const errors = validateContactForm({ name: "  ", phone: "", message: "" });
    expect(errors.name).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it("validates phone only when provided", () => {
    expect(validateContactForm({ name: "A", phone: "", message: "Hi" })).toEqual({});
    const withBadPhone = validateContactForm({ name: "A", phone: "12", message: "Hi" });
    expect(withBadPhone.phone).toBeTruthy();
  });
});
