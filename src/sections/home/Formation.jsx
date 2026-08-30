import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const formation = [
  {
    title: "Diplomado en Estrategia y Experiencia de Productos en la ERA de la IA",
    institution: "Universidad de Chile — Facultad de Economía y Negocios",
    year: "May 2026 — Ago 2026",
    current: false,
  },
  {
    title: "Programa Front and React",
    institution: "Desafío Latam",
    year: "Nov 2025 — Jun 2026",
    current: false,
  },
  {
    title: "Curso UI (Atomic Design)",
    institution: "Coder House",
    year: "Dic 2023 — Feb 2024",
    current: false,
  },
  {
    title: "Licenciada en Diseño con Mención en Diseño Gráfico",
    institution: "Universidad Diego Portales",
    year: "Mar 2017 — Jul 2023",
    current: false,
  },
  {
    title: "Curso de Desarrollo Web",
    institution: "Coder House",
    year: "Feb 2023 — Abr 2023",
    current: false,
  },
]

const Formation = () => {
  return (
    <section className="section formation">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Formación
        </motion.p>

        <ul className="formation__list">
          {formation.map((item) => (
            <motion.li {...revealProps} key={item.title} className="formation__item">
              <div className="formation__item-main">
                <h4 className="formation__title">{item.title}</h4>
                <p className="formation__institution">{item.institution}</p>
              </div>
              <div className="formation__item-side">
                {item.current && <span className="pill pill--accent">En curso</span>}
                <span className="formation__year">{item.year}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Formation
