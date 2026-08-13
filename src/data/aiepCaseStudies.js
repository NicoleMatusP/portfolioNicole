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
            aspectRatio: "16/9",
            instruction: "Subir: capturas de los flujos rediseñados en Figma, vista de varios frames juntos",
          },
          {
            label: "Design System — Componentes nuevos y aplicados",
            aspectRatio: "16/6",
            instruction: "Subir: muestra de los componentes del DS usados, incluyendo los que sumé durante el proyecto",
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
            aspectRatio: "16/7",
            instruction: "Subir: captura del prototipo interactivo en Figma mostrando las conexiones entre pantallas",
          },
        ],
      },
      {
        number: "04",
        title: "Resultado",
        description:
          "Módulos entregados a cada proveedor con coherencia visual y de experiencia respecto al Design System de AIEP, listos para su implementación.",
        images: [
          {
            label: "Resultado — Antes y después",
            aspectRatio: "16/9",
            instruction: "Subir: capturas del estado original vs. el rediseño en Figma. Dos columnas: antes / después",
          },
        ],
      },
    ],
    subprojects: {
      intro:
        "Dentro de esta estandarización general, el diseño de estos 4 módulos específicos se llevó de principio a fin, coordinando directamente con sus proveedores respectivos.",
      items: [
        {
          number: "01",
          name: "Simulador de Becas y CAE",
          description:
            "Herramienta para que el estudiante proyecte su financiamiento —becas y Crédito con Aval del Estado— según su situación académica y socioeconómica, antes de matricularse.",
          image: {
            label: "Simulador de Becas y CAE",
            instruction: "Subir: captura del flujo del simulador mostrando el resultado de la proyección de financiamiento",
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
          },
        },
      ],
    },
    learnings: {
      metrics: [
        { value: "4", label: "Subproyectos liderados" },
        { value: "5", label: "Proveedores coordinados" },
        { value: "8 meses", label: "De proyecto" },
      ],
      closing: [
        "Este proyecto dejó un aprendizaje claro: el diseño a escala requiere tanto criterio visual como habilidades de comunicación. Trabajar con proveedores externos significa que el diseño debe ser tan claro que no deje espacio para interpretaciones, lo que exige documentar decisiones, dar feedback técnico preciso y mantener la coherencia del sistema cuando la implementación la hace un tercero.",
        "Por confidencialidad institucional, las capturas mostradas corresponden a los entregables de diseño en Figma.",
      ],
    },
  },

  "aiep-hubspot": {
    company: "AIEP",
    name: "Sitio Institucional — Migración a HubSpot",
    tagline: "Rediseño y migración de aiep.cl en célula ágil con equipo interno y agencia externa.",
    tags: ["Rediseño Web", "HubSpot", "Metodología Ágil"],
    color: "#0D1F3C",
    year: "2025 — 2026",
    role: "UX/UI Designer",
    tools: ["Figma", "HubSpot", "Azure DevOps"],
    duration: "10 meses",
    context:
      "El sitio institucional de AIEP necesitaba migrar a HubSpot para centralizar la gestión de contenido y marketing. Pero no era solo una migración técnica: el sitio requería rediseño visual para modernizarse, y el proceso involucraba alinear a múltiples áreas internas con criterios y prioridades distintas, además de coordinar la implementación con la agencia externa Cebra.",
    team: {
      headline: "Un equipo, cinco disciplinas, un backlog.",
      paragraph:
        "La célula era multidisciplinaria, con representantes de diseño, contenido, área comercial, TI y la agencia Cebra. Se trabajaba bajo metodología ágil con sprints de dos semanas y un backlog compartido donde cada área registraba sus tareas y dependencias.",
      roles: ["Diseño UX/UI", "Contenido", "Comercial", "TI", "Agencia Cebra"],
      closing:
        "Esta estructura implicaba comunicar decisiones de diseño a perfiles no técnicos, negociar prioridades con el área comercial y mantener coherencia visual cuando la implementación la hacía un tercero.",
    },
    problem: {
      statement: "Migrar sin perder el hilo. Rediseñar sin perder la marca.",
      painPoints: [
        "El sitio existente estaba construido sobre una plataforma difícil de actualizar para el equipo de contenido.",
        "La identidad visual había evolucionado pero el sitio no reflejaba la marca actual de AIEP.",
        "Múltiples áreas tenían criterios distintos sobre qué debía priorizar el nuevo sitio.",
      ],
    },
    roleDetail: [
      {
        title: "Diseño en Figma",
        description:
          "Rediseñé las pantallas y templates del nuevo sitio en Figma, respetando y evolucionando las brand guidelines de AIEP. Los templates debían ser implementables en HubSpot por Cebra, por lo que consideré las restricciones técnicas del CMS desde el inicio del diseño.",
      },
      {
        title: "Coordinación con Cebra",
        description:
          "Una vez aprobados los diseños internamente, los entregaba a Cebra para su implementación en HubSpot. Revisaba cada entrega contra el diseño aprobado, documentaba desviaciones y coordinaba correcciones en los ciclos de sprint.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Auditoría del sitio actual",
        description:
          "Relevamiento de todas las páginas, secciones y contenidos existentes. Definición de qué migraba, qué se descartaba y qué era nuevo.",
        images: [
          {
            label: "Auditoría — Inventario de páginas",
            aspectRatio: "16/7",
            instruction: "Subir: tabla de inventario de contenido, captura del sitio anterior o mapa del sitio existente",
          },
        ],
      },
      {
        number: "02",
        title: "Rediseño en Figma",
        description:
          "Diseño de los nuevos templates y páginas respetando las brand guidelines de AIEP. Iteraciones con feedback del equipo interno antes de llegar a Cebra.",
        images: [
          {
            label: "Rediseño — Templates en Figma",
            aspectRatio: "16/9",
            instruction: "Subir: capturas de los templates diseñados, vista desktop y mobile de las páginas principales",
          },
          {
            label: "Comparativa — Antes y después del diseño",
            aspectRatio: "16/7",
            instruction: "Subir: pantalla del sitio anterior vs. el nuevo diseño en Figma, en paralelo",
          },
        ],
      },
      {
        number: "03",
        title: "Trabajo en célula ágil",
        description:
          "Sprints de dos semanas con backlog compartido. Cada tarea tenía un responsable y dependencias mapeadas entre áreas.",
        images: [
          {
            label: "Metodología — Backlog o tablero de sprints",
            aspectRatio: "16/6",
            instruction: "Subir: captura del backlog en Azure DevOps, tablero de sprint o estructura de trabajo del equipo",
          },
        ],
      },
      {
        number: "04",
        title: "Coordinación e implementación con Cebra",
        description:
          "Handoff de diseños, revisión de implementaciones en HubSpot, feedback técnico y ciclos de corrección por sprint.",
        images: [
          {
            label: "Coordinación — Entregables a Cebra",
            aspectRatio: "16/7",
            instruction: "Subir: specs de Figma, documentación de handoff o capturas de las revisiones de implementación",
          },
        ],
      },
    ],
    learnings: {
      metrics: [
        { value: "5", label: "Áreas coordinadas" },
        { value: "2 semanas", label: "Por sprint" },
        { value: "+42", label: "Páginas diseñadas" },
      ],
      closing: [
        "Este proyecto dejó en claro que diseñar para un CMS implica entender sus restricciones antes de abrir Figma. También quedó de manifiesto cómo navegar decisiones de diseño en un entorno de múltiples stakeholders con criterios distintos: el área comercial prioriza conversión, TI prioriza viabilidad técnica, y diseño debe encontrar la solución que funcione para todos.",
        "El proceso en sí —la coordinación, la metodología, las decisiones tomadas— fue tan valioso como el resultado.",
      ],
    },
  },
}

export const getAiepCaseStudy = (slug) => aiepCaseStudies[slug]
