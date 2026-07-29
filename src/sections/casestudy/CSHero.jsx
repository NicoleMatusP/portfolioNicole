import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Breadcrumbs from "../../components/Breadcrumbs"

const CSHero = ({ project, content, breadcrumbs }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="cs-hero" style={{ background: project.color }}>
      <div className="container cs-hero__inner">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow cs-hero__eyebrow"
        >
          {project.company} · {project.year} · {project.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="cs-hero__name font-display"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="cs-hero__challenge"
        >
          {content.challenge}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="cs-hero__tags"
        >
          {project.tags.map((tag) => (
            <span key={tag} className="pill pill--on-dark">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div className={`cs-hero__scroll ${scrolled ? "cs-hero__scroll--hidden" : ""}`}>↓</div>
    </section>
  )
}

export default CSHero
