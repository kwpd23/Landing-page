# Eric Cisneros — Landing Page

Landing page de servicios de desarrollo de software, construida con **React + TypeScript + Vite**. Sin frameworks de CSS: estilos hechos a mano con estética de terminal/IDE.

## Características

- 🖥️ **Terminal interactiva real** en el hero — los visitantes pueden escribir comandos (`help`, `about`, `stack`, `projects`, `contact`, `sudo hire-me`…)
- ⌨️ Efecto máquina de escribir en el titular
- 📊 Contadores animados y animaciones de aparición al hacer scroll
- 🗂️ Tarjetas de proyectos expandibles con métricas y barras de lenguajes (estilo GitHub)
- 🎮 Easter egg con el código Konami (↑↑↓↓←→←→BA)
- 📱 Diseño responsive

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Deploy

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) publica automáticamente en **GitHub Pages** con cada push a `main`. Para activarlo: Settings → Pages → Source → **GitHub Actions**.

## Contacto

Eric Cisneros — kwpd23@gmail.com
