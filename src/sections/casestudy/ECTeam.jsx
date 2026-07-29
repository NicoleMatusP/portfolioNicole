import { motion } from "framer-motion"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECTeam = ({ data }) => {
  return (
    <section className="section ec-team">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Cómo nos organizamos
        </motion.p>

        <motion.h3 {...revealProps} className="ec-team__headline font-display">
          {data.headline}
        </motion.h3>

        <motion.p {...revealProps} className="ec-team__paragraph">
          {data.paragraph}
        </motion.p>

        <div className="ec-team__roles">
          {data.roles.map((role) => (
            <motion.div {...revealProps} key={role} className="ec-team__role">
              {role}
            </motion.div>
          ))}
        </div>

        <motion.p {...revealProps} className="ec-team__closing">
          {data.closing}
        </motion.p>
      </div>
    </section>
  )
}

export default ECTeam
