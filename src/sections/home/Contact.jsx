import { useState } from "react"
import { motion } from "framer-motion"
import Toast from "../../components/Toast"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const EMAIL = "nicole.matusp@gmail.com"

const Contact = () => {
  const [showToast, setShowToast] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // clipboard unavailable, still show confirmation
    }
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow contact__eyebrow">
          Contacto
        </motion.p>

        <motion.h2 {...revealProps} className="contact__headline font-display">
          Hablemos de tu
          <br />
          próximo proyecto.
        </motion.h2>

        <motion.button {...revealProps} onClick={copyEmail} className="contact__email link-underline" data-cursor-hover>
          {EMAIL}
        </motion.button>

        <motion.div {...revealProps} className="contact__links">
          <a href="https://linkedin.com/in/nicole-matus" target="_blank" rel="noreferrer" className="link-underline">
            LinkedIn
          </a>
          <a href="https://github.com/nicole-matus" target="_blank" rel="noreferrer" className="link-underline">
            GitHub
          </a>
          <a href="/cv-nicole-matus.pdf" target="_blank" rel="noreferrer" className="link-underline">
            CV ↓
          </a>
        </motion.div>
      </div>

      <Toast message="Email copiado ✓" visible={showToast} />
    </section>
  )
}

export default Contact
