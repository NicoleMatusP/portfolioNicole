import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSDesignSystem = ({ content }) => {
  return (
    <section className="section cs-design-system">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Sistema de diseño
        </motion.p>
        <motion.p {...revealProps} className="cs-design-system__intro">
          {content.intro}
        </motion.p>

        {content.atomicDesign && (
          <motion.p {...revealProps} className="cs-design-system__note">
            Construido con Atomic Design como metodología · {content.componentCount} · {content.tokenCount}
          </motion.p>
        )}

        <div className="cs-design-system__grid">
          <motion.div {...revealProps}>
            <ImagePlaceholder label="Paleta de colores" aspectRatio="4/3" instruction="Aquí va: swatch de la paleta de colores con sus valores hex" src={content.images?.palette} />
          </motion.div>
          <motion.div {...revealProps}>
            <ImagePlaceholder label="Tipografía" aspectRatio="4/3" instruction="Aquí va: escala tipográfica con pesos y tamaños usados" src={content.images?.typography} />
          </motion.div>
          <motion.div {...revealProps}>
            <ImagePlaceholder label="Componentes base" aspectRatio="4/3" instruction="Aquí va: grid de componentes base del design system (botones, inputs, cards)" src={content.images?.components} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CSDesignSystem
