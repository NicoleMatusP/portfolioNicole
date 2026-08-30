import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const defaultScreens = [
  { label: "Pantalla 1", instruction: "Aquí va: vista de inicio / dashboard principal del producto" },
  { label: "Pantalla 2", instruction: "Aquí va: flujo principal en su paso más representativo" },
  { label: "Pantalla 3", instruction: "Aquí va: estado de confirmación o éxito del flujo principal" },
  { label: "Pantalla 4", instruction: "Aquí va: vista de detalle o configuración secundaria" },
]

const CSFinalScreens = ({ content }) => {
  const screens = content?.screens || defaultScreens

  return (
    <section className="section cs-final-screens">
      <div className="container">
        <div className="cs-final-screens__row">
          {screens.map((s) => (
            <motion.div {...revealProps} key={s.label} className="cs-final-screens__item">
              <ImagePlaceholder label={s.label} aspectRatio="9/16" instruction={s.instruction} src={s.src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CSFinalScreens
