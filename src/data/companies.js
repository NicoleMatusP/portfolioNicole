import cardProyectoIntranet from "../assets/aiep/card-proyecto-intranet.jpg"
import cardEducacionContinua from "../assets/aiep/educacion-continua-inicio.jpg"

export const companies = {
  aiep: {
    name: "AIEP",
    period: "Abr 2025 — Jul 2026",
    heroDescription:
      "AIEP es la institución de educación superior técnico-profesional más grande de Chile, con más de 100.000 estudiantes en todo el país. Durante este período se formó parte del equipo de Experiencia, trabajando en la modernización de plataformas internas y el rediseño de la presencia web institucional.",
    roleContext: [
      { label: "Mi rol", value: "UX/UI Designer" },
      { label: "Período", value: "Abril 2025 — Julio 2026" },
      { label: "Equipo", value: "Equipo de Experiencia · Célula de producto digital" },
      { label: "Metodología", value: "Ágil · Sprints · Backlog compartido" },
      { label: "Proyectos", value: "2 casos documentados" },
    ],
    aboutTeam: {
      paragraph:
        "Se formó parte del equipo de Experiencia de AIEP durante todo este período. El día a día, sin embargo, se organizaba bajo una célula de producto digital multidisciplinaria, compuesta por diseño, contenido, área comercial y TI — un cambio en la metodología de trabajo, no en la pertenencia al equipo. Se trabajaba bajo metodología ágil con un backlog compartido donde se organizaban las tareas por sprint. Esta forma de trabajar permitía colaborar directamente con perfiles muy distintos al diseño y tomar decisiones considerando restricciones técnicas, de negocio y de contenido al mismo tiempo.",
      tags: ["Equipo de Experiencia", "Sprints", "Backlog compartido", "Equipo multidisciplinario"],
    },
    caseStudies: [
      {
        number: "01",
        slug: "aiep-intranet",
        name: "Intranet Estudiantil — Estandarización de módulos",
        description:
          "Rediseño de flujos y pantallas para unificar la experiencia de +40.000 estudiantes coordinando múltiples proveedores.",
        tags: ["Design System", "UX/UI", "Coordinación con proveedores"],
        color: "#1A1A2E",
        image: {
          label: "Intranet Estudiantil",
          instruction: "Subir: captura de la pantalla principal de la intranet ya rediseñada, vista desktop",
          src: cardProyectoIntranet,
        },
      },
      {
        number: "02",
        slug: "aiep-educacion-continua",
        name: "Sitio Web Educación Continua",
        description:
          "Diseño de la propuesta end-to-end para ordenar la oferta de cursos y diplomados dentro del ecosistema digital de AIEP.",
        tags: ["Discovery", "UX/UI", "HubSpot"],
        color: "#0D1F3C",
        image: {
          label: "Sitio Web Educación Continua",
          instruction: "Subir: captura de la pantalla de inicio del sitio, vista desktop",
          src: cardEducacionContinua,
        },
      },
    ],
  },
}

export const getCompanyBySlug = (slug) => companies[slug]
