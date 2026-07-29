import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSResults = ({ content }) => {
  return (
    <section className="section cs-results">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Resultados
        </motion.p>

        <div className="cs-results__grid">
          {content.metrics.map((metric, i) => (
            <motion.div {...revealProps} key={i} className="cs-results__metric">
              <span className="cs-results__value font-display">{metric.value}</span>
              <p className="cs-results__label">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...revealProps} className="cs-results__closing">
          {content.closing}
        </motion.p>

        <motion.div {...revealProps} className="cs-results__image">
          <ImagePlaceholder
            label="Producto en contexto"
            aspectRatio="16/9"
            instruction="Aquí van: capturas del producto live o pantallas finales en contexto de uso real"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CSResults
