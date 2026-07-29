import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const line = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.p className="eyebrow hero__eyebrow" variants={line}>
            Product Designer · Frontend · IA
          </motion.p>

          <h1 className="hero__headline font-display">
            <motion.span className="hero__line" variants={line}>
              Diseño productos
            </motion.span>
            <motion.span className="hero__line" variants={line}>
              que también
            </motion.span>
            <motion.span className="hero__line" variants={line}>
              sé construir.
            </motion.span>
          </h1>

          <motion.p className="hero__subtitle" variants={line}>
            Combino diseño centrado en las personas con desarrollo frontend y uso
            diario de inteligencia artificial para crear productos digitales que
            funcionan de verdad.
          </motion.p>

          <motion.div className="hero__ctas" variants={line}>
            <a href="#proyectos" className="btn">
              Ver proyectos →
            </a>
            <a href="mailto:nicole.matusp@gmail.com" className="btn btn--ghost">
              nicole.matusp@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>

      <span className="hero__vertical-tag">UX · UI · CODE · AI</span>
    </section>
  )
}

export default Hero
