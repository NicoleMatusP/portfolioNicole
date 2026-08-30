import projectAiep from "../assets/aiep/proyecto-aiep.jpg"
import projectPhero from "../assets/phero/fondo_web_phero.jpg"
import projectBanados from "../assets/banados/banados-cover.jpg"
import projectFitTrack from "../assets/fitTrack/fittrack-cover.jpg"
import projectParkeate from "../assets/parkeate/parkeate-cover.jpg"

const allProjects = [
  {
    slug: "aiep",
    type: "empresa",
    number: "01",
    name: "AIEP",
    description:
      "Estandarización de la intranet estudiantil y diseño del sitio web de Educación Continua.",
    tags: ["Design System", "Rediseño Web", "Metodología Ágil"],
    color: "#1A1A2E",
    image: projectAiep,
    year: "2025 — 2026",
    role: "UX/UI Designer",
    badge: "2 casos de estudio",
  },
  {
    slug: "fittrack",
    number: "02",
    name: "FitTrack",
    description: "App de tracking de entrenamientos, diseñada y desarrollada con vibe coding.",
    tags: ["Product Design", "Vibe Coding", "0 a 1"],
    color: "#0E192B",
    image: projectFitTrack,
    gradient:
      "radial-gradient(circle at 82% 8%, rgba(223,243,66,0.18) 0%, rgba(223,243,66,0) 26%), radial-gradient(circle at 15% 85%, rgba(223,243,66,0.12) 0%, rgba(223,243,66,0) 30%), radial-gradient(circle at 25% 15%, #1a2b45 0%, #0e192b 45%, #050a12 100%)",
    year: "2025",
    role: "Product Designer",
    company: "FitTrack",
    tools: ["Stitch", "Antigravity"],
    duration: "Proyecto personal",
  },
  {
    slug: "parkeate",
    number: "03",
    name: "Parkeate",
    description: "Sistema de diseño y app para arrendar estacionamientos por minuto.",
    tags: ["UX/UI", "Design System", "Vibe Coding"],
    color: "#701545",
    image: projectParkeate,
    gradient:
      "radial-gradient(circle at 82% 8%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 22%), radial-gradient(circle at 12% 88%, rgba(158,29,97,0.20) 0%, rgba(158,29,97,0) 32%), radial-gradient(circle at 25% 15%, #9e1d61 0%, #701545 42%, #232529 100%)",
    year: "2024",
    role: "Product Designer",
    company: "Parkeate",
    tools: ["Figma", "v0.dev", "Cursor", "React"],
    duration: "3 meses",
  },
  {
    slug: "banados",
    number: "04",
    name: "Bañados",
    description: "Sistema de diseño para el software interno de venta, órdenes de compra y cotizaciones de Bañados.",
    tags: ["Design System", "UX Research", "UI Design"],
    color: "#0E2A47",
    image: projectBanados,
    gradient:
      "radial-gradient(circle at 82% 8%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 22%), radial-gradient(circle at 12% 88%, rgba(160,195,255,0.20) 0%, rgba(160,195,255,0) 32%), radial-gradient(circle at 25% 15%, #416bd8 0%, #0038d3 32%, #002896 58%, #04091a 100%)",
    year: "2025",
    role: "UX/UI Designer Freelance",
    company: "Bañados",
    tools: ["Figma"],
    duration: "5 meses",
  },
  {
    slug: "phero-app",
    number: "05",
    name: "Phero",
    description: "Plataforma de última milla que integra couriers independientes en una red de distribución descentralizada.",
    tags: ["UX/UI Design", "Design System", "0 a 1"],
    color: "#12245C",
    image: projectPhero,
    gradient:
      "linear-gradient(200deg, #64627c 0%, #616c86 15%, #694e67 40%, #702b43 55%, #272063 75%, #05257a 100%)",
    year: "2023 — 2024",
    role: "UX/UI Designer",
    company: "Phero",
    tools: ["Figma"],
    duration: "1 año",
  },
  {
    slug: "hoktus-dashboard",
    number: "06",
    name: "Hoktus",
    description: "Sistema de diseño para la plataforma de reclutamiento con IA de Hoktus.",
    tags: ["Design System", "UI Design"],
    color: "#0D2137",
    year: "2024",
    role: "UX/UI Designer",
    company: "Hoktus",
    tools: ["Figma"],
    duration: "5 meses",
    hidden: true,
  },
]

export const projects = allProjects.filter((p) => !p.hidden)

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

export const getAdjacentProjects = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return { prev, next }
}
