import { Link } from "react-router-dom"

const navMap = {
  "aiep-intranet": {
    prev: { to: "/empresa/aiep", label: "Volver a AIEP" },
    next: { to: "/proyecto/aiep-educacion-continua", label: "Siguiente caso: Educación Continua" },
  },
  "aiep-educacion-continua": {
    prev: { to: "/proyecto/aiep-intranet", label: "Caso anterior: Intranet Estudiantil" },
    next: { to: "/empresa/aiep", label: "Volver a AIEP" },
  },
}

const ECNavigation = ({ currentSlug }) => {
  const { prev, next } = navMap[currentSlug]

  return (
    <section className="cs-navigation">
      <div className="container cs-navigation__grid">
        <Link to={prev.to} className="cs-navigation__item cs-navigation__item--prev">
          <span className="eyebrow">← {prev.label}</span>
        </Link>

        <Link to={next.to} className="cs-navigation__item cs-navigation__item--next">
          <span className="eyebrow">{next.label} →</span>
        </Link>
      </div>
    </section>
  )
}

export default ECNavigation
