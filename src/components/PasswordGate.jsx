import { useState } from "react"
import { motion } from "framer-motion"

const PASSWORD = "figma2react"
const SESSION_KEY = "portfolio_access"

const PasswordGate = ({ children }) => {
  const [granted, setGranted] = useState(() => sessionStorage.getItem(SESSION_KEY) === "granted")
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "granted")
      setGranted(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (granted) return children

  return (
    <motion.div
      className="password-gate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="password-gate__inner">
        <p className="password-gate__logo">Nicole Matus</p>
        <h1 className="password-gate__headline font-display">Caso de estudio protegido</h1>
        <p className="password-gate__subtext">
          Este contenido está protegido por temas de confidencialidad y disponible bajo solicitud.
          Si tienes una contraseña, ingrésala a continuación. Si no, escríbeme a{" "}
          <a href="mailto:nicole.matusp@gmail.com" className="link-underline">
            nicole.matusp@gmail.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="password-gate__form">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            placeholder="Contraseña"
            className="password-gate__input"
            autoFocus
          />
          <button type="submit" className="btn password-gate__submit">
            Acceder →
          </button>
        </form>

        {error && <p className="password-gate__error">Contraseña incorrecta. Intenta de nuevo.</p>}
      </div>
    </motion.div>
  )
}

export default PasswordGate
