export function FounderSection() {
  return (
    <section className="spotlight-section" id="sobre" aria-labelledby="spotlight-title">
          <div className="pg-container">
            <div className="spotlight-section__headline">
              <span className="spotlight-kicker">
                <span className="signal-dot signal-dot--sand" aria-hidden="true"></span>
                Palavra do fundador
              </span>
              <h2 id="spotlight-title">
                <span>A visão por trás</span>
                <span>do Pegasus.</span>
              </h2>
            </div>
    
            <article className="spotlight-card">
              <div className="spotlight-card__visual" aria-label="Imagem atmosférica do Pegasus"></div>
    
              <div className="spotlight-card__content">
                <div className="spotlight-card__logo">
                  <img
                    src="/assets/pegasus-logo-black-full.png"
                    width="1862"
                    height="346"
                    loading="lazy"
                    decoding="async"
                    alt="Pegasus"
                  />
                </div>
    
                <h3>Criado para devolver clareza a quem passa o dia cuidando de pessoas.</h3>
    
                <a className="spotlight-card__button" href="https://pegasusapp.com.br">Criar minha conta</a>
    
                <div className="spotlight-person">
                  <div className="spotlight-person__photo" aria-hidden="true">
                    <img
                      src="/assets/founder-danilo-neto.jpg"
                      width="1070"
                      height="1470"
                      loading="lazy"
                      decoding="async"
                      alt="Foto de Danillo Neto, fundador do Pegasus"
                    />
                  </div>
                  <p>
                    <strong>Danillo Neto</strong>
                    <span>Fundador do Pegasus</span>
                  </p>
                </div>
    
                <blockquote>
                  “Eu criei o Pegasus para resolver problemas que existem no dia a dia de barbearias,
                  salões e estúdios de beleza: agenda no bloco de notas, financeiro no caderninho,
                  confirmação manual e decisões tomadas no escuro. O dono do negócio precisa de um
                  aplicativo que organize sua rotina enquanto o profissional foca no atendimento ao cliente.”
                </blockquote>
              </div>
            </article>
          </div>
        </section>
  );
}

