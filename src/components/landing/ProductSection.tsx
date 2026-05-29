import type { CSSProperties } from "react";

export function ProductSection() {
  return (
    <section className="product-section" id="produto" aria-labelledby="product-title">
          <div className="pg-container">
            <div className="product-section__intro">
              <div className="product-section__headline">
                <span className="product-kicker">
                  <span className="signal-dot signal-dot--sand" aria-hidden="true"></span>
                  Controle operacional
                </span>
                <h2 id="product-title">
                  <span>A rotina do seu negócio</span>
                  <span>organizada no celular.</span>
                </h2>
              </div>
    
              <div className="product-section__features">
                <article>
                  <span>01</span>
                  <strong>Menos conversa antes do horário</strong>
                  <p>O cliente segue um fluxo claro e sua equipe deixa de confirmar tudo manualmente.</p>
                </article>
                <article>
                  <span>02</span>
                  <strong>Agenda mais previsível</strong>
                  <p>Horários, equipe e serviços ficam conectados antes do dia virar improviso.</p>
                </article>
                <article>
                  <span>03</span>
                  <strong>Caixa sem adivinhação</strong>
                  <p>Cada atendimento ajuda a enxergar receita, comissões e prioridades da operação.</p>
                </article>
              </div>
            </div>
    
            <div className="product-showcase">
              <aside className="product-showcase__rail">
                <div>
                  <span className="product-showcase__label">Aplicativo PEGASUS</span>
                  <h3>Controle a operação sem depender da memória.</h3>
                  <p>
                    Do link de agendamento ao fechamento do caixa, o Pegasus conecta serviços, equipe,
                    horários e finanças para que cada atendimento avance com menos mensagens, menos
                    retrabalho e mais clareza.
                  </p>
                </div>
    
                <a className="product-showcase__button" href="https://pegasusapp.com.br">Ver o app em ação</a>
    
                <div className="product-flow" aria-label="Fluxo do produto" data-product-flow>
                  <button className="product-flow__item is-active" type="button" data-product-step="0" aria-current="step">
                    <span>01</span>
                    <div>
                      <strong>Agendamento online</strong>
                      <small>Receba horários marcados pelo link, sem depender de conversa manual.</small>
                      <i className="product-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="product-flow__item" type="button" data-product-step="1">
                    <span>02</span>
                    <div>
                      <strong>Serviços cadastrados</strong>
                      <small>Preço, duração e comissão entram certos em cada novo agendamento.</small>
                      <i className="product-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="product-flow__item" type="button" data-product-step="2">
                    <span>03</span>
                    <div>
                      <strong>Link de agendamento</strong>
                      <small>Compartilhe uma página pública para o cliente marcar sem baixar app.</small>
                      <i className="product-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                  <button className="product-flow__item" type="button" data-product-step="3">
                    <span>04</span>
                    <div>
                      <strong>Financeiro no app</strong>
                      <small>Atendimentos viram caixa, comissão e fechamento com menos retrabalho.</small>
                      <i className="product-flow__progress" aria-hidden="true"></i>
                    </div>
                  </button>
                </div>
              </aside>
    
              <div className="product-showcase__visual product-showcase__visual--booking" aria-label="Prévia da interface do PEGASUS">
                <div className="product-dashboard product-dashboard--booking" data-product-preview aria-live="polite">
                  <div className="product-dashboard__topbar">
                    <div>
                      <span></span>
                      <strong>Pegasus</strong>
                    </div>
                    <small>Agendamento</small>
                  </div>
    
                  <div className="mobile-app-screen mobile-app-screen--booking">
                    <section className="mobile-app-hero">
                      <span>Agendamento online</span>
                      <strong>pegasus.app/marinasalao</strong>
                      <small>link público para marcar horário sem baixar aplicativo</small>
                    </section>
    
                    <section className="mobile-link-card">
                      <span>Fluxo do cliente</span>
                      <strong>Escolher serviço → profissional → horário → confirmar</strong>
                      <em>Copiar link</em>
                    </section>
    
                    <div className="mobile-action-row" aria-label="Etapas do agendamento por link">
                      <span>Serviço</span>
                      <span>Horário</span>
                      <span>Confirmar</span>
                    </div>
    
                    <div className="mobile-agenda-list">
                      <article className="mobile-appointment is-confirmed">
                        <time>10:00</time>
                        <div>
                          <strong>Corte + barba</strong>
                          <small>Rafael disponível</small>
                        </div>
                        <em>R$ 80</em>
                      </article>
                      <article className="mobile-appointment">
                        <time>14:30</time>
                        <div>
                          <strong>Design de sobrancelhas</strong>
                          <small>Marina disponível</small>
                        </div>
                        <em>R$ 55</em>
                      </article>
                    </div>
    
                    <section className="mobile-callout">
                      <span>Diferencial principal</span>
                      <strong>O cliente agenda pelo navegador. Não precisa baixar app, criar conta ou chamar no WhatsApp.</strong>
                    </section>
                  </div>
                </div>
              </div>
            </div>
    
            <div hidden data-product-template="1">
              <div className="product-dashboard__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Serviços</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--services">
                <section className="mobile-app-hero">
                  <span>Catálogo</span>
                  <strong>Serviços cadastrados</strong>
                  <small>valores, duração e comissão usados automaticamente no agendamento</small>
                </section>
    
                <div className="mobile-service-list">
                  <article>
                    <div>
                      <strong>Corte + barba</strong>
                      <small>45 min · Rafael e Diego</small>
                    </div>
                    <em>R$ 80</em>
                  </article>
                  <article>
                    <div>
                      <strong>Coloração</strong>
                      <small>2h30 · Camila</small>
                    </div>
                    <em>R$ 180</em>
                  </article>
                  <article>
                    <div>
                      <strong>Manicure</strong>
                      <small>50 min · Ana</small>
                    </div>
                    <em>R$ 45</em>
                  </article>
                </div>
    
                <section className="mobile-callout">
                  <span>Sem retrabalho</span>
                  <strong>Quando o cliente agenda pelo link, o aplicativo já calcula tempo, preço e profissional disponível.</strong>
                </section>
              </div>
            </div>
    
            <div hidden data-product-template="2">
              <div className="product-dashboard__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Equipe</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--team">
                <section className="mobile-app-hero">
                  <span>Funcionários</span>
                  <strong><span className="count-up" data-count-to="5">0</span> profissionais ativos</strong>
                  <small>cada pessoa com agenda, serviços e horários próprios</small>
                </section>
    
                <div className="mobile-staff-list">
                  <article>
                    <span>RM</span>
                    <div>
                      <strong>Rafael Martins</strong>
                      <small>Corte, barba e acabamento</small>
                    </div>
                    <em>09h-18h</em>
                  </article>
                  <article>
                    <span>CR</span>
                    <div>
                      <strong>Camila Rocha</strong>
                      <small>Coloração, escova e tratamento</small>
                    </div>
                    <em>10h-19h</em>
                  </article>
                  <article>
                    <span>MA</span>
                    <div>
                      <strong>Marina Alves</strong>
                      <small>Sobrancelhas e micropigmentação</small>
                    </div>
                    <em>ativo</em>
                  </article>
                </div>
    
                <section className="mobile-callout">
                  <span>Disponibilidade real</span>
                  <strong>O link só mostra horários possíveis para o serviço e para o profissional escolhido.</strong>
                </section>
              </div>
            </div>
    
            <div hidden data-product-template="3">
              <div className="product-dashboard__topbar">
                <div>
                  <span></span>
                  <strong>Pegasus</strong>
                </div>
                <small>Financeiro</small>
              </div>
    
              <div className="mobile-app-screen mobile-app-screen--finance">
                <section className="mobile-app-hero">
                  <span>Caixa de hoje</span>
                  <strong><span className="count-up" data-count-to="1860" data-count-prefix="R$ " data-count-format="pt-BR">R$ 0</span></strong>
                  <small>serviços, produtos e comissões já calculados</small>
                </section>
    
                <div className="mobile-money-grid">
                  <article>
                    <span>Recebido</span>
                    <strong>R$ 1.420</strong>
                  </article>
                  <article>
                    <span>A receber</span>
                    <strong>R$ 440</strong>
                  </article>
                  <article>
                    <span>Comissões</span>
                    <strong>R$ 312</strong>
                  </article>
                </div>
    
                <section className="mobile-finance-list">
                  <div>
                    <span>Serviços</span>
                    <em>76%</em>
                    <i style={{ "--size": "76%" } as CSSProperties}></i>
                  </div>
                  <div>
                    <span>Produtos</span>
                    <em>18%</em>
                    <i style={{ "--size": "18%" } as CSSProperties}></i>
                  </div>
                  <div>
                    <span>Despesas</span>
                    <em>6%</em>
                    <i style={{ "--size": "6%" } as CSSProperties}></i>
                  </div>
                </section>
    
                <section className="mobile-callout">
                  <span>Fechamento</span>
                  <strong>Relatório pronto para conferir caixa e repasses no fim do dia.</strong>
                </section>
              </div>
            </div>
          </div>
        </section>
  );
}


