import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} - ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: "Certified organic superfoods, harvested fresh from Indian farms. Launching soon.",
    type: "website",
    url: SITE.url,
    images: [{ url: "/images/hero-banner.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFCF8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="grain min-h-full">
        {children}
        <Toaster position="bottom-center" closeButton />
      </body>
    </html>
  );
}
