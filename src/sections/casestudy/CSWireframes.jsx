import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSWireframes = ({ content }) => {
  return (
    <section className="section cs-wireframes">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Exploración y wireframes
        </motion.p>
        <motion.p {...revealProps} className="cs-wireframes__intro">
          {content.intro}
        </motion.p>

        <div className="cs-wireframes__grid">
          <motion.div {...revealProps}>
            <ImagePlaceholder
              label="Wireframe — flujo principal"
              aspectRatio="3/4"
              instruction="Aquí va: wireframe de baja fidelidad del flujo principal, versión final validada"
            />
          </motion.div>
          <motion.div {...revealProps}>
            <ImagePlaceholder
              label="Wireframe — flujo secundario"
              aspectRatio="3/4"
              instruction="Aquí va: wireframe de una pantalla secundaria relevante del mismo flujo"
            />
          </motion.div>
        </div>

        <motion.p {...revealProps} className="cs-wireframes__note">
          {content.note}
        </motion.p>
      </div>
    </section>
  )
}

export default CSWireframes
