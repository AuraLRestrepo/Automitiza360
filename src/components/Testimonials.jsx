import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: 'Antes tardábamos horas en responder a cada lead. Ahora la primera respuesta es automática y hemos duplicado las reuniones agendadas al mes.',
    name: 'Marta Villalba',
    role: 'Directora comercial, agencia inmobiliaria',
  },
  {
    quote: 'Nos conectaron WhatsApp, el CRM y el calendario en una sola semana. El equipo dejó de perder tiempo copiando datos entre herramientas.',
    name: 'Diego Ferrer',
    role: 'Fundador, consultora de marketing',
  },
  {
    quote: 'El diagnóstico gratuito ya nos abrió los ojos: teníamos tres cuellos de botella que ni sabíamos que existían. La automatización se pagó sola en dos meses.',
    name: 'Laura Peña',
    role: 'CEO, negocio de formación online',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="Negocios que ya dejaron atrás los procesos manuales"
        />

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
