import { useEffect, useState } from "react"

const CaseStudySideNav = ({ steps, activeId }) => {
  const [visible, setVisible] = useState(false)
  const activeIndex = steps.findIndex((s) => s.id === activeId)

  useEffect(() => {
    const hero = document.querySelector(".cs-hero")
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
      threshold: 0,
    })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const goToSection = (id) => {
    const target = document.querySelector(`[data-section="${id}"]`)
    if (!target) return
    const y = target.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <nav className={`cs-sidenav ${visible ? "cs-sidenav--visible" : ""}`} aria-label="Secciones del caso">
      <div className="cs-sidenav__track">
        {steps.map((step, i) => (
          <button
            key={step.id}
            type="button"
            onClick={() => goToSection(step.id)}
            className={`cs-sidenav__item ${i <= activeIndex ? "cs-sidenav__item--active" : ""}`}
          >
            <span className="cs-sidenav__dot" />
            <span className="cs-sidenav__label">{step.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default CaseStudySideNav
