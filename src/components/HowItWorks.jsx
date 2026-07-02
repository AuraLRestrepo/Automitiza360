import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './HowItWorks.css';

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico gratuito',
    text: 'Analizamos tu operación actual: procesos manuales, herramientas que usas y dónde se pierden leads o tiempo.',
  },
  {
    number: '02',
    title: 'Diseño del sistema',
    text: 'Diseñamos el flujo de automatización e IA a medida, conectando las herramientas que ya usas hoy.',
  },
  {
    number: '03',
    title: 'Implementación y ajuste',
    text: 'Lo ponemos en marcha, lo probamos contigo y lo ajustamos hasta que funcione exactamente como tu negocio lo necesita.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="como-funciona">
      <Container>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De diagnóstico a automatización en 3 pasos"
          description="Un proceso simple y sin fricción, pensado para que empieces a ver resultados rápido."
        />

        <div className="how__grid">
          {STEPS.map((s, i) => (
            <div className="how-step" key={s.number}>
              <span className="how-step__number">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && <span className="how-step__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
