import Container from './ui/Container';
import './LogosStrip.css';

const METRICS = [
  { value: '+120', label: 'negocios automatizados' },
  { value: '35%', label: 'más leads convertidos en clientes' },
  { value: '18h', label: 'ahorradas a la semana, en media' },
  { value: '<1min', label: 'tiempo de primera respuesta al lead' },
];

export default function LogosStrip() {
  return (
    <section className="metrics">
      <Container>
        <p className="metrics__caption">
          Resultados reales de negocios que ya automatizaron su operación
        </p>
        <div className="metrics__grid">
          {METRICS.map((m) => (
            <div className="metrics__item" key={m.label}>
              <span className="metrics__value text-gradient">{m.value}</span>
              <span className="metrics__label">{m.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
