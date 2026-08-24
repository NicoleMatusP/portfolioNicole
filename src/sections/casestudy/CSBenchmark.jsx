import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CSBenchmark = ({ content }) => {
  return (
    <section className="section cs-benchmark">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Benchmark
        </motion.p>
        <motion.p {...revealProps} className="cs-benchmark__intro">
          {content.intro}
        </motion.p>

        <div className="cs-benchmark__grid">
          {content.competitors.map((c) => (
            <motion.div {...revealProps} key={c.name} className="cs-benchmark__card">
              <h4 className="cs-benchmark__name">{c.name}</h4>
              <span className="cs-benchmark__category">{c.category}</span>
              <ul className="cs-benchmark__observations">
                {c.observations.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...revealProps} className="cs-benchmark__image">
          <ImagePlaceholder
            label="Benchmark competitivo"
            aspectRatio="16/8"
            instruction="Aquí van: capturas de pantalla del benchmark, tabla comparativa"
            src={content.image}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CSBenchmark
