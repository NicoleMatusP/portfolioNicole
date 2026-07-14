import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const steps = [
  {
    number: "01",
    title: "Entender primero",
    description:
      "Antes de diseñar una sola pantalla, investigo el problema real: quién lo vive, por qué existe y qué se ha intentado antes.",
  },
  {
    number: "02",
    title: "Criterio técnico",
    description:
      "Diseño con conciencia de cómo se construye. Eso evita fricciones entre diseño y desarrollo, y hace que las decisiones sean viables.",
  },
  {
    number: "03",
    title: "IA",
    description:
      "Uso inteligencia artificial como acelerador en research, prototipado y exploración visual — no como reemplazo del criterio de diseño.",
  },
  {
    number: "04",
    title: "Handoff",
    description:
      "Entrego especificaciones claras y, cuando el proyecto lo permite, participo directamente en la implementación frontend.",
  },
]

const Process = () => {
  return (
    <section className="section process">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Cómo trabajo
        </motion.p>

        <div className="process__list">
          {steps.map((step) => (
            <motion.div {...revealProps} key={step.number} className="process__item">
              <span className="process__number font-display">{step.number}</span>
              <div className="process__content">
                <h4 className="process__title font-display">{step.title}</h4>
                <p className="process__description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
