export function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé do site">
          <div className="pg-container site-footer__inner">
            <div className="site-footer__brand">
              <img
                src="/assets/pegasus-logo-black-full.png"
                width="1862"
                height="346"
                loading="lazy"
                decoding="async"
                alt="Pegasus"
              />
              <p>
                Agenda, finanças e operação em um único aplicativo para quem leva beleza
                e autocuidado a sério.
              </p>
            </div>
    
            <nav className="site-footer__nav" aria-label="Links do rodapé">
              <div>
                <span>Produto</span>
                <a href="#produto">Visão geral</a>
                <a href="#beneficios">Benefícios</a>
                <a href="#sobre">Sobre</a>
              </div>
              <div>
                <span>Negócios</span>
                <a href="https://pegasusapp.com.br">Começar agora</a>
                <a href="https://pegasusapp.com.br">Entrar</a>
                <a href="https://pegasusapp.com.br">Criar conta</a>
              </div>
              <div>
                <span>Contato</span>
                <a href="mailto:suporte@pegasusapp.com.br">suporte@pegasusapp.com.br</a>
                <a href="mailto:suporte@pegasusapp.com.br?subject=Falar%20com%20especialista%20Pegasus">Falar com especialista</a>
                <a href="mailto:suporte@pegasusapp.com.br?subject=Privacidade%20Pegasus">Privacidade</a>
              </div>
            </nav>
    
            <div className="site-footer__bottom">
              <span>© 2026 Pegasus. Todos os direitos reservados.</span>
              <div className="site-footer__social" aria-label="Redes sociais">
                <a href="https://www.instagram.com/pegasus.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
                    <circle cx="12" cy="12" r="3.6" />
                    <circle cx="16.8" cy="7.2" r="0.9" />
                  </svg>
                </a>
                <a href="https://x.com/pegasusapp_" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Pegasus_app" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.8" y="6.8" width="16.4" height="10.4" rx="3" />
                    <path d="M10.2 9.4v5.2l4.8-2.6-4.8-2.6z" />
                  </svg>
                </a>
              </div>
              <span>Feito para salões, barbearias e estúdios de beleza.</span>
            </div>
          </div>
        </footer>
  );
}

