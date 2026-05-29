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
    instagram: "https://www.instagram.com/pegasus.app/",
    x: "https://x.com/pegasusapp_",
    youtube: "https://www.youtube.com/@Pegasus_app",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}
