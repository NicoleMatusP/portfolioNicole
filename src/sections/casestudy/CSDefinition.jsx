import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSDefinition = ({ content }) => {
  const { persona, hmw } = content

  return (
    <section className="section cs-definition">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Definición
        </motion.p>

        <motion.div {...revealProps} className="cs-definition__persona">
          <h4 className="cs-definition__persona-name font-display">{persona.name}</h4>
          <p className="cs-definition__persona-description">{persona.description}</p>

          <div className="cs-definition__persona-grid">
            <div>
              <span className="cs-definition__persona-label">Frustraciones</span>
              <ul>
                {persona.frustrations.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="cs-definition__persona-label">Objetivos</span>
              <ul>
                {persona.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div {...revealProps} className="cs-definition__hmw">
          <p className="font-display-italic">{hmw}</p>
        </motion.div>

        <motion.div {...revealProps} className="cs-definition__image">
          <ImagePlaceholder
            label="Definición"
            aspectRatio="16/7"
            instruction="Aquí van: persona, mapa de empatía, jobs to be done, HMW cards"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CSDefinition
