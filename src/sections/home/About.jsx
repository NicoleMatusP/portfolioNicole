import { motion } from "framer-motion"

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
          {stack.map((group) => (
            <div key={group.category} className="about__stack-group">
              <h4 className="about__stack-title">{group.category}</h4>
              <ul className="about__stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
