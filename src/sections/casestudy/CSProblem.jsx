import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSProblem = ({ content }) => {
  return (
    <section className="section cs-problem">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          El problema
        </motion.p>

        <motion.h2 {...revealProps} className="cs-problem__statement font-display">
          {content.statement}
        </motion.h2>

        {content.context && (
          <motion.p {...revealProps} className="cs-problem__context">
            {content.context}
          </motion.p>
        )}

        {content.painPoints && content.painPoints.length > 0 && (
          <ul className="cs-problem__pain-points">
            {content.painPoints.map((point) => (
              <motion.li {...revealProps} key={point}>
                {point}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default CSProblem
