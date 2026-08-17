import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECSubprojects = ({ title, intro, items }) => {
  return (
    <section className="section ec-subprojects">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Subproyectos
        </motion.p>

        {title && (
          <motion.h3 {...revealProps} className="ec-subprojects__title font-display">
            {title}
          </motion.h3>
        )}

        {intro && (
          <motion.p {...revealProps} className="ec-subprojects__intro">
            {intro}
          </motion.p>
        )}

        <div className="ec-subprojects__grid">
          {items.map((item) => (
            <motion.div {...revealProps} key={item.number} className="ec-subprojects__card">
              <span className="ec-subprojects__number font-display">{item.number}</span>
              <ImagePlaceholder
                label={item.image.label}
                aspectRatio="4/3"
                instruction={item.image.instruction}
                src={item.image.src}
              />
              <h4 className="ec-subprojects__name font-display">{item.name}</h4>
              <p className="ec-subprojects__description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ECSubprojects
