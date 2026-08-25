import pheroLandingHero from "../assets/phero/phero-landing-hero.jpg"
import pheroCardTecnologia from "../assets/phero/phero-card-tecnologia.jpg"
import pheroCardOperacion from "../assets/phero/phero-card-operacion.jpg"
import pheroMobileOrdenes from "../assets/phero/phero-mobile-ordenes.jpg"
import pheroPartnersPortrait from "../assets/phero/phero-partners-portrait.jpg"
import pheroDsTipografia from "../assets/phero/phero-ds-tipografia.jpg"
import pheroDsColores from "../assets/phero/phero-ds-colores.jpg"
import pheroDsIconos from "../assets/phero/phero-ds-iconos.jpg"
import pheroDashboard from "../assets/phero/phero-dashboard.jpg"

export const caseStudyContent = {
  "phero-app": {
    hero: {
      challenge:
        "Diseñar la página web y el sistema de diseño completo — desktop y mobile — de una startup logística que integraba couriers independientes en una sola red de distribución.",
    },
    overview: {
      context:
        "Phero nació en 2023 en Santiago como una plataforma que integraba los servicios de distintas empresas de delivery y courier de Chile —desde operadores locales hasta actores como DHL o 99minutos— en una sola red de distribución descentralizada. En lugar de depender de la capacidad fija de un solo transportista, la propuesta permitía a marcas de e-commerce escalar sus entregas absorbiendo demanda entre los distintos operadores integrados a la plataforma. Se trabajó directamente con el equipo fundador de la startup durante aproximadamente un año, a cargo del diseño de la página web y de todo el sistema de diseño del software, tanto en su versión desktop como mobile.",
    },
    problem: {
      statement:
        "Las empresas de delivery locales no podían escalar al ritmo del e-commerce, y eso se traducía en cobertura insuficiente y ventas perdidas para las marcas que dependían de ellas.",
      context: "La brecha entre demanda y capacidad ya es medible, tanto en Latinoamérica como en Chile:",
      stats: [
        { value: "25M", label: "Envíos al día en Latinoamérica" },
        { value: "72%", label: "Los realizan empresas de delivery locales" },
        { value: "14%", label: "Del retail chileno ya es venta online" },
        { value: "4,4M", label: "Transacciones en un solo Cyber Monday en Chile" },
      ],
      painPoints: [
        "Los couriers coordinaban cada despacho de forma manual, sin visibilidad compartida del estado de la carga entre bodega y ruta.",
        "El personal de bodega no tenía forma de anticipar cuándo un transportista no daría abasto para la demanda del día.",
        "Las marcas perdían ventas cuando su transportista principal no tenía cobertura, sin un canal simple para derivar el excedente a otro operador.",
      ],
    },
    research: {
      methods: [
        {
          name: "Entrevistas en terreno",
          description: "Conversaciones con couriers y personal de bodega sobre los cuellos de botella del despacho diario.",
        },
        {
          name: "Análisis de mercado",
          description: "Datos de crecimiento del e-commerce y fragmentación de las empresas de delivery en Chile.",
        },
      ],
      findings: [
        "La coordinación entre bodega y ruta dependía de canales informales, sin un registro compartido del estado de cada pedido.",
        "La capacidad de reparto era fija y no se ajustaba a los picos reales de demanda del día.",
      ],
    },
    definition: {
      hideImage: true,
      persona: {
        name: "Encargado de operaciones logísticas",
        description:
          "Gestiona el despacho diario de una marca o empresa de delivery entre distintas bodegas y couriers, y necesita una sola vista confiable de dónde está cada pedido.",
        frustrations: [
          "No tiene visibilidad en tiempo real de qué pedidos están en ruta, en bodega o con incidencias.",
          "Depende de canales manuales (llamadas, planillas, WhatsApp) para coordinar distintos transportistas.",
          "No puede anticipar cuándo la capacidad de un courier no alcanzará para cubrir la demanda del día.",
        ],
        goals: [
          "Centralizar la operación de despacho en una sola herramienta.",
          "Redistribuir el excedente de pedidos a otros couriers de la red sin fricción.",
          "Tener trazabilidad end-to-end de cada entrega, desde bodega hasta destino.",
        ],
      },
      hmw: "¿Cómo podríamos darle a un operador logístico una sola vista para coordinar múltiples couriers sin perder trazabilidad?",
    },
    architecture: {
      intro:
        "El software de Phero debía servir a distintos roles sobre una misma base operativa: administradores de la marca, couriers en ruta y personal de bodega. La arquitectura de información se organizó a partir de esos tres roles, priorizando el mapa de seguimiento en tiempo real como vista central — la necesidad más repetida en las conversaciones con couriers y personal de bodega.",
      roles: [
        {
          name: "Administrador",
          view: "Dashboard y métricas de servicio",
          solves: "Visibilidad general de la operación y niveles de servicio por cliente",
        },
        {
          name: "Courier",
          view: "Mapa con ruta optimizada",
          solves: "Qué entregar, en qué orden y con qué prioridad",
        },
        {
          name: "Bodega",
          view: "Estado de pedidos por retirar",
          solves: "Coordinar con el courier correcto antes de que llegue",
        },
      ],
      decisions: [
        "Navegación lateral fija con acceso directo a Dashboard, Pedidos, Bodegas y Configuración, priorizando las tareas de uso diario por sobre la exploración.",
        "El seguimiento de entregas se diseñó como mapa en tiempo real, no como tabla, para que la trazabilidad fuera visual e inmediata.",
        "Se definieron estados y permisos distintos por rol — administrador, courier y bodega — de modo que cada perfil viera solo la información relevante para su tarea.",
      ],
    },
    designSystem: {
      intro:
        "Se construyó desde cero el sistema de diseño de Phero, pensado para sostener tanto la página web de la marca como el software desktop y mobile. Se definieron paleta, tipografía, iconografía propia y estados de componentes para los distintos roles del producto, incluyendo flujos específicos como el chat entre roles, el diálogo de optimización de ruta, el escaneo de paquetes y el resumen de pagos para couriers.",
      atomicDesign: true,
      componentCount: "Componentes organizados en átomos, moléculas y organismos",
      tokenCount: "Tokens de color, tipografía y espaciado documentados",
      images: {
        palette: pheroDsColores,
        typography: pheroDsTipografia,
        components: pheroDsIconos,
      },
    },
    prototype: {
      intro:
        "El prototipo en Figma cubrió los flujos principales del software: creación y seguimiento de pedidos, coordinación entre bodegas, y el flujo del courier en ruta, incluyendo el escaneo de paquetes y el resumen de pago por entregas realizadas.",
    },
    finalScreens: {
      hero: pheroLandingHero,
      screens: [
        { label: "Tecnología", src: pheroCardTecnologia, instruction: "Módulo de integración tecnológica del landing page" },
        { label: "Operación", src: pheroCardOperacion, instruction: "Módulo de incorporación operativa a la red de distribución" },
        { label: "Pedidos — mobile", src: pheroMobileOrdenes, instruction: "Vista de pedidos del courier en la versión mobile" },
        { label: "Red de partners", src: pheroPartnersPortrait, instruction: "Operadores logísticos integrados a la red" },
      ],
    },
    results: {
      metrics: [
        { value: "20% MoM", label: "Crecimiento orgánico mensual de la operación mientras la plataforma diseñada estaba en uso" },
        { value: "3", label: "Roles de usuario cubiertos por el sistema de diseño: administrador, courier y bodega" },
        { value: "0 → 1", label: "Página web y sistema de diseño completo, construidos desde cero en un año" },
      ],
      closing:
        "Phero cerró operaciones cerca de un año después de este proyecto, tras no lograr sostener el negocio en el tiempo — un desenlace frecuente entre startups tempranas de logística en Latinoamérica. Diseñar en solitario para un software B2B naciente significó tomar decisiones con información incompleta, sostener consistencia visual sin un equipo de diseño detrás, y traducir procesos operativos reales —de couriers y personal de bodega— en decisiones de interfaz, todo mientras el producto y el negocio se definían en paralelo.",
      image: pheroDashboard,
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
