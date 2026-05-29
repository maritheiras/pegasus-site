import { siteConfig } from "@/config/site";

export const APP_LINKS = {
  app: siteConfig.appUrl,
  supportEmail: `mailto:${siteConfig.supportEmail}`,
  specialistEmail: `mailto:${siteConfig.supportEmail}?subject=Falar%20com%20especialista%20Pegasus`,
  privacyEmail: `mailto:${siteConfig.supportEmail}?subject=Privacidade%20Pegasus`,
} as const;
