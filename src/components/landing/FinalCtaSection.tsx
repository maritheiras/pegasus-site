export function FinalCtaSection() {
  return (
    <section className="final-cta-section" id="comecar" aria-labelledby="final-cta-title">
          <div className="pg-container final-cta-section__inner">
            <div className="final-cta-section__headline">
              <span className="spotlight-kicker">
                <span className="signal-dot signal-dot--sand" aria-hidden="true"></span>
                Próximo passo
              </span>
              <h2 id="final-cta-title">
                <span>Pronto para operar</span>
                <span>sem limite.</span>
              </h2>
            </div>
    
            <div className="final-cta-section__aside">
              <p>
                Você chegou até aqui porque sabe que o seu negócio pode funcionar melhor.
                O Pegasus é o próximo passo. Simples assim.
              </p>
    
              <div className="final-cta-section__actions" aria-label="Ações finais">
                <a className="final-cta-section__primary" href="https://pegasusapp.com.br">Criar minha conta</a>
              </div>
            </div>
          </div>
    
          <div className="final-cta-section__effect" aria-hidden="true">
            <span className="final-cta-section__wordmark">
              <span>PEG</span><span className="final-cta-section__wordmark-a"></span><span>SUS</span>
            </span>
          </div>
        </section>
  );
}

