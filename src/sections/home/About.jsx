import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const stack = [
  {
    category: "Diseño",
    items: ["Figma", "FigJam", "Design Systems", "Prototyping", "Atomic Design"],
  },
  {
    category: "Frontend",
    items: ["React", "CSS", "JavaScript", "Git", "Vite"],
  },
  {
    category: "IA & Herramientas",
    items: ["Cursor", "v0.dev", "Claude", "Maze", "Notion"],
  },
]

const About = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <motion.div {...revealProps} className="about__text">
          <p className="eyebrow">Sobre mí</p>
          <p className="about__paragraph font-display-italic">
            Soy Product Designer con un perfil híbrido: diseño interfaces,
            entiendo a las personas que las van a usar, y también sé llevarlas
            a código.
          </p>
          <p className="about__paragraph">
            Esa combinación me permite tomar decisiones de diseño con
            criterio técnico real, y usar inteligencia artificial como parte
            natural de mi flujo de trabajo diario — desde research hasta
            prototipado de alta fidelidad.
          </p>
        </motion.div>

        <motion.div {...revealProps} className="about__stack">
          {stack.map((group, index) => {
            const isOpen = openIndex === index
            return (
              <div key={group.category} className="about__stack-group">
                <button
                  type="button"
                  className="about__stack-title"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`stack-panel-${index}`}
                >
                  {group.category}
                  <span className={`about__stack-icon ${isOpen ? "about__stack-icon--open" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`stack-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className="about__stack-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
