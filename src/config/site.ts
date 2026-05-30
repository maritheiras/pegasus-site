import { SOCIAL_LINKS } from "@/constants/social";

export const siteConfig = {
  name: "Pegasus",
  domain: "https://pegasus-site.netlify.app",
  appUrl: "https://pegasusapp.com.br",
  supportEmail: "suporte@pegasusapp.com.br",
  description:
    "Aplicativo de agendamento, financeiro e operação para salões, barbearias e estúdios de beleza. Clientes agendam por link, sem baixar app.",
  socialDescription:
    "Agenda, finanças e operação em um único aplicativo para negócios de beleza. Envie um link e deixe o cliente agendar sem baixar app.",
  social: {
    instagram: SOCIAL_LINKS.instagram.href,
    x: SOCIAL_LINKS.x.href,
    youtube: SOCIAL_LINKS.youtube.href,
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}
