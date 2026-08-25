import { motion } from "framer-motion"
import ImagePlaceholder from "../../components/ImagePlaceholder"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const roleIcons = {
  admin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  courier: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  bodega: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8L12 3.5L21 8L12 12.5L3 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 8V16L12 20.5L21 16V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 12.5V20.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
}

const getRoleIcon = (name) => {
  const key = name.toLowerCase()
  if (key.includes("admin")) return roleIcons.admin
  if (key.includes("courier")) return roleIcons.courier
  return roleIcons.bodega
}

const CSArchitecture = ({ content }) => {
  return (
    <section className="section cs-architecture">
      <div className="container">
        <motion.p {...revealProps} className="eyebrow">
          Arquitectura de información
        </motion.p>
        <motion.p {...revealProps} className="cs-architecture__intro">
          {content.intro}
        </motion.p>

        {content.roles && content.roles.length > 0 ? (
          <>
            <motion.h3 {...revealProps} className="cs-architecture__title font-display">
              Roles del sistema
            </motion.h3>
            <div className="cs-architecture__roles">
              {content.roles.map((role, i) => (
                <motion.div {...revealProps} key={role.name} className="cs-architecture__role-card">
                  <span className="cs-architecture__role-icon">{getRoleIcon(role.name)}</span>
                  <h4 className="cs-architecture__role-name font-display">{role.name}</h4>

                  <span className="cs-architecture__role-label">Vista principal</span>
                  <p className="cs-architecture__role-value">{role.view}</p>

                  <span className="cs-architecture__role-label">Qué resuelve</span>
                  <p className="cs-architecture__role-value">{role.solves}</p>

                  {i < content.roles.length - 1 && (
                    <span className="cs-architecture__role-connector" aria-hidden="true" />
                  )}
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div {...revealProps} className="cs-architecture__image">
            <ImagePlaceholder
              label="Arquitectura y flujos"
              aspectRatio="16/9"
              instruction="Aquí van: sitemap, user flows, task flows, diagramas de flujo"
            />
          </motion.div>
        )}

        <motion.h3 {...revealProps} className="cs-architecture__title font-display cs-architecture__title--spaced">
          Decisiones clave
        </motion.h3>
        <ul className="cs-architecture__decisions">
          {content.decisions.map((d, i) => (
            <motion.li {...revealProps} key={d}>
              <span className="cs-architecture__decision-icon">{String(i + 1).padStart(2, "0")}</span>
              <span>{d}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CSArchitecture
