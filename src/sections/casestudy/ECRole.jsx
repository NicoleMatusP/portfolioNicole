import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECRole = ({ blocks }) => {
  return (
    <section className="section ec-role">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Mi rol
        </motion.p>

        <div className="ec-role__grid">
          {blocks.map((block) => (
            <motion.div {...revealProps} key={block.title} className="ec-role__block">
              <h4 className="ec-role__title font-display">{block.title}</h4>
              <p className="ec-role__description">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ECRole
