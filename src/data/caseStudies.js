export const caseStudyContent = {
  "aiep-campus-digital": {
    hero: {
      challenge:
        "Unificar tres sistemas fragmentados en una plataforma educativa que estudiantes móvil-first realmente quieran usar.",
    },
    overview: {
      context:
        "AIEP es una de las instituciones de educación técnico-profesional más grandes de Chile, con más de 40.000 estudiantes activos repartidos en sedes a lo largo de todo el país. Su plataforma académica —el punto de contacto diario entre estudiantes, docentes y contenidos— había crecido a través de integraciones sucesivas de tres sistemas distintos, cada uno con su propio login, su propia navegación y su propio lenguaje visual. El resultado era una experiencia inconsistente que los estudiantes evitaban usar salvo que fuera estrictamente necesario, y que generaba una carga de soporte constante para el equipo académico.",
    },
    problem: {
      statement:
        "Entregar una tarea tomaba más de 8 pasos repartidos en dos plataformas distintas.",
      context:
        "La fragmentación no era solo visual: el flujo de entrega de tareas obligaba a los estudiantes a navegar entre el sistema de contenidos, el sistema de evaluaciones y un portal de archivos separado, sin que ninguno reflejara el estado real del otro. Docentes y estudiantes habían normalizado el problema creando canales paralelos —principalmente WhatsApp— para confirmar que algo realmente se había entregado.",
      painPoints: [
        "Los estudiantes no sabían con certeza si una entrega se había registrado correctamente",
        "La plataforma no era responsive, pese a que la mayoría accedía desde el celular",
        "Cada sistema tenía su propio sistema de notificaciones, generando duplicidad o silencio total",
      ],
    },
    research: {
      methods: [
        {
          name: "Entrevistas a usuarios",
          description: "12 estudiantes de distintas carreras y sedes, sesiones de 45 minutos enfocadas en el flujo de entrega de tareas.",
        },
        {
          name: "Entrevistas a docentes",
          description: "4 docentes de áreas técnicas y de salud, para entender fricciones desde el lado de la revisión y calificación.",
        },
        {
          name: "Encuesta cuantitativa",
          description: "200 respuestas de estudiantes activos, midiendo frecuencia de uso, dispositivo principal y nivel de confianza en la plataforma.",
        },
        {
          name: "Benchmark competitivo",
          description: "Análisis comparado de Canvas, Moodle y Blackboard como referentes de LMS establecidos.",
        },
      ],
      findings: [
        "El 78% de los estudiantes abandona el flujo de entrega de tareas a mitad de camino, principalmente por falta de claridad sobre los pasos restantes.",
        "Los docentes duplican información académica en WhatsApp porque no confían en que el LMS notifique correctamente a sus estudiantes.",
        "El 90% de los estudiantes accede principalmente desde el celular, muchas veces en movimiento, pero la plataforma no había sido diseñada para ese contexto.",
        "Existe alta variabilidad en la alfabetización digital entre sedes, lo que exige una interfaz que no dependa de conocimiento previo del sistema.",
      ],
    },
    benchmark: {
      intro:
        "Se analizaron tres plataformas LMS de referencia para entender patrones de navegación, jerarquía de información y tratamiento de estados de entrega, buscando qué convenciones ya eran familiares para estudiantes que habían usado otras instituciones.",
      competitors: [
        {
          name: "Canvas",
          category: "LMS institucional",
          observations: [
            "Barra lateral persistente con acceso directo a cursos activos",
            "Estados de entrega muy explícitos (enviado, calificado, atrasado)",
            "Curva de aprendizaje inicial alta para usuarios nuevos",
          ],
        },
        {
          name: "Moodle",
          category: "LMS open source",
          observations: [
            "Alta flexibilidad de configuración, a costa de consistencia visual",
            "Navegación por curso poco intuitiva en mobile",
            "Fuerte comunidad de plugins pero experiencia base anticuada",
          ],
        },
        {
          name: "Blackboard",
          category: "LMS institucional",
          observations: [
            "Buen manejo de notificaciones agregadas",
            "Densidad de información alta, poco espacio en blanco",
            "Interfaz mobile percibida como secundaria al escritorio",
          ],
        },
      ],
    },
    definition: {
      persona: {
        name: "Camila, 22 años",
        description:
          "Estudia Enfermería en jornada vespertina y accede a la plataforma en un 90% desde su celular, principalmente durante los trayectos en transporte público entre el trabajo y la sede.",
        frustrations: [
          "No sabe si una tarea quedó realmente entregada hasta que el docente lo confirma por WhatsApp",
          "Perder tiempo de conexión móvil navegando entre sistemas distintos para una sola tarea",
          "Formularios y botones pensados para pantallas grandes que no funcionan bien en su celular",
        ],
        goals: [
          "Entregar una tarea en menos de dos minutos, sin depender de un computador",
          "Tener certeza inmediata de que algo se envió correctamente",
          "Recibir en un solo lugar todo lo relevante de sus cursos activos",
        ],
      },
      hmw: "¿Cómo podríamos simplificar el flujo de entrega para que Camila pueda confirmar su tarea en menos de un minuto, desde su celular?",
    },
    architecture: {
      intro:
        "La decisión estructural más importante fue consolidar los tres sistemas en una sola aplicación con una navegación principal compartida, eliminando la necesidad de logins y contextos separados para contenidos, evaluaciones y archivos.",
      decisions: [
        "Se definió una navegación principal única basada en 'Cursos activos' como punto de entrada, en lugar de separar por sistema de origen",
        "El estado de una entrega (borrador, enviado, calificado) se convirtió en un componente visual consistente reutilizado en toda la plataforma",
        "Se priorizó el diseño mobile-first en la arquitectura de información, dejando el layout de escritorio como una expansión del mismo modelo",
      ],
    },
    wireframes: {
      intro:
        "El flujo de entrega de tareas pasó por tres iteraciones de wireframes antes de llegar a la versión validada con estudiantes, cada una reduciendo pasos y aumentando la claridad del estado de la entrega.",
      note:
        "La segunda iteración exploró un flujo de entrega en un solo modal, pero se descartó tras testing por ocultar información de contexto del curso que los estudiantes consideraban necesaria antes de confirmar el envío.",
    },
    designSystem: {
      intro:
        "El sistema de diseño se construyó desde cero utilizando Atomic Design como metodología, priorizando componentes reutilizables entre los flujos académicos que antes vivían en sistemas separados.",
      atomicDesign: true,
      componentCount: "12 componentes base",
      tokenCount: "4 tokens de color, 2 familias tipográficas",
    },
    prototype: {
      intro:
        "Se construyó un prototipo interactivo de alta fidelidad del flujo completo de entrega de tareas, desde la vista de curso hasta la confirmación de envío, para validarlo con estudiantes antes del desarrollo.",
    },
    results: {
      metrics: [
        { value: "8 → 3", label: "Pasos reducidos en el flujo de entrega de tareas" },
        { value: "+34%", label: "Aumento en retención mensual de la plataforma" },
        { value: "23 → 61", label: "NPS de la plataforma en un período de 6 meses" },
      ],
      closing:
        "El mayor aprendizaje de este proyecto fue el peso real de la confianza en un sistema académico: gran parte de la fricción no era de usabilidad pura, sino de falta de certeza sobre el estado de las acciones. Si tuviera que rehacer el proyecto, invertiría investigación adicional en las primeras semanas post-lanzamiento para capturar fricciones que solo aparecen con uso sostenido en el tiempo.",
    },
  },

  "phero-app": {
    hero: {
      challenge: "Diseñar y lanzar desde cero una app de bienestar emocional que generara un hábito diario real.",
    },
    overview: {
      context:
        "Phero nació como un producto sin base de usuarios ni validación previa: una app móvil de bienestar emocional que debía competir por la atención diaria de las personas en un mercado saturado de apps de mindfulness. El desafío no era solo diseñar pantallas, sino definir de cero qué tipo de producto merecía ser construido.",
    },
    problem: {
      statement: "Diseñar un hábito diario en una categoría donde la mayoría de las apps se abandonan en la primera semana.",
      context:
        "[Nicole: agregar aquí el detalle específico del problema de negocio y de usuario que dio origen a Phero — qué gap de mercado se identificó y qué fricciones tenían las alternativas existentes.]",
      painPoints: [
        "[Pain point 1 — completar con hallazgo real de research]",
        "[Pain point 2 — completar con hallazgo real de research]",
      ],
    },
    research: {
      methods: [
        { name: "Entrevistas usuarios", description: "[Completar: cuántas, a quién, qué se buscaba entender]" },
        { name: "Encuestas", description: "[Completar: tamaño de muestra y foco de la encuesta]" },
        { name: "Benchmark", description: "[Completar: qué apps de bienestar se analizaron]" },
      ],
      findings: [
        "[Hallazgo 1 — completar con dato real]",
        "[Hallazgo 2 — completar con dato real]",
        "[Hallazgo 3 — completar con dato real]",
      ],
    },
    benchmark: {
      intro: "[Nicole: describir aquí qué apps de bienestar emocional se analizaron y con qué criterio.]",
      competitors: [
        { name: "[Competidor 1]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
        { name: "[Competidor 2]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
      ],
    },
    definition: {
      persona: {
        name: "[Nombre del arquetipo]",
        description: "[Completar descripción del usuario principal de Phero]",
        frustrations: ["[Frustración 1]", "[Frustración 2]", "[Frustración 3]"],
        goals: ["[Objetivo 1]", "[Objetivo 2]", "[Objetivo 3]"],
      },
      hmw: "¿Cómo podríamos ayudar a las personas a construir un hábito emocional sostenible sin que se sienta una obligación más?",
    },
    architecture: {
      intro: "[Nicole: completar con las decisiones de estructura y navegación tomadas para Phero.]",
      decisions: ["[Decisión clave 1]", "[Decisión clave 2]"],
    },
    wireframes: {
      intro: "[Nicole: completar con el proceso de ideación y exploración de wireframes.]",
      note: "[Nota editorial sobre iteraciones descartadas]",
    },
    designSystem: {
      intro: "[Nicole: completar con la descripción del sistema visual construido para Phero.]",
      atomicDesign: false,
      componentCount: "[Cantidad de componentes]",
      tokenCount: "[Cantidad de tokens]",
    },
    prototype: {
      intro: "[Nicole: completar con el alcance del prototipo construido y qué se validó con él.]",
    },
    results: {
      metrics: [
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
      ],
      closing: "[Nicole: completar con aprendizajes del proyecto y qué harías diferente.]",
    },
  },

  "hoktus-dashboard": {
    hero: {
      challenge: "Diseñar un dashboard operativo que reduzca el tiempo de reacción ante eventos de campo en tiempo real.",
    },
    overview: {
      context:
        "Hoktus gestiona operaciones de campo que requieren visibilidad inmediata sobre el estado de múltiples equipos y ubicaciones al mismo tiempo. El desafío central era diseñar una interfaz de datos densa que siguiera siendo legible bajo presión operativa.",
    },
    problem: {
      statement: "Los equipos de operaciones perdían tiempo crítico buscando información dispersa entre reportes y planillas.",
      context: "[Nicole: completar con el detalle del problema específico de gestión de operaciones que Hoktus buscaba resolver.]",
      painPoints: ["[Pain point 1]", "[Pain point 2]"],
    },
    research: {
      methods: [
        { name: "Entrevistas usuarios", description: "[Completar: con qué roles operativos se conversó]" },
        { name: "Análisis de datos", description: "[Completar: qué datos operativos existentes se analizaron]" },
        { name: "Benchmark", description: "[Completar: qué dashboards operativos se revisaron como referencia]" },
      ],
      findings: ["[Hallazgo 1]", "[Hallazgo 2]", "[Hallazgo 3]"],
    },
    benchmark: {
      intro: "[Nicole: completar con el análisis competitivo de dashboards operativos realizado para Hoktus.]",
      competitors: [
        { name: "[Competidor 1]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
        { name: "[Competidor 2]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
      ],
    },
    definition: {
      persona: {
        name: "[Nombre del arquetipo]",
        description: "[Completar descripción del usuario operativo principal]",
        frustrations: ["[Frustración 1]", "[Frustración 2]", "[Frustración 3]"],
        goals: ["[Objetivo 1]", "[Objetivo 2]", "[Objetivo 3]"],
      },
      hmw: "¿Cómo podríamos darle al equipo de operaciones visibilidad inmediata para que puedan reaccionar antes de que un problema escale?",
    },
    architecture: {
      intro: "[Nicole: completar con decisiones de estructura y jerarquía de datos del dashboard.]",
      decisions: ["[Decisión clave 1]", "[Decisión clave 2]"],
    },
    wireframes: {
      intro: "[Nicole: completar con el proceso de exploración de layouts del dashboard.]",
      note: "[Nota editorial sobre iteraciones descartadas]",
    },
    designSystem: {
      intro: "[Nicole: completar con la descripción del sistema visual construido para Hoktus.]",
      atomicDesign: false,
      componentCount: "[Cantidad de componentes]",
      tokenCount: "[Cantidad de tokens]",
    },
    prototype: {
      intro: "[Nicole: completar con el alcance del prototipo construido para Hoktus.]",
    },
    results: {
      metrics: [
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
      ],
      closing: "[Nicole: completar con aprendizajes del proyecto y qué harías diferente.]",
    },
  },

  parkeate: {
    hero: {
      challenge: "Diseñar una experiencia de estacionamiento inteligente apoyada en detección por IA, construida con vibe coding.",
    },
    overview: {
      context:
        "Parkeate buscaba resolver la fricción de encontrar estacionamiento disponible en tiempo real, integrando un modelo de detección por IA con una experiencia de usuario simple. El proyecto combinó diseño de producto con prototipado asistido por herramientas de IA generativa.",
    },
    problem: {
      statement: "Encontrar estacionamiento disponible seguía siendo una tarea de prueba y error para la mayoría de los conductores.",
      context: "[Nicole: completar con el detalle del problema específico que Parkeate buscaba resolver.]",
      painPoints: ["[Pain point 1]", "[Pain point 2]"],
    },
    research: {
      methods: [
        { name: "Entrevistas usuarios", description: "[Completar: a quién se entrevistó]" },
        { name: "Encuestas", description: "[Completar: tamaño y foco de la encuesta]" },
        { name: "Benchmark", description: "[Completar: qué apps de estacionamiento se analizaron]" },
      ],
      findings: ["[Hallazgo 1]", "[Hallazgo 2]", "[Hallazgo 3]"],
    },
    benchmark: {
      intro: "[Nicole: completar con el análisis competitivo realizado para Parkeate.]",
      competitors: [
        { name: "[Competidor 1]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
        { name: "[Competidor 2]", category: "[Categoría]", observations: ["[Observación]", "[Observación]"] },
      ],
    },
    definition: {
      persona: {
        name: "[Nombre del arquetipo]",
        description: "[Completar descripción del conductor tipo]",
        frustrations: ["[Frustración 1]", "[Frustración 2]", "[Frustración 3]"],
        goals: ["[Objetivo 1]", "[Objetivo 2]", "[Objetivo 3]"],
      },
      hmw: "¿Cómo podríamos usar detección en tiempo real para que un conductor encuentre estacionamiento sin dar vueltas?",
    },
    architecture: {
      intro: "[Nicole: completar con decisiones de estructura del flujo de búsqueda y reserva.]",
      decisions: ["[Decisión clave 1]", "[Decisión clave 2]"],
    },
    wireframes: {
      intro: "[Nicole: completar con el proceso de ideación del flujo de detección y reserva.]",
      note: "[Nota editorial sobre iteraciones descartadas]",
    },
    designSystem: {
      intro: "[Nicole: completar con la descripción del sistema visual construido para Parkeate.]",
      atomicDesign: false,
      componentCount: "[Cantidad de componentes]",
      tokenCount: "[Cantidad de tokens]",
    },
    prototype: {
      intro: "[Nicole: completar con el alcance del prototipo construido, incluyendo el uso de v0.dev y Cursor.]",
    },
    results: {
      metrics: [
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
        { value: "[Métrica]", label: "[Descripción de la métrica]" },
      ],
      closing: "[Nicole: completar con aprendizajes del proyecto y qué harías diferente.]",
    },
  },
}
