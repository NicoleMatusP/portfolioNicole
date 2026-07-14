import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSArchitecture = ({ content }) => {
  return (
    <section className="section cs-architecture">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Arquitectura de información
        </motion.p>
        <motion.p {...revealProps} className="cs-architecture__intro">
          {content.intro}
        </motion.p>

        <motion.div {...revealProps} className="cs-architecture__image">
          <ImagePlaceholder
            label="Arquitectura y flujos"
            aspectRatio="16/9"
            instruction="Aquí van: sitemap, user flows, task flows, diagramas de flujo"
          />
        </motion.div>

        <ul className="cs-architecture__decisions">
          {content.decisions.map((d) => (
            <motion.li {...revealProps} key={d}>
              {d}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CSArchitecture
