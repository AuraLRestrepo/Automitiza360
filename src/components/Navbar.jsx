import { useState } from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos-de-uso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <a href="#top" className="navbar__logo">
          Automatiza<span className="text-gradient">360</span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#reservar" variant="primary" size="md" className="navbar__cta-mobile">
            Reserva una llamada
          </Button>
        </nav>

        <div className="navbar__actions">
          <Button href="#reservar" variant="primary" size="md" className="navbar__cta-desktop">
            Reserva una llamada
          </Button>
          <button
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
}
