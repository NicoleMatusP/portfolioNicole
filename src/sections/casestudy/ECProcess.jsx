import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import ECSynthesisTable from "./ECSynthesisTable"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const ECProcess = ({ steps }) => {
  return (
    <section className="section ec-process">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          El proceso
        </motion.p>

        <div className="ec-process__list">
          {steps.map((step) => (
            <div key={step.number} className="ec-process__step">
              <motion.div {...revealProps} className="ec-process__header">
                <span className="ec-process__number font-display">{step.number}</span>
                <h4 className="ec-process__title font-display">{step.title}</h4>
              </motion.div>

              <motion.p {...revealProps} className="ec-process__description">
                {step.description}
              </motion.p>

              {step.synthesis && (
                <motion.div {...revealProps}>
                  <ECSynthesisTable data={step.synthesis} />
                </motion.div>
              )}

              {step.images.length > 0 && (
                <div className="ec-process__images">
                  {step.images.map((img) => (
                    <motion.div {...revealProps} key={img.label}>
                      <ImagePlaceholder
                        label={img.label}
                        aspectRatio={img.aspectRatio}
                        instruction={img.instruction}
                        src={img.src}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ECProcess
