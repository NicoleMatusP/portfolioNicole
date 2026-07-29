export const aiepCaseStudies = {
  "aiep-intranet": {
    company: "AIEP",
    name: "Intranet Estudiantil — Estandarización de módulos",
    tagline:
      "Unificar la experiencia de +40.000 estudiantes coordinando diseño entre equipos internos y proveedores.",
    tags: ["Design System", "UX/UI", "Coordinación con proveedores"],
    color: "#1A1A2E",
    year: "2025",
    role: "UX/UI Designer",
    tools: ["Figma", "FigJam", "Jira"],
    duration: "8 meses",
    status: "Implementado",
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
          "Recibí el Design System institucional de AIEP y lo apliqué al rediseño de flujos y pantallas de cada módulo en Figma. Trabajé módulo por módulo, priorizando los de mayor impacto para los estudiantes.",
      },
      {
        title: "Coordinación",
        description:
          "Una vez aprobados los diseños internamente, los entregaba directamente a los equipos técnicos de cada proveedor. Coordiné dudas de implementación, revisé avances y aseguré que el resultado final respetara las decisiones de diseño.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Auditoría de todos los módulos existentes en la intranet. Mapeo de proveedores, identificación de inconsistencias y priorización según impacto en los estudiantes.",
        images: [
          {
            label: "Diagnóstico — Mapeo de módulos",
            aspectRatio: "16/7",
            instruction: "Subir: captura del mapeo de módulos en FigJam o tabla de auditoría de inconsistencias",
          },
        ],
      },
      {
        number: "02",
        title: "Rediseño en Figma",
        description:
          "Aplicación del Design System a cada flujo y pantalla. Iteraciones revisadas con el equipo interno antes de ser entregadas a los proveedores.",
        images: [
          {
            label: "Rediseño — Flujos en Figma",
            aspectRatio: "16/9",
            instruction: "Subir: capturas de los flujos rediseñados en Figma, vista de varios frames juntos",
          },
          {
            label: "Design System — Componentes aplicados",
            aspectRatio: "16/6",
            instruction: "Subir: muestra de los componentes del DS usados: paleta, tipografía, botones, formularios",
          },
        ],
      },
      {
        number: "03",
        title: "Coordinación con proveedores",
        description:
          "Handoff de los diseños aprobados a cada proveedor. Ciclos de revisión, feedback técnico y corrección hasta lograr implementaciones fieles al diseño.",
        images: [
          {
            label: "Coordinación — Entregables de handoff",
            aspectRatio: "16/7",
            instruction: "Subir: captura de los specs en Figma, anotaciones técnicas o documentación entregada",
          },
        ],
      },
      {
        number: "04",
        title: "Resultado",
        description:
          "Módulos implementados con coherencia visual y de experiencia respecto al Design System de AIEP. El resultado está live en la intranet estudiantil.",
        images: [
          {
            label: "Resultado — Antes y después",
            aspectRatio: "16/9",
            instruction: "Subir: capturas del estado original vs. el rediseño en Figma. Dos columnas: antes / después",
          },
        ],
      },
    ],
    learnings: {
      metrics: [
        { value: "10", label: "Módulos rediseñados" },
        { value: "5", label: "Proveedores coordinados" },
        { value: "8 meses", label: "De proyecto" },
      ],
      closing: [
        "Este proyecto me enseñó que el diseño a escala requiere tanto criterio visual como habilidades de comunicación. Trabajar con proveedores externos significa que el diseño debe ser tan claro que no deje espacio para interpretaciones. Aprendí a documentar decisiones, a dar feedback técnico preciso y a mantener la coherencia del sistema cuando la implementación la hace un tercero.",
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
    tools: ["Figma", "HubSpot", "Jira", "Notion"],
    duration: "10 meses",
    status: "En desarrollo al salir del proyecto",
    context:
      "El sitio institucional de AIEP necesitaba migrar a HubSpot para centralizar la gestión de contenido y marketing. Pero no era solo una migración técnica: el sitio requería rediseño visual para modernizarse, y el proceso involucraba alinear a múltiples áreas internas con criterios y prioridades distintas, además de coordinar la implementación con la agencia externa Cebra.",
    team: {
      headline: "Un equipo, cinco disciplinas, un backlog.",
      paragraph:
        "Fui parte de una célula multidisciplinaria con representantes de diseño, contenido, área comercial, TI y la agencia Cebra. Trabajábamos bajo metodología ágil con sprints de dos semanas y un backlog compartido donde cada área registraba sus tareas y dependencias.",
      roles: ["Diseño UX/UI", "Contenido", "Comercial", "TI", "Agencia Cebra"],
      closing:
        "Esta estructura me obligó a comunicar decisiones de diseño a perfiles no técnicos, negociar prioridades con el área comercial y mantener coherencia visual cuando la implementación la hacía un tercero.",
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
            instruction: "Subir: captura del backlog en Jira o Notion, tablero de sprint o estructura de trabajo del equipo",
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
      statusPill: "Proyecto en desarrollo al momento de mi salida de AIEP",
      metrics: [
        { value: "5", label: "Áreas coordinadas" },
        { value: "2 semanas", label: "Por sprint" },
        { value: "+42", label: "Páginas diseñadas" },
      ],
      closing: [
        "Trabajar en este proyecto me enseñó que diseñar para un CMS implica entender sus restricciones antes de abrir Figma. También aprendí a navegar decisiones de diseño en un entorno de múltiples stakeholders con criterios distintos: el área comercial prioriza conversión, TI prioriza viabilidad técnica, y diseño debe encontrar la solución que funcione para todos.",
        "El proceso en sí —la coordinación, la metodología, las decisiones tomadas— fue tan valioso como el resultado.",
      ],
    },
  },
}

export const getAiepCaseStudy = (slug) => aiepCaseStudies[slug]
