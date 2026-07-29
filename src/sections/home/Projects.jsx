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
      <div className="project-card__image" style={{ background: project.color }}>
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

const Projects = () => {
  const [p1, p2, p3, p4] = projects

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Proyectos seleccionados
        </motion.p>

        <div className="projects__grid">
          <ProjectCard project={p1} size="full" />
          <div className="projects__row">
            <ProjectCard project={p2} size="half" />
            <ProjectCard project={p3} size="half" />
          </div>
          <ProjectCard project={p4} size="full" />
        </div>
      </div>
    </section>
  )
}

export default Projects
