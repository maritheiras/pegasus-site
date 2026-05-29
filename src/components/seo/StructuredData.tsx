import { absoluteUrl, siteConfig } from "@/config/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/assets/pegasus-logo-black-full.png"),
        email: siteConfig.supportEmail,
        sameAs: [siteConfig.social.instagram, siteConfig.social.x, siteConfig.social.youtube],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.supportEmail,
          contactType: "customer support",
          availableLanguage: ["pt-BR"],
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: siteConfig.name,
        inLanguage: "pt-BR",
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": absoluteUrl("/#software"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: "pt-BR",
        description: siteConfig.description,
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
