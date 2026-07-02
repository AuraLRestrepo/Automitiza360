# Automatiza360 — Landing Page

Landing page premium y orientada a conversión para **Automatiza360**, una empresa que ayuda a pymes, agencias, consultores e infoproductores a vender más y ahorrar tiempo mediante automatizaciones e inteligencia artificial conectadas a WhatsApp, email, CRM, formularios, calendarios y bases de datos.

El objetivo principal de la landing es conseguir que el visitante reserve una **llamada estratégica gratuita**.

## ✨ Características

- Diseño SaaS moderno, oscuro y premium, pensado para transmitir confianza e innovación.
- Estructura de conversión completa: hero potente, prueba de credibilidad, dolor del cliente, beneficios, proceso en 3 pasos, casos de uso, testimonios, FAQ y doble CTA.
- Totalmente responsive (desktop, tablet y móvil).
- Componentes reutilizables y desacoplados, con su propio CSS por sección para facilitar la iteración visual.
- Tokens de diseño centralizados (colores, tipografía, espaciados, radios, sombras) en un único archivo, para poder retocar el look completo de la marca en segundos.
- Transiciones y microinteracciones sutiles (hover, acordeón de FAQ, menú móvil, pulso animado en el flujo del hero).

## 🛠️ Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS puro con variables (custom properties), sin frameworks de utilidades

## 📁 Estructura del proyecto

```
proyecto_3/
├── index.html
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx                # Ensambla todas las secciones de la landing
│   ├── index.css              # Tokens de diseño globales (colores, tipografía, espaciados...)
│   └── components/
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx / .css            # Titular, doble CTA y visual de flujo de automatización
│       ├── LogosStrip.jsx / .css      # Bloque de métricas / credibilidad
│       ├── ProblemSection.jsx / .css  # Problemas frecuentes del cliente
│       ├── BenefitsSection.jsx / .css
│       ├── HowItWorks.jsx / .css      # Proceso en 3 pasos
│       ├── UseCases.jsx / .css
│       ├── Testimonials.jsx / .css
│       ├── FAQ.jsx / .css             # Acordeón de preguntas frecuentes
│       ├── FinalCTA.jsx / .css
│       ├── Footer.jsx / .css
│       └── ui/
│           ├── Button.jsx / .css
│           ├── Container.jsx
│           └── SectionHeading.jsx / .css
└── package.json
```

## 🚀 Puesta en marcha

Requisitos: Node.js 18+ y npm.

```bash
# Instalar dependencias
npm install

# Levantar el entorno de desarrollo (http://localhost:5173)
npm run dev

# Generar el build de producción en /dist
npm run build

# Previsualizar el build de producción
npm run preview
```

## 🎨 Cómo iterar el diseño

- **Colores, tipografía y espaciados globales** → editar las variables en [`src/index.css`](src/index.css).
- **Ajustar una sección concreta** → cada componente tiene su propio archivo `.css` junto a él (por ejemplo, `Hero.jsx` y `Hero.css`), sin efectos colaterales sobre el resto de la página.
- **Componentes de UI reutilizables** (`Button`, `Container`, `SectionHeading`) están en `src/components/ui/` y se usan en toda la landing para mantener la coherencia visual.

## Autor

**AuraLRestrepo**
