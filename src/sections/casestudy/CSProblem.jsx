import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSProblem = ({ content, italic = false }) => {
  return (
    <section className="section cs-problem">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          El problema
        </motion.p>

        <motion.h2
          {...revealProps}
          className={`cs-problem__statement ${italic ? "font-display-italic" : "font-display"}`}
        >
          {content.statement}
        </motion.h2>

        {content.context && (
          <motion.p {...revealProps} className="cs-problem__context">
            {content.context}
          </motion.p>
        )}

        {content.stats && content.stats.length > 0 && (
          <div className="cs-problem__stats">
            {content.stats.map((stat) => (
              <motion.div {...revealProps} key={stat.label} className="cs-problem__stat">
                <span className="cs-problem__stat-value font-display">{stat.value}</span>
                <p className="cs-problem__stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {content.painPoints && content.painPoints.length > 0 && (
          <ul className="cs-problem__pain-points">
            {content.painPoints.map((point) => (
              <motion.li {...revealProps} key={point}>
                <span className="cs-problem__pain-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default CSProblem
