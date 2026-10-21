export const SITE = {
  name: "Navodaya Naturals",
  tagline: "Pure Superfoods, Farmer Direct",
  description:
    "Experience the raw vitality of nature. Navodaya Naturals brings certified organic superfoods harvested fresh from Indian farms, straight to your doorstep.",
  url: "https://navodayanaturals.com",
  email: "pratyush@navodayanaturals.com",
  phoneDisplay: "+91 82650 98123",
  phoneHref: "tel:+918265098123",
  whatsappHref: "https://wa.me/918265098123",
  whatsappNumber: "918265098123",
  location: "Yavatmal, India",
  hours: "Mon–Sat · 9 AM – 7 PM IST",
} as const;

export const NAV_LINKS = [
  { href: "#collection", label: "Collection" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#story", label: "Our Story" },
  { href: "#contact", label: "Contact" },
] as const;

export const SUBJECTS = [
  "General enquiry",
  "Bulk / wholesale order",
  "Product question",
  "Partnership",
  "Other",
] as const;
