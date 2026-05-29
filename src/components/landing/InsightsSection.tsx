import type { CSSProperties } from "react";

export function InsightsSection() {
  return (
    <section className="insights-section" id="beneficios" aria-labelledby="insights-title">
          <div className="pg-container">
            <div className="insights-section__intro">
              <div className="insights-section__headline">
                <span className="product-kicker">
                  <span className="signal-dot signal-dot--sand" aria-hidden="true"></span>
                  Inteligência operacional
                </span>
                <h2 id="insights-title">
                  <span>Entenda o que funciona</span>
                  <span>antes de perder dinheiro.</span>
                </h2>
              </div>
    
              <div className="insights-section__features">
                <article>
                  <span>01</span>
                  <strong>Onde abrir encaixes</strong>
                  <p>Veja horários com chance real de ocupar antes que eles passem vazios.</p>
                </article>
                <article>
                  <span>02</span>
                  <strong>Quem pode voltar</strong>
                  <p>Reative clientes no momento certo, com o link pronto para agendar.</p>
                </article>
                <article>
                  <span>03</span>
                  <strong>O que dá mais margem</strong>
                  <p>Compare procura, duração e comissão antes de criar promoções.</p>
                </article>
              </div>
            </div>
    
            <div className="insights-showcase">
              <div className="insights-showcase__visual insights-showcase__visual--slots" aria-label="Sugestões inteligentes do Pegasus no aplicativo">
                <div className="insight-preview insight-preview--slots" data-insight-preview aria-live="polite">
                  <div className="insight-preview__topbar">
                    <div>
                      <span></span>
                      <strong>Pegasus</strong>
                    </div>
                    <small>Sugestões</small>
                  </div>
    
                  <div className="mobile-app-screen mobile-app-screen--insight">
                    <section className="mobile-app-hero">
                      <span>Sugestão do dia</span>
                      <strong>Abrir encaixe às 16:00</strong>
                      <small>quinta-feira, Rafael Martins, alta chance de ocupar.</small>
                    </section>
    
                    <div className="mobile-money-grid">
                      <article>
                        <span>Chance</span>
                        <strong><span className="count-up" data-count-to="78" data-count-suffix="%">0%</span></strong>
                      </article>
                      <article>
                        <span>Clientes</span>
                        <strong><span className="count-up" data-count-to="4">0</span></strong>
                      </article>
                      <article>
                        <span>Potencial</span>
                        <strong><span className="count-up" data-count-to="180" data-count-prefix="+R$ ">+R$ 0</span></strong>
                      </article>
                    </div>
    
                    <section className="mobile-finance-list">
                      <div>
                        <span>Quarta</span>
                        <em>52%</em>
                        <i style={{ "--size": "52%" } as CSSProperties}></i>
                      </div>
                      <div>
                        <span>Quinta</span>
                        <em>78%</em>
                        <i style={{ "--size": "78%" } as CSSProperties}></i>
                      </div>
                      <div>
                        <span>Sexta</span>
                        <em>91%</em>
                        <i style={{ "--size": "91%" } as CSSProperties}></i>
                      </div>
                    </section>
    
                    <section className="mobile-callout">
                      <span>Ação sugerida</span>
                      <strong>Enviar link para clientes com histórico recente de corte + barba.</strong>
                    </section>
                  </div>
                </div>
              </div>
    
              <aside className="insights-showcase__rail">
                <div>
                  <span className="product-showcase__label">Visão para crescer</span>
                  <h3>Transforme rotina em próximos passos.</h3>
                  <p>
                    O Pegasus cruza agenda, recorrência, serviços e caixa para sugerir onde abrir horário,
                    quem chamar de volta e quais serviços priorizar.
                  </p>
                </div>
    
                <a className="product-showcase__button" href="https://pegasusapp.com.br">Ver sugestões do app</a>
    
                <div className="insight-flow" aria-label="Fluxo de sugestões inteligentes" data-insight-flow>
                  <button className="insight-flow__item is-active" type="button" data-insight-step="0" aria-current="step">
                    <span>01</span>
                    <div>
                      <strong>Horários com potencial</strong>
                      <small>Veja janelas com chance real de venda antes que o dia passe.</small>
                      <i className="insight-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="insight-flow__item" type="button" data-insight-step="1">
                    <span>02</span>
                    <div>
                      <strong>Retorno de clientes</strong>
                      <small>Envie o link certo para quem já está no momento de voltar.</small>
                      <i className="insight-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="insight-flow__item" type="button" data-insight-step="2">
                    <span>03</span>
                    <div>
                      <strong>Serviços rentáveis</strong>
                      <small>Priorize o que combina procura, margem e tempo de execução.</small>
                      <i className="insight-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="insight-flow__item" type="button" data-insight-step="3">
                    <span>04</span>
                    <div>
                      <strong>Alertas do negócio</strong>
                      <small>Perceba faltas, queda de caixa e agenda desequilibrada cedo.</small>
                      <i className="insight-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                </div>
              </aside>
            </div>
    
            <div hidden data-insight-template="1">
              <div className="insight-preview__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Retorno</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--insight">
                <section className="mobile-app-hero">
                  <span>Cliente pronta para voltar</span>
                  <strong>Marina Alves</strong>
                  <small>37 dias desde o último design de sobrancelhas.</small>
                </section>
    
                <div className="mobile-money-grid">
                  <article>
                    <span>Chance</span>
                    <strong><span className="count-up" data-count-to="82" data-count-suffix="%">0%</span></strong>
                  </article>
                  <article>
                    <span>Ticket</span>
                    <strong>R$ 55</strong>
                  </article>
                  <article>
                    <span>Última visita</span>
                    <strong>37d</strong>
                  </article>
                </div>
    
                <div className="mobile-service-list">
                  <article>
                    <div>
                      <strong>Enviar link de manutenção</strong>
                      <small>serviço e profissional já sugeridos</small>
                    </div>
                    <em>1 toque</em>
                  </article>
                  <article>
                    <div>
                      <strong>Oferecer quinta às 16:00</strong>
                      <small>janela com maior chance de confirmação</small>
                    </div>
                    <em>link</em>
                  </article>
                </div>
    
                <section className="mobile-callout">
                  <span>Sem insistência</span>
                  <strong>O contato nasce de um sinal real de recorrência, não de chute.</strong>
                </section>
              </div>
            </div>
    
            <div hidden data-insight-template="2">
              <div className="insight-preview__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Margem</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--insight">
                <section className="mobile-app-hero">
                  <span>Serviço mais rentável</span>
                  <strong>Corte + barba</strong>
                  <small>alto giro, boa margem e baixa ociosidade na semana.</small>
                </section>
    
                <div className="mobile-money-grid">
                  <article>
                    <span>Margem</span>
                    <strong><span className="count-up" data-count-to="41" data-count-suffix="%">0%</span></strong>
                  </article>
                  <article>
                    <span>Ticket</span>
                    <strong>R$ 80</strong>
                  </article>
                  <article>
                    <span>Tempo</span>
                    <strong>45m</strong>
                  </article>
                </div>
    
                <section className="mobile-finance-list">
                  <div>
                    <span>Procura</span>
                    <em>76%</em>
                    <i style={{ "--size": "76%" } as CSSProperties}></i>
                  </div>
                  <div>
                    <span>Margem</span>
                    <em>41%</em>
                    <i style={{ "--size": "41%" } as CSSProperties}></i>
                  </div>
                  <div>
                    <span>Ociosidade</span>
                    <em>12%</em>
                    <i style={{ "--size": "12%" } as CSSProperties}></i>
                  </div>
                </section>
    
                <section className="mobile-callout">
                  <span>Prioridade</span>
                  <strong>Divulgar esse serviço nos horários de maior procura antes de criar desconto.</strong>
                </section>
              </div>
            </div>
    
            <div hidden data-insight-template="3">
              <div className="insight-preview__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Atualizado agora</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--insight">
                <section className="mobile-app-hero">
                  <span>Alerta de operação</span>
                  <strong>Sexta quase cheia</strong>
                  <small>agenda com alta ocupação e confirmações pendentes.</small>
                </section>
    
                <div className="mobile-money-grid">
                  <article>
                    <span>Ocupação</span>
                    <strong><span className="count-up" data-count-to="91" data-count-suffix="%">0%</span></strong>
                  </article>
                  <article>
                    <span>Pendências</span>
                    <strong><span className="count-up" data-count-to="3">0</span></strong>
                  </article>
                  <article>
                    <span>Risco</span>
                    <strong><span className="count-up" data-count-to="18" data-count-suffix="%">0%</span></strong>
                  </article>
                </div>
    
                <div className="mobile-insight-list">
                  <article>
                    <span>Equipe</span>
                    <strong>Camila com 6 horários seguidos.</strong>
                  </article>
                  <article>
                    <span>Agenda</span>
                    <strong>3 confirmações pendentes.</strong>
                  </article>
                </div>
    
                <section className="mobile-callout">
                  <span>Próximo passo</span>
                  <strong>Confirmar pendências e proteger os horários mais disputados.</strong>
                </section>
              </div>
            </div>
          </div>
        </section>
  );
}


