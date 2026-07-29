import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECLearnings = ({ data }) => {
  return (
    <section className="section cs-results">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Aprendizajes
        </motion.p>

        {data.statusPill && (
          <motion.span {...revealProps} className="pill pill--accent ec-learnings__status">
            {data.statusPill}
          </motion.span>
        )}

        <div className="cs-results__grid">
          {data.metrics.map((metric) => (
            <motion.div {...revealProps} key={metric.label} className="cs-results__metric">
              <span className="cs-results__value font-display">{metric.value}</span>
              <p className="cs-results__label">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-results__closing">
          {data.closing.map((paragraph, i) => (
            <motion.p {...revealProps} key={i}>
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ECLearnings
