import { Link } from "react-router-dom"
import { getAdjacentProjects } from "../../data/projects"

const CSNavigation = ({ currentSlug }) => {
  const { prev, next } = getAdjacentProjects(currentSlug)

  return (
    <section className="cs-navigation">
      <div className="container cs-navigation__grid">
        <Link to={`/proyecto/${prev.slug}`} className="cs-navigation__item cs-navigation__item--prev" data-cursor-hover>
          <div className="cs-navigation__thumb" style={{ background: prev.color }} />
          <div>
            <span className="eyebrow">← Proyecto anterior</span>
            <h4 className="font-display">{prev.name}</h4>
          </div>
        </Link>

        <Link to={`/proyecto/${next.slug}`} className="cs-navigation__item cs-navigation__item--next" data-cursor-hover>
          <div>
            <span className="eyebrow">Proyecto siguiente →</span>
            <h4 className="font-display">{next.name}</h4>
          </div>
          <div className="cs-navigation__thumb" style={{ background: next.color }} />
        </Link>
      </div>
    </section>
  )
}

export default CSNavigation
