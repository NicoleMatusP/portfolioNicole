import cardProyectoIntranet from "../assets/aiep/card-proyecto-intranet.jpg"

export const companies = {
  aiep: {
    name: "AIEP",
    period: "Abr 2025 — Jul 2026",
    heroDescription:
      "AIEP es la institución de educación superior técnico-profesional más grande de Chile, con más de 100.000 estudiantes en todo el país. Durante este período se trabajó dentro del equipo de producto digital, en la modernización de plataformas internas y el rediseño de la presencia web institucional.",
    roleContext: [
      { label: "Mi rol", value: "UX/UI Designer" },
      { label: "Período", value: "Abril 2025 — Julio 2026" },
      { label: "Equipo", value: "Célula de producto digital multidisciplinaria" },
      { label: "Metodología", value: "Ágil · Sprints · Backlog compartido" },
      { label: "Proyectos", value: "2 casos documentados" },
    ],
    aboutTeam: {
      paragraph:
        "La célula de trabajo era multidisciplinaria, compuesta por diseño, contenido, área comercial y TI. Se trabajaba bajo metodología ágil con un backlog compartido donde se organizaban las tareas por sprint. Esta forma de trabajar permitía colaborar directamente con perfiles muy distintos al diseño y tomar decisiones considerando restricciones técnicas, de negocio y de contenido al mismo tiempo.",
      tags: ["Sprints", "Backlog compartido", "Equipo multidisciplinario"],
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
        slug: "aiep-hubspot",
        name: "Sitio Institucional — Migración a HubSpot",
        description:
          "Rediseño y migración de aiep.cl trabajando en célula ágil con equipo interno y la agencia Cebra.",
        tags: ["Rediseño Web", "HubSpot", "Metodología Ágil"],
        color: "#0D1F3C",
        image: {
          label: "Sitio Institucional",
          instruction: "Subir: captura del home del nuevo sitio aiep.cl en HubSpot, vista desktop",
        },
      },
    ],
  },
}

export const getCompanyBySlug = (slug) => companies[slug]
