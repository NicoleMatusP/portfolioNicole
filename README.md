# Portfolio — Nicole Matus

Portfolio de Product Designer construido con React + Vite, CSS puro y Framer Motion.

## Stack

- React 18 + Vite
- React Router v6
- CSS global con variables (sin Tailwind ni librerías de UI)
- Framer Motion para animaciones

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/     # Nav, CustomCursor, Footer, Toast, ImagePlaceholder
├── pages/          # Home.jsx, CaseStudy.jsx
├── sections/
│   ├── home/       # Hero, Projects, About, Formation, Process, Contact
│   └── casestudy/  # Las 13 secciones del caso de estudio
└── data/
    ├── projects.js      # Datos de los 4 proyectos
    └── caseStudies.js   # Contenido detallado de cada caso de estudio
```

## Cómo agregar imágenes reales

Todas las imágenes del sitio (excepto los bloques de color de los hero de
cada proyecto) se renderizan hoy con el componente `ImagePlaceholder`,
ubicado en `src/components/ImagePlaceholder.jsx`. Este componente muestra
un rectángulo con instrucciones de qué imagen va ahí, para que sea fácil
saber qué subir sin tener que leer el código.

Cuando tengas el asset final listo, sigue estos pasos:

1. **Guarda la imagen** dentro de `src/assets/` (crea la carpeta si no
   existe), por ejemplo: `src/assets/aiep-research-affinity-map.png`.

2. **Impórtala** en el archivo de la sección correspondiente dentro de
   `src/sections/casestudy/`. Por ejemplo, en `CSResearch.jsx`:

   ```jsx
   import affinityMap from "../../assets/aiep-research-affinity-map.png"
   ```

3. **Pásala como prop `src`** al `ImagePlaceholder` que quieres reemplazar:

   ```jsx
   <ImagePlaceholder
     label="Research"
     aspectRatio="16/6"
     instruction="Aquí van: capturas de entrevistas, affinity map, survey results"
     src={affinityMap}
   />
   ```

   Cuando `ImagePlaceholder` recibe `src`, automáticamente deja de mostrar
   el estado de placeholder (fondo punteado + instrucción) y renderiza la
   imagen real recortada al `aspectRatio` definido.

4. **Repite el proceso** para cada bloque de imagen del caso de estudio.
   Cada instancia de `ImagePlaceholder` en el código indica exactamente
   qué contenido va ahí (por ejemplo: "capturas del affinity map en
   Figma, vista completa sin zoom").

5. Si prefieres no tocar código, también puedes colocar las imágenes en
   `public/` y pasar la ruta directamente como string, por ejemplo
   `src="/images/aiep-hero.png"`.

### Dónde editar el contenido de texto

- **Datos generales de cada proyecto** (nombre, color, tags, año, rol,
  herramientas): `src/data/projects.js`.
- **Contenido detallado de cada caso de estudio** (research, hallazgos,
  benchmark, persona, resultados, etc.): `src/data/caseStudies.js`. El
  objeto de AIEP Campus Digital ya tiene contenido completo de ejemplo;
  los otros tres proyectos (Phero, Hoktus, Parkeate) tienen placeholders
  marcados con `[Nicole: completar...]` listos para reemplazar.

## Notas de diseño

- Color de acento (`#C8FF00`) se usa solo en hovers, el tag "En curso" y
  los números activos del indicador de progreso — nunca como fondo de
  bloques grandes.
- El cursor personalizado solo se activa en dispositivos con hover real
  (`@media (hover: hover)`), por lo que no interfiere con mobile/touch.
- El indicador de progreso lateral del caso de estudio es fijo y solo se
  muestra en pantallas mayores a 1100px de ancho.
