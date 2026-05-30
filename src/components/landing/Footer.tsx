import Image from "next/image";

import { ExternalLink } from "@/components/ui";
import { APP_LINKS } from "@/constants/links";
import { NAV_LINKS } from "@/constants/routes";
import { SOCIAL_LINKS } from "@/constants/social";

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé do site">
      <div className="pg-container site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src="/assets/pegasus-logo-black-full.png"
            width={1862}
            height={346}
            loading="lazy"
            alt="Pegasus"
          />
          <p>
            Agenda, finanças e operação em um único aplicativo para quem leva beleza e autocuidado a
            sério.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Links do rodapé">
          <div>
            <span>Produto</span>
            {NAV_LINKS.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <span>Negócios</span>
            <ExternalLink href={APP_LINKS.app}>Começar agora</ExternalLink>
            <ExternalLink href={APP_LINKS.app}>Entrar</ExternalLink>
            <ExternalLink href={APP_LINKS.app}>Criar conta</ExternalLink>
          </div>
          <div>
            <span>Contato</span>
            <a href={APP_LINKS.supportEmail}>suporte@pegasusapp.com.br</a>
            <a href={APP_LINKS.specialistEmail}>Falar com especialista</a>
            <a href={APP_LINKS.privacyEmail}>Privacidade</a>
          </div>
        </nav>

        <div className="site-footer__bottom">
          <span>© 2026 Pegasus. Todos os direitos reservados.</span>
          <div className="site-footer__social" aria-label="Redes sociais">
            <ExternalLink
              ariaLabel={SOCIAL_LINKS.instagram.label}
              className="site-footer__social-link site-footer__social-link--instagram"
              href={SOCIAL_LINKS.instagram.href}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="16.8" cy="7.2" r="0.9" />
              </svg>
            </ExternalLink>
            <ExternalLink
              ariaLabel={SOCIAL_LINKS.x.label}
              className="site-footer__social-link site-footer__social-link--x"
              href={SOCIAL_LINKS.x.href}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
              </svg>
            </ExternalLink>
            <ExternalLink
              ariaLabel={SOCIAL_LINKS.youtube.label}
              className="site-footer__social-link site-footer__social-link--youtube"
              href={SOCIAL_LINKS.youtube.href}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.8" y="6.8" width="16.4" height="10.4" rx="3" />
                <path d="M10.2 9.4v5.2l4.8-2.6-4.8-2.6z" />
              </svg>
            </ExternalLink>
          </div>
          <span>Feito para salões, barbearias e estúdios de beleza.</span>
        </div>
      </div>
    </footer>
  );
}
