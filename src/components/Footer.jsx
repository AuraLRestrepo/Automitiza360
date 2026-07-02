import Container from './ui/Container';
import './Footer.css';

const COLUMNS = [
  {
    title: 'Producto',
    links: ['Cómo funciona', 'Casos de uso', 'Testimonios', 'FAQ'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Diagnóstico gratuito', 'Contacto'],
  },
  {
    title: 'Legal',
    links: ['Privacidad', 'Términos de uso', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              Automatiza<span className="text-gradient">360</span>
            </span>
            <p>
              Automatizaciones e inteligencia artificial para que tu negocio
              venda más y dependa menos de tareas manuales.
            </p>
          </div>

          <div className="footer__columns">
            {COLUMNS.map((col) => (
              <div className="footer__column" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Automatiza360. Todos los derechos reservados.</span>
        </div>
      </Container>
    </footer>
  );
}
