import Image from "next/image";

import { ExternalLink } from "@/components/ui";
import { APP_LINKS } from "@/constants/links";
import { NAV_LINKS } from "@/constants/routes";

export function Header() {
  return (
    <header className="site-header" aria-label="Navegação principal">
      <div className="site-header__left">
        <a className="site-header__brand" href="#" aria-label="Pegasus">
          <Image
            className="site-header__brand-base site-header__brand-base--dark"
            src="/assets/pegasus-logo-static.png"
            width={1795}
            height={319}
            alt="Pegasus"
            priority
          />
          <Image
            className="site-header__brand-base site-header__brand-base--light"
            src="/assets/pegasus-logo-black.png"
            width={1795}
            height={319}
            alt=""
            aria-hidden="true"
          />
          <Image
            className="site-header__brand-wing site-header__brand-wing--dark"
            src="/assets/pegasus-logo-wing.png"
            width={1795}
            height={319}
            alt=""
            aria-hidden="true"
            priority
          />
          <Image
            className="site-header__brand-wing site-header__brand-wing--light"
            src="/assets/pegasus-logo-wing-black.png"
            width={1795}
            height={319}
            alt=""
            aria-hidden="true"
          />
        </a>

        <nav className="site-header__nav" aria-label="Seções do site">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="site-header__actions">
        <ExternalLink className="site-header__login" href={APP_LINKS.app}>
          Entrar
        </ExternalLink>
        <ExternalLink className="site-header__cta" href={APP_LINKS.app}>
          Começar agora
        </ExternalLink>
      </div>

      <button
        className="site-header__menu-button"
        type="button"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="mobile-menu" id="mobile-menu">
        <nav className="mobile-menu__nav" aria-label="Menu mobile">
          <span>Produto</span>
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__actions">
          <span>Acesso</span>
          <ExternalLink className="mobile-menu__login" href={APP_LINKS.app}>
            Entrar
          </ExternalLink>
          <ExternalLink className="mobile-menu__cta" href={APP_LINKS.app}>
            Começar agora
          </ExternalLink>
        </div>
      </div>
    </header>
  );
}
