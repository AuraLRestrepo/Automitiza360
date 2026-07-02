import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './BenefitsSection.css';

const BENEFITS = [
  {
    icon: '⚡',
    title: 'Respuesta inmediata a cada cliente',
    text: 'Tus leads reciben respuesta en segundos, no en horas, sin que nadie tenga que estar pendiente del teléfono.',
  },
  {
    icon: '🎯',
    title: 'Seguimiento comercial que no se olvida',
    text: 'Cada lead entra en un flujo automático de seguimiento hasta que agenda, compra o descarta — sin que se te escape ninguno.',
  },
  {
    icon: '🤝',
    title: 'Captación y venta sin fricción',
    text: 'Formularios, WhatsApp y email trabajan juntos para captar, calificar y avanzar a tus clientes por el embudo.',
  },
  {
    icon: '🔗',
    title: 'Tus herramientas, conectadas',
    text: 'CRM, calendario, email y bases de datos sincronizados entre sí, sin copiar y pegar información a mano.',
  },
  {
    icon: '🧠',
    title: 'IA que atiende y clasifica por ti',
    text: 'Agentes de IA responden dudas frecuentes, clasifican leads por intención y priorizan a quién debe llamar tu equipo.',
  },
  {
    icon: '📈',
    title: 'Más eficiencia sin ampliar plantilla',
    text: 'Escala tu operación comercial y de soporte sin sumar cabezas — la automatización asume el trabajo repetitivo.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <Container>
        <SectionHeading
          eyebrow="La solución"
          title="Todo lo que gana tu negocio al automatizar"
          description="Automatiza360 diseña e implementa sistemas a medida que trabajan por ti, las 24 horas del día."
        />

        <div className="benefits__grid">
          {BENEFITS.map((b) => (
            <div className="benefit-card" key={b.title}>
              <span className="benefit-card__icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
