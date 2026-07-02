import Button from './ui/Button';
import Container from './ui/Container';
import './Hero.css';

const FLOW_NODES = [
  { icon: '💬', label: 'WhatsApp' },
  { icon: '📩', label: 'Email' },
  { icon: '📅', label: 'Calendario' },
  { icon: '🗂️', label: 'CRM' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <Container className="hero__inner">
        <span className="eyebrow">Automatización + IA para negocios</span>

        <h1 className="hero__title">
          Vende más, responde más rápido y deja de perder tiempo en{' '}
          <span className="text-gradient">tareas repetitivas</span>
        </h1>

        <p className="hero__subtitle">
          Automatiza360 conecta tu WhatsApp, email, CRM y calendario con
          agentes de IA que captan, califican y dan seguimiento a tus clientes
          por ti — sin contratar más personal.
        </p>

        <div className="hero__cta-group">
          <Button href="#reservar" variant="primary" size="lg">
            Reserva una llamada →
          </Button>
          <Button href="#como-funciona" variant="secondary" size="lg">
            Ver cómo funciona
          </Button>
        </div>

        <p className="hero__microcopy">
          Diagnóstico gratuito · Sin compromiso · Respuesta en menos de 24h
        </p>

        <div className="hero__visual">
          <div className="flow-card">
            <div className="flow-card__header">
              <span className="flow-card__dot flow-card__dot--red" />
              <span className="flow-card__dot flow-card__dot--yellow" />
              <span className="flow-card__dot flow-card__dot--green" />
              <span className="flow-card__title">Flujo de automatización activo</span>
            </div>

            <div className="flow-card__body">
              <div className="flow-nodes">
                {FLOW_NODES.map((node) => (
                  <div className="flow-node" key={node.label}>
                    <span className="flow-node__icon">{node.icon}</span>
                    <span>{node.label}</span>
                  </div>
                ))}
              </div>

              <div className="flow-arrow" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="flow-result">
                <div className="flow-result__row">
                  <span className="flow-result__label">Lead clasificado</span>
                  <span className="flow-result__badge flow-result__badge--hot">Alta prioridad</span>
                </div>
                <div className="flow-result__row">
                  <span className="flow-result__label">Respuesta enviada</span>
                  <span className="flow-result__badge flow-result__badge--ok">Automático · 8s</span>
                </div>
                <div className="flow-result__row">
                  <span className="flow-result__label">Reunión agendada</span>
                  <span className="flow-result__badge flow-result__badge--ok">Confirmada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
