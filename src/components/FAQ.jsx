import { useState } from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './FAQ.css';

const FAQS = [
  {
    q: '¿Necesito conocimientos técnicos para automatizar mi negocio?',
    a: 'No. Nosotros diseñamos, implementamos y mantenemos el sistema. Tú solo defines cómo quieres que funcione tu negocio, nosotros nos encargamos de la parte técnica.',
  },
  {
    q: '¿En qué consiste el diagnóstico gratuito?',
    a: 'Analizamos tus procesos actuales, las herramientas que usas y detectamos cuellos de botella, tareas repetitivas y oportunidades claras de automatización con IA — sin coste ni compromiso.',
  },
  {
    q: '¿Con qué herramientas se integra Automatiza360?',
    a: 'Trabajamos con WhatsApp, email, los CRM más usados, formularios, calendarios y bases de datos. Si usas una herramienta específica, la evaluamos en el diagnóstico.',
  },
  {
    q: '¿Cuánto tiempo tarda en implementarse una automatización?',
    a: 'Depende de la complejidad, pero la mayoría de flujos clave se implementan y ponen en marcha en un plazo de una a tres semanas.',
  },
  {
    q: '¿Esto sirve para mi tipo de negocio?',
    a: 'Trabajamos con pymes, agencias, consultores e infoproductores. Si tienes procesos manuales de captación, ventas o soporte, hay una automatización que puede ayudarte.',
  },
  {
    q: '¿Qué pasa después de la llamada estratégica?',
    a: 'Te presentamos un plan concreto con las automatizaciones recomendadas, el impacto esperado y una propuesta de implementación. Tú decides si seguir adelante.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <Container>
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que necesitas saber" />

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq-item__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-item__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
