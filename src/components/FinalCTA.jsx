import Button from './ui/Button';
import Container from './ui/Container';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta" id="reservar">
      <Container>
        <div className="final-cta__box">
          <span className="eyebrow">Diagnóstico gratuito</span>
          <h2>
            Descubre cuánto tiempo y dinero está perdiendo tu negocio en
            tareas manuales
          </h2>
          <p>
            Reserva una llamada estratégica gratuita de 30 minutos. Analizamos
            tu operación y te decimos exactamente qué automatizar primero —
            sin compromiso.
          </p>
          <Button href="#" variant="primary" size="lg">
            Reserva tu llamada gratuita →
          </Button>
          <span className="final-cta__note">
            Plazas limitadas cada semana · Respuesta en menos de 24h
          </span>
        </div>
      </Container>
    </section>
  );
}
