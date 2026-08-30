import parkeateDsColores from "../assets/parkeate/parkeate-ds-colores.jpg"
import parkeateDsTipografia from "../assets/parkeate/parkeate-ds-tipografia.jpg"
import parkeateDsElevations from "../assets/parkeate/parkeate-ds-elevations.jpg"
import parkeateDsComponentes from "../assets/parkeate/parkeate-ds-componentes.jpg"
import pheroDsFull1 from "../assets/phero/phero-ds-full-1.jpg"
import pheroDsFull2 from "../assets/phero/phero-ds-full-2.jpg"
import pheroLandingFull from "../assets/phero/phero-landing-full.jpg"
import banadosDsColores from "../assets/banados/banados-ds-colores.jpg"
import banadosDsHeadingsDesktop from "../assets/banados/banados-ds-headings-desktop.jpg"
import banadosDsHeadingsMobile from "../assets/banados/banados-ds-headings-mobile.jpg"
import banadosDsIconos from "../assets/banados/banados-ds-iconos.jpg"
import banadosDsParrafos from "../assets/banados/banados-ds-parrafos.jpg"
import banadosDsLabels from "../assets/banados/banados-ds-labels.jpg"
import banadosDsAtoms from "../assets/banados/banados-ds-atoms.jpg"
import banadosDsMolecules from "../assets/banados/banados-ds-molecules.jpg"
import banadosDsOrganisms from "../assets/banados/banados-ds-organisms.jpg"
import banadosPrototipoFlujo from "../assets/banados/banados-prototipo-flujo.mp4"
import fittrackScreenSesiones from "../assets/fitTrack/fittrack-screen-sesiones.jpg"
import fittrackScreenNuevaSesion from "../assets/fitTrack/fittrack-screen-nueva-sesion.jpg"
import fittrackScreenEvolucion from "../assets/fitTrack/fittrack-screen-evolucion.jpg"
import fittrackPrototipoFlujo from "../assets/fitTrack/fittrack-prototipo-flujo.mp4"

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
      hideImage: true,
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
      fullImages: [
        { src: pheroDsFull1, label: "Sistema de diseño — fundaciones: type scale, colores, grid e iconografía" },
        { src: pheroDsFull2, label: "Sistema de diseño — componentes" },
        { src: pheroLandingFull, label: "Página web completa" },
      ],
    },
  },

  "hoktus-dashboard": {
    hero: {
      challenge: "Construir el sistema de diseño del software de Hoktus, sosteniendo consistencia visual a medida que el producto crecía.",
    },
    overview: {
      context:
        "Hoktus es una plataforma que usa inteligencia artificial para automatizar el reclutamiento y la contratación de personal operativo a gran escala en Latinoamérica, gestionando todo el proceso —desde el primer contacto hasta la validación de documentos— a través de WhatsApp. El trabajo con Hoktus se enfocó específicamente en el sistema de diseño de su software.",
    },
    designSystem: {
      intro:
        "Se diseñó el sistema de diseño del software de Hoktus: paleta de colores, tipografía, iconografía y una librería de componentes reutilizables para sostener el producto de forma consistente a medida que se agregaban nuevas vistas.",
      atomicDesign: false,
      componentCount: "[Cantidad de componentes]",
      tokenCount: "[Cantidad de tokens]",
    },
  },

  parkeate: {
    hero: {
      challenge:
        "Diseñar el sistema de diseño y las pantallas de la aplicación de Parkeate, una plataforma que conecta a dueños de estacionamientos con conductores para arrendarlos por minuto.",
    },
    overview: {
      context:
        "Parkeate es una startup chilena fundada en 2019 por Dominique Dubois, que conecta a dueños de estacionamientos sin uso —en comunidades de edificios, condominios y empresas— con conductores que buscan arrendar un espacio por minuto, hora o mes, con precios entre $10 y $54 por minuto. Para el conductor, la propuesta es encontrar y reservar en segundos: buscar por ubicación, elegir el espacio y confirmar la reserva. Para el propietario, es una forma de convertir un estacionamiento en desuso en un ingreso. La plataforma ha participado en programas como Start-Up Chile, y ha expandido su operación desde Santiago hacia Concepción y Viña del Mar, además de un piloto en Dallas, Estados Unidos. El trabajo con Parkeate se enfocó en diseñar el sistema de diseño y las pantallas de la aplicación.",
    },
    designSystem: {
      intro:
        "Se diseñó el sistema de diseño y las pantallas de la aplicación de Parkeate: paleta de colores, tipografía, elevaciones y una librería de componentes para sostener la experiencia de búsqueda, reserva y arriendo de estacionamientos.",
      atomicDesign: false,
      fullImages: [
        { src: parkeateDsColores, label: "Paleta de colores" },
        { src: parkeateDsTipografia, label: "Tipografía" },
        { src: parkeateDsElevations, label: "Elevaciones" },
        { src: parkeateDsComponentes, label: "Componentes" },
      ],
    },
  },

  banados: {
    hero: {
      challenge:
        "Diseñar el sistema de diseño de un software interno para digitalizar los procesos de venta, órdenes de compra y cotizaciones de Bañados.",
    },
    overview: {
      context:
        "Bañados es una empresa chilena fabricante de productos químicos e implementos de aseo industrial y del hogar, con más de cinco décadas de trayectoria y clientes como Nestlé, Agrosuper y Sodexo, operando al por mayor y menor desde su sede en Renca y una sucursal en Puerto Montt. El proyecto consistió en diseñar el sistema de diseño de un software interno para digitalizar sus procesos de venta, emisión de órdenes de compra y cotizaciones, trabajando como UX/UI Designer freelance.",
    },
    research: {
      methods: [
        {
          name: "Visitas en terreno",
          description: "Visitas a las bodegas y oficinas de Bañados para conversar directamente con los stakeholders involucrados en el cambio.",
        },
        {
          name: "Levantamiento de flujos actuales",
          description: "Registro de los procesos vigentes de venta, emisión de órdenes de compra y cotizaciones, como base para el nuevo software.",
        },
      ],
    },
    designSystem: {
      intro:
        "Se diseñó el sistema de diseño del software interno de Bañados con metodología Atomic Design: fundaciones de paleta de colores, escala tipográfica e iconografía, y una librería de componentes (átomos, moléculas y organismos) para sostener los flujos de venta, órdenes de compra y cotizaciones de forma consistente.",
      atomicDesign: true,
      componentCount: "Componentes organizados en átomos, moléculas y organismos",
      tokenCount: "Tokens de color y tipografía documentados",
      fullImages: [
        { src: banadosDsColores, label: "Paleta de colores" },
        { src: banadosDsHeadingsDesktop, label: "Tipografía — encabezados desktop" },
        { src: banadosDsHeadingsMobile, label: "Tipografía — encabezados mobile" },
        { src: banadosDsParrafos, label: "Tipografía — párrafos" },
        { src: banadosDsLabels, label: "Tipografía — labels" },
        { src: banadosDsIconos, label: "Iconografía" },
        { src: banadosDsAtoms, label: "Componentes — átomos" },
        { src: banadosDsMolecules, label: "Componentes — moléculas" },
        { src: banadosDsOrganisms, label: "Componentes — organismos" },
      ],
    },
    prototype: {
      intro:
        "El prototipo muestra el flujo final diseñado para el software interno de Bañados, navegando de principio a fin uno de los procesos digitalizados.",
      video: banadosPrototipoFlujo,
      videoAspectRatio: "1400/854",
    },
  },

  fittrack: {
    hero: {
      challenge:
        "Diseñar y desarrollar con vibe coding una app para llevar el registro y los avances de tus entrenamientos en el gimnasio, día a día.",
    },
    overview: {
      context:
        "FitTrack es un proyecto personal: una app para llevar el registro y la evolución de los entrenamientos de gimnasio día a día, permitiendo ver el progreso a lo largo del tiempo. El proceso se construyó en un 90% con inteligencia artificial, desde el research hasta el desarrollo.",
    },
    problem: {
      statement:
        "El 85% de los usuarios abandona el registro de sus entrenamientos por la fricción de ingresar datos manualmente bajo fatiga muscular.",
      context:
        "FitTrack elimina la sobrecarga mental de ese registro mediante un flujo lineal y controles táctiles optimizados para el gimnasio, reduciendo a cero el uso del teclado nativo.",
    },
    research: {
      methods: [
        {
          name: "Entrevistas en terreno",
          description: "Entrevistas a 6 personas para entender cómo abordaban el registro de sus entrenamientos.",
        },
        {
          name: "Análisis con IA",
          description: "Los hallazgos de las entrevistas se analizaron con IA para tomar las decisiones de diseño.",
        },
      ],
      findings: [
        "Ambos usuarios exigen gráficos detallados sobre composición corporal y evolución de cargas: el progreso visual es un requisito, no un extra.",
        "El registro manual de series y pesos debe ser automático o extremadamente rápido — si toma tiempo, la app se abandona.",
        "Las herramientas actuales (reloj inteligente, apps de gimnasio, planillas) cubren partes del problema, pero ninguna resuelve el registro completo sin fricción.",
      ],
      spectrum: {
        label: "Dependencia vs. autonomía en el entrenamiento",
        points: [
          {
            name: "Daniela",
            description: "Depende de la guía constante de un coach para saber qué y cómo entrenar.",
          },
          {
            name: "Ignacio",
            description: "Busca estructura propia y planifica sus rutinas con anticipación.",
          },
        ],
      },
    },
    prototype: {
      intro:
        "El primer MVP se generó en Stitch a partir de un prompt, orientando el diseño con imágenes de referencia y la paleta de colores deseada. Luego se llevó a Antigravity para pasar a desarrollo y seguir puliendo las funcionalidades.",
      hideEmbed: true,
      video: fittrackPrototipoFlujo,
      videoAspectRatio: "800/1410",
      videoGradient: "radial-gradient(circle at 25% 15%, #24405f 0%, #0e192b 45%, #04070d 100%)",
    },
    finalScreens: {
      screens: [
        { label: "Sesiones", src: fittrackScreenSesiones, instruction: "Vista principal con la sesión en curso y la racha de consistencia" },
        { label: "Nueva sesión", src: fittrackScreenNuevaSesion, instruction: "Registro de ejercicios con controles táctiles, sin teclado" },
        { label: "Evolución", src: fittrackScreenEvolucion, instruction: "Visualización del progreso de peso y volumen por ejercicio" },
      ],
    },
  },
}
