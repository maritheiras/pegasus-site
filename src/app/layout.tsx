import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/config/site";
import { SOCIAL_LINKS } from "@/constants/social";
import { createMetadata } from "@/lib/metadata";
import "@/styles/tokens.css";
import "@/styles/landing.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href={siteConfig.appUrl} />
        <link rel="dns-prefetch" href={SOCIAL_LINKS.instagram.href} />
        <link rel="dns-prefetch" href={SOCIAL_LINKS.x.href} />
        <link rel="dns-prefetch" href={SOCIAL_LINKS.youtube.href} />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
