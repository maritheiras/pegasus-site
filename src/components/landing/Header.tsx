export function Header() {
  return (
    <header className="site-header" aria-label="Navegação principal">
          <div className="site-header__left">
            <a className="site-header__brand" href="#" aria-label="Pegasus">
              <img
                className="site-header__brand-base site-header__brand-base--dark"
                src="/assets/pegasus-logo-static.png"
                width="1795"
                height="319"
                alt="Pegasus"
                decoding="async"
              />
              <img
                className="site-header__brand-base site-header__brand-base--light"
                src="/assets/pegasus-logo-black.png"
                width="1795"
                height="319"
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <img
                className="site-header__brand-wing site-header__brand-wing--dark"
                src="/assets/pegasus-logo-wing.png"
                width="1795"
                height="319"
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <img
                className="site-header__brand-wing site-header__brand-wing--light"
                src="/assets/pegasus-logo-wing-black.png"
                width="1795"
                height="319"
                alt=""
                aria-hidden="true"
                decoding="async"
              />
            </a>
    
            <nav className="site-header__nav" aria-label="Seções do site">
              <a href="#produto">Produto</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#sobre">Sobre</a>
            </nav>
          </div>
    
          <div className="site-header__actions">
            <a className="site-header__login" href="https://pegasusapp.com.br">Entrar</a>
            <a className="site-header__cta" href="https://pegasusapp.com.br">Começar agora</a>
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
              <a href="#produto">Produto</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#sobre">Sobre</a>
            </nav>
    
            <div className="mobile-menu__actions">
              <span>Acesso</span>
              <a className="mobile-menu__login" href="https://pegasusapp.com.br">Entrar</a>
              <a className="mobile-menu__cta" href="https://pegasusapp.com.br">Começar agora</a>
            </div>
          </div>
        </header>
  );
}

