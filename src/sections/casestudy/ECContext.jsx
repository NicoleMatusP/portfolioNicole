import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECContext = ({ data }) => {
  const metadata = [
    { label: "Empresa", value: data.company },
    { label: "Año", value: data.year },
    { label: "Duración", value: data.duration },
    { label: "Mi rol", value: data.role },
    { label: "Herramientas", value: data.tools.join(" · ") },
  ]

  return (
    <section className="section cs-overview">
      <div className="container cs-overview__grid">
        <motion.div {...revealProps} className="cs-overview__text">
          <p className="eyebrow">El contexto</p>
          <p className="cs-overview__paragraph">{data.context}</p>
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

export default ECContext
