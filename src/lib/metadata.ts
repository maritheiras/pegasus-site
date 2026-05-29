import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  imagePath?: string;
  imageAlt?: string;
}

const defaultTitle = "Aplicativo de agenda e financeiro para beleza";
const defaultImagePath = "/assets/og-image.png";
const defaultImageAlt =
  "Pegasus, aplicativo de agenda, financeiro e operação para negócios de beleza";

export function createMetadata({
  title = defaultTitle,
  description = siteConfig.description,
  path = "/",
  imagePath = defaultImagePath,
  imageAlt = defaultImageAlt,
}: CreateMetadataOptions = {}): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);

  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: `${siteConfig.name} - ${title}`,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: `${siteConfig.name} - Aplicativo para salões, barbearias e estúdios`,
      description: siteConfig.socialDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pegasusapp_",
      creator: "@pegasusapp_",
      title: `${siteConfig.name} - Aplicativo para negócios de beleza`,
      description:
        "Agendamento por link, financeiro e operação em um único aplicativo para salões, barbearias e estúdios.",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
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
}
