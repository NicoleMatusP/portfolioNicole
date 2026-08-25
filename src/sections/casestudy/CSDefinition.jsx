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
          Definición del usuario
        </motion.p>
        <motion.p {...revealProps} className="cs-definition__intro">
          Con los hallazgos del research, se definió quién es el usuario principal a diseñar y la pregunta que guio las decisiones de diseño.
        </motion.p>

        <motion.div {...revealProps} className="cs-definition__persona">
          <h4 className="cs-definition__persona-name font-display">{persona.name}</h4>
          <p className="cs-definition__persona-description">{persona.description}</p>

          <div className="cs-definition__persona-grid">
            <div>
              <span className="cs-definition__persona-label">Frustraciones</span>
              <ul>
                {persona.frustrations.map((f) => (
                  <li key={f}>
                    <span className="cs-definition__icon cs-definition__icon--frustration" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="cs-definition__persona-label">Objetivos</span>
              <ul>
                {persona.goals.map((g) => (
                  <li key={g}>
                    <span className="cs-definition__icon cs-definition__icon--goal" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12L10 18L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div {...revealProps} className="cs-definition__hmw">
          <span className="cs-definition__hmw-label">Pregunta guía</span>
          <p className="font-display-italic">{hmw}</p>
        </motion.div>

        {!content.hideImage && (
          <motion.div {...revealProps} className="cs-definition__image">
            <ImagePlaceholder
              label="Definición"
              aspectRatio="16/7"
              instruction="Aquí van: persona, mapa de empatía, jobs to be done, HMW cards"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CSDefinition
