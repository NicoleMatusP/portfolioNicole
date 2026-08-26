import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSResearch = ({ content }) => {
  return (
    <section className="section cs-research">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Research
        </motion.p>
        <motion.h3 {...revealProps} className="cs-research__title font-display">
          Métodos utilizados
        </motion.h3>

        <div className="cs-research__methods">
          {content.methods.map((method, i) => (
            <motion.div {...revealProps} key={method.name} className="cs-research__method">
              <span className="cs-research__method-icon font-display">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="cs-research__method-name">{method.name}</h4>
              <p className="cs-research__method-description">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3 {...revealProps} className="cs-research__title font-display cs-research__title--spaced">
          Hallazgos principales
        </motion.h3>

        <div className="cs-research__findings">
          {content.findings.map((finding, i) => (
            <motion.div {...revealProps} key={finding} className="cs-research__finding-card">
              <span className="cs-research__finding-number font-display">{String(i + 1).padStart(2, "0")}</span>
              <p>{finding}</p>
            </motion.div>
          ))}
        </div>

        {!content.hideImage && (
          <motion.div {...revealProps} className="cs-research__image">
            <ImagePlaceholder
              label="Research"
              aspectRatio="16/6"
              instruction="Aquí van: capturas de entrevistas, affinity map, survey results"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CSResearch
