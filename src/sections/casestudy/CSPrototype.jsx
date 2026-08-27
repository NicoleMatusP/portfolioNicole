import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSPrototype = ({ content }) => {
  return (
    <section className="section cs-prototype">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Prototipo
        </motion.p>
        <motion.p {...revealProps} className="cs-prototype__intro">
          {content.intro}
        </motion.p>

        {content.video ? (
          <motion.div {...revealProps} className="cs-prototype__video-wrap">
            <ImagePlaceholder
              label="Prototipo"
              aspectRatio={content.videoAspectRatio || "16/9"}
              src={content.video}
            />
          </motion.div>
        ) : (
          <motion.div {...revealProps} className="cs-prototype__embed">
            <p>[Embed del prototipo de Figma va aquí]</p>
            <span>Reemplazar este bloque por un iframe de Figma cuando el prototipo esté listo</span>
          </motion.div>
        )}

        {content.figmaLink && (
          <motion.a
            {...revealProps}
            href={content.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn cs-prototype__cta"
          >
            Ver prototipo en Figma ↗
          </motion.a>
        )}
      </div>
    </section>
  )
}

export default CSPrototype
