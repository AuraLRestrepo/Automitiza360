import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import './ProblemSection.css';

const PROBLEMS = [
  {
    icon: '⏳',
    title: 'Respondes tarde y pierdes clientes',
    text: 'Cada minuto que tardas en contestar un lead reduce tus posibilidades de cerrarlo. Sin un sistema, la respuesta depende de quién esté disponible.',
  },
  {
    icon: '🧾',
    title: 'Tareas repetitivas te quitan horas',
    text: 'Presupuestos, recordatorios, altas en el CRM, mensajes de seguimiento... procesos manuales que consumen tiempo que deberías dedicar a vender.',
  },
  {
    icon: '📉',
    title: 'Seguimiento comercial inconsistente',
    text: 'Sin un proceso automatizado, muchos leads se quedan sin seguimiento y se enfrían antes de convertirse en clientes.',
  },
  {
    icon: '🧩',
    title: 'Herramientas que no se hablan entre sí',
    text: 'WhatsApp, email, CRM y calendario funcionan por separado, obligándote a mover información manualmente entre sistemas.',
  },
];

export default function ProblemSection() {
  return (
    <section className="problems">
      <Container>
        <SectionHeading
          eyebrow="El problema"
          title="Tu negocio crece, pero tus procesos siguen siendo manuales"
          description="Estos son los cuellos de botella más comunes que vemos en pymes, agencias e infoproductores antes de automatizar."
        />

        <div className="problems__grid">
          {PROBLEMS.map((p) => (
            <div className="problem-card" key={p.title}>
              <span className="problem-card__icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
