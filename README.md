# Crust Pizza Co. — réplica del mockup

Landing page construida con **Next.js 15 (App Router)** y **Tailwind CSS v4**, replicando el mockup de diseño.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Notas

- El layout de escritorio (breakpoint `desk`, ≥1300px) reproduce el mockup a escala 2×:
  tarjeta de página de 1308px y área de contenido de 1126px. Las medidas `desk:` salen
  directamente de las coordenadas del mockup.
- Por debajo de `desk` la página pasa a un layout fluido apilado (tablet / móvil).
- Tipografías: Roboto y Roboto Condensed vía `next/font/google`.
- Las fotografías de `public/images` están recortadas del propio mockup; sustitúyelas por
  las fotos finales en alta resolución manteniendo las mismas proporciones.
- Logo e iconos son SVG en `components/`.
