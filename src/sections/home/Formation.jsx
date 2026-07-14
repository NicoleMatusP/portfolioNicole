import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const formation = [
  {
    title: "Diplomado en UX/UI Design",
    institution: "Desafío Latam",
    year: "2023",
    current: false,
  },
  {
    title: "Ingeniería en Diseño de Producto",
    institution: "Universidad Andrés Bello",
    year: "2020 — 2024",
    current: false,
  },
  {
    title: "Especialización en IA aplicada al diseño",
    institution: "Formación autodidacta",
    year: "2025",
    current: true,
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
