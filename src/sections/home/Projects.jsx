import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../../data/projects"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ProjectCard = ({ project, size = "half" }) => (
  <motion.div {...revealProps} className={`project-card project-card--${size}`}>
    <Link
      to={project.type === "empresa" ? `/empresa/${project.slug}` : `/proyecto/${project.slug}`}
      className="project-card__link"
      data-cursor-hover
    >
      <div
        className="project-card__image"
        style={
          project.image
            ? { backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }
            : { background: project.color }
        }
      >
        {project.badge && <span className="pill project-card__badge">{project.badge}</span>}
      </div>
      <div className="project-card__meta">
        <span className="project-card__number">{project.number}</span>
        <div className="project-card__text">
          <h3 className="project-card__name font-display">{project.name}</h3>
          <p className="project-card__description">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
)

const buildRows = (items) => {
  const rows = []
  let i = 0
  let full = true
  while (i < items.length) {
    if (full || i + 1 >= items.length) {
      rows.push({ type: "full", items: [items[i]] })
      i += 1
    } else {
      rows.push({ type: "pair", items: [items[i], items[i + 1]] })
      i += 2
    }
    full = !full
  }
  return rows
}

const Projects = () => {
  const rows = buildRows(projects)

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Proyectos seleccionados
        </motion.p>

        <div className="projects__grid">
          {rows.map((row) =>
            row.type === "full" ? (
              <ProjectCard key={row.items[0].slug} project={row.items[0]} size="full" />
            ) : (
              <div className="projects__row" key={row.items.map((p) => p.slug).join("-")}>
                {row.items.map((p) => (
                  <ProjectCard key={p.slug} project={p} size="half" />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
