import { ExternalLink } from "@/components/ui";
import { APP_LINKS } from "@/constants/links";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__shader-stage" aria-hidden="true">
        <canvas className="hero__shader" data-shader-gradient></canvas>
      </div>
      <div className="hero__shade" aria-hidden="true"></div>

      <div className="hero__shell">
        <main className="hero__content">
          <div className="hero__badge">
            <span className="signal-dot signal-dot--light" aria-hidden="true"></span>
            Agenda e controle
          </div>

          <h1 id="hero-title">
            <span>O seu negócio, finalmente</span>
            <span>no lugar certo.</span>
          </h1>

          <p className="hero__lead">
            Agenda, finanças e operação em um único aplicativo. Para quem leva o próprio negócio a
            sério.
          </p>

          <div className="hero__actions" aria-label="Ações principais">
            <ExternalLink className="pg-button pg-button-primary hero__primary" href={APP_LINKS.app}>
              Começar gratuitamente
            </ExternalLink>
          </div>

          <p className="hero__support">Sem cartão de crédito. Acesso imediato.</p>
        </main>

        <aside className="hero-segments" aria-label="Estabelecimentos que usam o PEGASUS">
          <div className="hero-segments__track">
            <span>Barbearias</span>
            <span>Salões de beleza</span>
            <span>Clínicas de estética</span>
            <span>Studios de beleza</span>
            <span>Design de sobrancelhas</span>
            <span>Manicure e pedicure</span>
            <span>Depilação</span>
            <span>Spa urbano</span>
            <span>Micropigmentação</span>
            <span>Barbearias</span>
            <span>Salões de beleza</span>
            <span>Clínicas de estética</span>
            <span>Studios de beleza</span>
            <span>Design de sobrancelhas</span>
            <span>Manicure e pedicure</span>
            <span>Depilação</span>
            <span>Spa urbano</span>
            <span>Micropigmentação</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
