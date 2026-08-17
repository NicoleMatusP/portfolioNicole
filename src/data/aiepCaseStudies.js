import designSystem from "../assets/aiep/design-system.jpg"
import prototipoPago from "../assets/aiep/prototipo-pago.mp4"
import prototipoMisSolicitudes from "../assets/aiep/prototipo-mis-solicitudes.jpg"
import misSolicitudesPhoto from "../assets/aiep/mis-solicitudes-photo.jpg"
import simuladorBecasPhoto from "../assets/aiep/card-simulador-becas.jpg"
import recorridoPhoto from "../assets/aiep/card-recorrido.jpg"
import certificadosEspecialesPhoto from "../assets/aiep/card-certificados-especiales.jpg"
import educacionContinuaVideo from "../assets/aiep/educacion-continua-video.mp4"
import educacionContinuaFlujo from "../assets/aiep/flujo-educacion-continua.jpg"

export const aiepCaseStudies = {
  "aiep-intranet": {
    company: "AIEP",
    name: "Intranet Estudiantil — Estandarización de módulos",
    tagline:
      "Unificar la experiencia de +40.000 estudiantes coordinando diseño entre equipos internos y proveedores.",
    tags: ["Design System", "UX/UI", "Coordinación con proveedores"],
    color: "#1A1A2E",
    heroGradient: "linear-gradient(135deg, #4A8FE7 0%, #2B5FC4 35%, #1A1A2E 100%)",
    year: "2025",
    role: "UX/UI Designer",
    tools: ["Figma", "FigJam", "Azure DevOps"],
    duration: "8 meses",
    context:
      "La intranet del estudiante de AIEP funcionaba como un portal de acceso rápido que conectaba con sistemas de distintos proveedores. Cada proveedor tenía su propio estilo visual, componentes distintos y flujos incompatibles entre sí. Para el estudiante, la experiencia era como usar cinco aplicaciones distintas sin ninguna coherencia.",
    problem: {
      statement: "Tres sistemas distintos. Cero coherencia. Una sola experiencia que mejorar.",
      context:
        "El Design System de AIEP existía, pero no se aplicaba de forma consistente en los módulos externos. Cada proveedor había implementado su propia interpretación del diseño, generando una experiencia fragmentada que afectaba la usabilidad y la percepción de la institución.",
      painPoints: [
        "Los estudiantes no reconocían los módulos externos como parte de AIEP — parecían sitios de terceros.",
        "Los flujos de tareas críticas (matrícula, notas, pagos) tenían entre 6 y 10 pasos sin coherencia entre sí.",
        "Sin guía de implementación, cada proveedor interpretaba el diseño a su manera.",
      ],
    },
    roleDetail: [
      {
        title: "Diseño",
        description:
          "Recibí el Design System institucional de AIEP y lo apliqué al rediseño de flujos y pantallas de cada módulo en Figma. A medida que los flujos se volvían más complejos, fui detectando vacíos en el sistema y sumé nuevos componentes cuando los existentes no cubrían lo que cada pantalla necesitaba. Trabajé módulo por módulo, priorizando los de mayor impacto para los estudiantes.",
      },
      {
        title: "Coordinación",
        description:
          "El formato de entrega a cada proveedor fue siempre el mismo: acceso directo al archivo de Figma con la maqueta conectada como prototipo interactivo, para que pudieran revisar animaciones de botones y otras interacciones tal como se verían implementadas. Antes de enviar cualquier prototipo lo conversaba con los stakeholders internos involucrados para obtener su aprobación, y solo entonces pasaba a manos del proveedor para su desarrollo.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Se realizó un análisis heurístico de la intranet actual, evaluando por separado la app móvil y el sitio de escritorio bajo los principios de usabilidad de Nielsen y clasificando cada hallazgo según su severidad. Los problemas más críticos fueron la falta de jerarquía visual, la inconsistencia entre los módulos propios y los de proveedores externos, la ausencia de feedback visual en botones y flujos, y una navegación limitada por la falta de un retorno claro a la intranet. Con esos hallazgos, se hizo un benchmark de otras plataformas educativas bajo seis criterios —usabilidad, diseño visual, contenido, interacción, confianza y performance— para identificar buenas prácticas aplicables, como accesos rápidos personalizables, paneles configurables y confirmaciones claras en procesos críticos.",
        synthesis: {
          eyebrow: "Síntesis de hallazgos",
          columns: [
            {
              title: "Análisis heurístico",
              subtitle: "10 principios de Nielsen · app móvil y escritorio",
              rows: [
                { number: "01", label: "Jerarquía visual y diseño minimalista", severity: "Crítica" },
                { number: "02", label: "Control y libertad del usuario", severity: "Crítica" },
                { number: "03", label: "Prevención de errores", severity: "Crítica" },
                { number: "04", label: "Consistencia y estándares", severity: "Alta" },
                { number: "05", label: "Visibilidad del estado del sistema", severity: "Alta" },
              ],
            },
            {
              title: "Análisis benchmark",
              subtitle: "6 criterios · plataformas educativas referentes",
              rows: [
                { number: "01", label: "Usabilidad y arquitectura" },
                { number: "02", label: "Diseño visual (UI)" },
                { number: "03", label: "Contenido y comunicación" },
                { number: "04", label: "Interacción y feedback" },
                { number: "05", label: "Confianza y credibilidad" },
                { number: "06", label: "Performance e innovación" },
              ],
              note: "Buenas prácticas detectadas: accesos rápidos personalizables, paneles configurables y confirmaciones en procesos críticos.",
            },
          ],
        },
        images: [],
      },
      {
        number: "02",
        title: "Rediseño en Figma",
        description:
          "Aplicación del Design System a cada flujo y pantalla, sumando los componentes nuevos que fueron haciendo falta durante la construcción. Iteraciones revisadas con el equipo interno antes de ser entregadas a los proveedores.",
        images: [
          {
            label: "Rediseño — Flujos en Figma",
            aspectRatio: "2800/1395",
            instruction: "Subir: capturas de los flujos rediseñados en Figma, vista de varios frames juntos",
            src: prototipoMisSolicitudes,
          },
          {
            label: "Design System — New & Applied Components",
            aspectRatio: "900/737",
            instruction: "Subir: muestra de los componentes del DS usados, incluyendo los que sumé durante el proyecto",
            src: designSystem,
          },
        ],
      },
      {
        number: "03",
        title: "Prototipo y aprobación",
        description:
          "Con el prototipo interactivo conectado en Figma, se revisaba el diseño con los stakeholders internos hasta obtener su aprobación. Recién entonces se entregaba a los equipos técnicos de cada proveedor, coordinando dudas de implementación y revisando avances hasta lograr un resultado fiel al diseño.",
        images: [
          {
            label: "Prototipo — Interacciones conectadas",
            aspectRatio: "1600/902",
            instruction: "Subir: captura del prototipo interactivo en Figma mostrando las conexiones entre pantallas",
            src: prototipoPago,
          },
        ],
      },
    ],
    subprojects: {
      title: "Cuatro módulos. Un mismo Design System.",
      intro:
        "Como resultado de esta estandarización, se diseñaron estos 4 módulos específicos de principio a fin, coordinando directamente con sus proveedores respectivos y manteniendo coherencia visual y de experiencia con el Design System de AIEP, listos para su implementación.",
      items: [
        {
          number: "01",
          name: "Simulador de Becas y CAE",
          description:
            "Herramienta para que el estudiante proyecte su financiamiento —becas y Crédito con Aval del Estado— según su situación académica y socioeconómica, antes de matricularse.",
          image: {
            label: "Simulador de Becas y CAE",
            instruction: "Subir: captura del flujo del simulador mostrando el resultado de la proyección de financiamiento",
            src: simuladorBecasPhoto,
          },
        },
        {
          number: "02",
          name: "Recorridos 360°",
          description:
            "Tours virtuales interactivos de sedes y laboratorios de AIEP, pensados para estudiantes que evalúan su ingreso o cambio de sede sin poder visitarla presencialmente.",
          image: {
            label: "Recorridos 360°",
            instruction: "Subir: captura del visor de recorrido 360° o mockup del módulo mostrando una sede",
            src: recorridoPhoto,
          },
        },
        {
          number: "03",
          name: "Mis solicitudes",
          description:
            "Módulo centralizado para crear, hacer seguimiento y recibir respuesta a trámites administrativos —certificados, cambios de sede, postergaciones— sin depender de atención presencial.",
          image: {
            label: "Mis solicitudes",
            instruction: "Subir: captura del listado de solicitudes con sus estados (en curso, aprobada, rechazada)",
            src: misSolicitudesPhoto,
          },
        },
        {
          number: "04",
          name: "Certificados especiales",
          description:
            "Flujo de solicitud y descarga de certificados académicos específicos —título en trámite, alumno regular con fines particulares, entre otros— directamente desde la intranet.",
          image: {
            label: "Certificados especiales",
            instruction: "Subir: captura del flujo de solicitud de un certificado especial, paso de selección de tipo",
            src: certificadosEspecialesPhoto,
          },
        },
      ],
    },
    learnings: {
      metrics: [
        { value: "4", label: "Subproyectos de diseño UX" },
        { value: "5", label: "Proveedores coordinados" },
        { value: "8 meses", label: "De proyecto" },
      ],
      closing: [
        "Este proyecto dejó un aprendizaje claro: el diseño a escala requiere tanto criterio visual como habilidades de comunicación. Trabajar con proveedores externos significa que el diseño debe ser tan claro que no deje espacio para interpretaciones, lo que exige documentar decisiones, dar feedback técnico preciso y mantener la coherencia del sistema cuando la implementación la hace un tercero.",
        "Por confidencialidad institucional, las capturas mostradas corresponden a los entregables de diseño en Figma.",
      ],
    },
  },

  "aiep-educacion-continua": {
    company: "AIEP",
    name: "Sitio Web Educación Continua",
    tagline:
      "Ordenar la oferta de cursos y diplomados y facilitar la decisión de quienes buscan continuar su formación.",
    tags: ["Discovery", "UX/UI", "HubSpot"],
    color: "#0D1F3C",
    year: "2025 — 2026",
    role: "UX/UI Designer",
    tools: ["Figma", "HubSpot"],
    duration: "6 meses",
    context:
      "Educación Continua es el sitio donde estudiantes y profesionales pueden explorar cursos y diplomados para continuar o complementar su formación, conocer sus características e inscribirse. Se identificó que la experiencia digital existente no lograba ordenar la oferta ni comunicar con claridad la propuesta de valor para quienes buscaban este tipo de formación.",
    team: {
      headline: "Dos squads, un mismo sitio.",
      paragraph:
        "El trabajo se organizó entre dos squads: Squad Web, a cargo de la plataforma y sus lineamientos generales, y Squad Educación Continua, enfocado en las necesidades específicas de esta área. El proceso partió con un workshop interno junto a ambos equipos para alinear visión y objetivos antes de diseñar.",
      roles: ["Squad Web", "Squad Educación Continua"],
      closing:
        "Coordinar ambos squads implicó traducir los objetivos comerciales del área de Educación Continua en decisiones de diseño viables dentro de los lineamientos del sitio institucional.",
    },
    problem: {
      statement: "Mucha oferta académica. Poca claridad para elegir.",
      painPoints: [
        "Oferta de cursos y diplomados poco estructurada desde la mirada del usuario.",
        "Dificultad para comprender diferencias, modalidades y beneficios entre programas.",
        "Experiencia digital que no acompañaba la proyección estratégica del área.",
      ],
    },
    roleDetail: [
      {
        title: "Discovery",
        description:
          "Participé en el workshop interno con los squads Web y Educación Continua, hice un análisis heurístico de la experiencia digital existente y un benchmark de referentes del rubro para identificar barreras y oportunidades antes de diseñar.",
      },
      {
        title: "Diseño de la solución",
        description:
          "Con los insights del discovery definí los criterios de diseño y diseñé la primera maqueta del sitio — inicio, listado de programas y detalle de cada programa — pensada para ordenar la oferta y facilitar la toma de decisiones dentro de un sistema modular y escalable.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discovery y levantamiento inicial",
        description:
          "Antes de diseñar, se hizo un workshop interno con los squads involucrados, un análisis heurístico de la experiencia digital existente y un benchmark de referentes del rubro. De ahí surgieron los insights que guiaron el diseño: ordenar la oferta desde la lógica de la persona usuaria, definir un lenguaje claro y consistente, y pensar una solución escalable dentro de un ecosistema digital mayor.",
        images: [
          {
            label: "Discovery — Workshop y hallazgos",
            aspectRatio: "16/7",
            instruction: "Subir: tablero del workshop en FigJam, capturas del análisis heurístico o del benchmark realizado",
          },
        ],
      },
      {
        number: "02",
        title: "Criterios y propuesta de diseño",
        description:
          "Con esos insights se definieron tres criterios: orden y jerarquía de la oferta, claridad en la propuesta de valor y el lenguaje, y un diseño pensado para escalar. A partir de ahí se diseñó la primera maqueta del sitio, con información clave visible desde el primer contacto y una estructura modular e integrable al ecosistema digital de AIEP.",
        images: [
          {
            label: "Propuesta — Flujo en Figma",
            aspectRatio: "1900/929",
            instruction: "Subir: vista de los frames conectados en Figma mostrando el flujo completo del sitio",
            src: educacionContinuaFlujo,
          },
        ],
      },
      {
        number: "03",
        title: "Resultado",
        description:
          "La propuesta final incluyó pantallas como el inicio, el listado de programas con filtros por tipo y área, y el detalle de cada programa con la información necesaria para decidir e inscribirse — duración, modalidad, contenidos, valor y certificación.",
        images: [
          {
            label: "Video — Interacción con el sitio",
            aspectRatio: "1600/960",
            instruction: "Subir: video navegando el prototipo (filtros, tarjetas de programas, paso de listado a detalle)",
            src: educacionContinuaVideo,
          },
        ],
      },
      {
        number: "04",
        title: "Estado y próximos pasos",
        description:
          "La maqueta fue validada a nivel interno y el proyecto fue traspasado a desarrollo a través de un proveedor externo, como parte de una iniciativa mayor de migración del sitio institucional. Seguía en curso — sin implementar aún — al cierre de mi paso por AIEP.",
        images: [],
      },
    ],
    learnings: {
      metrics: [
        { value: "2", label: "Squads coordinados" },
        { value: "3", label: "Criterios de diseño definidos" },
        { value: "6 meses", label: "De proyecto" },
      ],
      closing: [
        "Este proyecto reforzó la importancia de partir por entender a la persona usuaria antes de diseñar: el discovery permitió tomar decisiones con base en evidencia y no en supuestos. También evidenció el valor de diseñar pensando en la escalabilidad, ya que esta solución debía integrarse a un ecosistema digital mucho más grande que un solo sitio.",
        "Por confidencialidad institucional, este caso y sus capturas se presentan en una versión anonimizada del proyecto real.",
      ],
    },
  },
}

export const getAiepCaseStudy = (slug) => aiepCaseStudies[slug]
