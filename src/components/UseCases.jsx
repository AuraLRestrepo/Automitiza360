import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './UseCases.css';

const USE_CASES = [
  { icon: '🎣', title: 'Captación automática de leads', text: 'Formularios y campañas conectados directamente a tu embudo, sin intervención manual.' },
  { icon: '💬', title: 'Seguimiento por email o WhatsApp', text: 'Secuencias automáticas que mantienen la conversación viva hasta la conversión.' },
  { icon: '📅', title: 'Agendado automático de reuniones', text: 'Tus clientes reservan llamadas directamente en tu calendario, sin ida y vuelta de mensajes.' },
  { icon: '🧠', title: 'Clasificación de leads con IA', text: 'La IA prioriza a quién debe contactar primero tu equipo según intención y urgencia.' },
  { icon: '🤖', title: 'Atención al cliente automatizada', text: 'Agentes de IA responden preguntas frecuentes al instante, 24/7, en tu tono de marca.' },
  { icon: '🧾', title: 'Presupuestos y recordatorios', text: 'Genera y envía presupuestos, y automatiza recordatorios de pago o de citas.' },
  { icon: '🔄', title: 'Sincronización entre herramientas', text: 'CRM, hojas de cálculo y sistemas internos siempre actualizados entre sí, en tiempo real.' },
];

export default function UseCases() {
  return (
    <section className="usecases" id="casos-de-uso">
      <Container>
        <SectionHeading
          eyebrow="Casos de uso"
          title="Automatizaciones que ya están funcionando para negocios como el tuyo"
        />

        <div className="usecases__grid">
          {USE_CASES.map((u) => (
            <div className="usecase-chip" key={u.title}>
              <span className="usecase-chip__icon">{u.icon}</span>
              <div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
