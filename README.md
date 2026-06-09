# Eric Cisneros — Landing Page

Landing page de servicios de desarrollo de software, construida con **React + TypeScript + Vite**.

Diseño minimalista y cálido — papel + tinta + un solo acento arcilla — con tipografías
Space Grotesk / Hanken Grotesk / JetBrains Mono e íconos Lucide. Sin frameworks de CSS:
los estilos se construyen sobre tokens propios en `src/styles/global.css`.

## Características

- **Terminal interactiva** en el hero: los visitantes pueden escribir comandos
  (`help`, `about`, `stack`, `projects`, `contact`)
- Titular con efecto de máquina de escribir y contadores animados
- Tarjetas de proyectos expandibles con problema → solución → resultado y métricas
- Secciones: servicios, proyectos, proceso, stack tecnológico y contacto
- Animaciones de aparición discretas (respetan `prefers-reduced-motion`)
- Diseño responsive

## Estructura

```
src/
  data/content.ts      ← todo el contenido editable (proyectos, servicios, textos)
  components/          ← componentes React (Nav, Hero, Terminal, Projects, …)
  hooks/               ← useReveal, useCountUp, useTypewriter
  styles/global.css    ← tokens de diseño y estilos
```

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Deploy

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) compila y publica el
sitio en **GitHub Pages** automáticamente con cada push.

## Contacto

Eric Cisneros — kwpd23@gmail.com
