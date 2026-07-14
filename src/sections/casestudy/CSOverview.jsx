import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSOverview = ({ project, content }) => {
  const metadata = [
    { label: "Empresa", value: project.company },
    { label: "Año", value: project.year },
    { label: "Duración", value: project.duration },
    { label: "Mi rol", value: project.role },
    { label: "Herramientas", value: project.tools.join(", ") },
  ]

  return (
    <section className="section cs-overview">
      <div className="container cs-overview__grid">
        <motion.div {...revealProps} className="cs-overview__text">
          <p className="eyebrow">El contexto</p>
          <p className="cs-overview__paragraph">{content.context}</p>
        </motion.div>

        <motion.div {...revealProps} className="cs-overview__meta">
          {metadata.map((item) => (
            <div key={item.label} className="cs-overview__meta-row">
              <span className="cs-overview__meta-label">{item.label}</span>
              <span className="cs-overview__meta-value">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CSOverview
