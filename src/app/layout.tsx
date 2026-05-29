import type { Metadata, Viewport } from "next";

import { StructuredData } from "@/components/seo/StructuredData";
import { absoluteUrl, siteConfig } from "@/config/site";
import "@/styles/tokens.css";
import "@/styles/landing.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "Pegasus - Aplicativo de agenda e financeiro para beleza",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: "Pegasus - Aplicativo para salões, barbearias e estúdios",
    description: siteConfig.socialDescription,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pegasus, aplicativo de agenda, financeiro e operação para negócios de beleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pegasusapp_",
    title: "Pegasus - Aplicativo para negócios de beleza",
    description:
      "Agendamento por link, financeiro e operação em um único aplicativo para salões, barbearias e estúdios.",
    images: [
      {
        url: "/assets/og-image.png",
        alt: "Pegasus, aplicativo de agenda, financeiro e operação para negócios de beleza",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
