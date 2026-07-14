export const projects = [
  {
    slug: "aiep-campus-digital",
    number: "01",
    name: "AIEP Campus Digital",
    description: "Rediseño de la plataforma educativa para +40.000 estudiantes.",
    tags: ["UX Research", "Design System", "Figma"],
    color: "#1A1A2E",
    year: "2025",
    role: "Product Designer",
    company: "AIEP",
    tools: ["Figma", "FigJam", "Maze", "React"],
    duration: "6 meses",
  },
  {
    slug: "phero-app",
    number: "02",
    name: "Phero App",
    description: "Aplicación móvil de bienestar emocional. De 0 a lanzamiento.",
    tags: ["Product Design", "Prototyping", "React handoff"],
    color: "#2D1B4E",
    year: "2024",
    role: "UX/UI Designer",
    company: "Phero",
    tools: ["Figma", "Maze", "Notion"],
    duration: "4 meses",
  },
  {
    slug: "hoktus-dashboard",
    number: "03",
    name: "Hoktus Dashboard",
    description: "Sistema de gestión para operaciones de campo en tiempo real.",
    tags: ["UI Design", "Data Viz", "Frontend"],
    color: "#0D2137",
    year: "2024",
    role: "UX/UI Designer",
    company: "Hoktus",
    tools: ["Figma", "React", "CSS"],
    duration: "5 meses",
  },
  {
    slug: "parkeate",
    number: "04",
    name: "Parkeate",
    description: "App de estacionamiento inteligente con IA de detección.",
    tags: ["UX/UI", "AI Integration", "Vibe Coding"],
    color: "#1A2E1A",
    year: "2024",
    role: "Product Designer",
    company: "Parkeate",
    tools: ["Figma", "v0.dev", "Cursor", "React"],
    duration: "3 meses",
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

export const getAdjacentProjects = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return { prev, next }
}
