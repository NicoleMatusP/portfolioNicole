import { useEffect } from "react"
import { useParams, Navigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { getCompanyBySlug } from "../data/companies"
import Footer from "../components/Footer"
import ImagePlaceholder from "../components/ImagePlaceholder"
import Breadcrumbs from "../components/Breadcrumbs"
import aiepCover from "../assets/aiep/CoverAIEP.jpg"

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const CompanyPage = () => {
  const { slug } = useParams()
  const company = getCompanyBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!company) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="company-page">
      <section className="company-hero" style={{ backgroundImage: `url(${aiepCover})` }}>
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: company.name }]} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow company-hero__eyebrow"
          >
            Experiencia laboral · {company.period}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="company-hero__name font-display"
          >
            {company.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="company-hero__description"
          >
            {company.heroDescription}
          </motion.p>
        </div>
      </section>

      <section className="section company-role">
        <div className="container">
          <div className="company-role__grid">
            {company.roleContext.map((item) => (
              <motion.div {...revealProps} key={item.label} className="company-role__row">
                <span className="company-role__label">{item.label}</span>
                <span className="company-role__value">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-team">
        <div className="container">
          <motion.p {...revealProps} className="eyebrow">
            Cómo trabajábamos
          </motion.p>
          <motion.p {...revealProps} className="company-team__paragraph">
            {company.aboutTeam.paragraph}
          </motion.p>
          <motion.div {...revealProps} className="company-team__tags">
            {company.aboutTeam.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section company-cases">
        <div className="container">
          <motion.p {...revealProps} className="eyebrow">
            Proyectos en esta empresa
          </motion.p>

          <div className="company-cases__list">
            {company.caseStudies.map((cs) => (
              <motion.div
                {...revealProps}
                key={cs.slug}
                className="company-case-card"
                style={{ borderLeftColor: cs.color }}
              >
                <span className="company-case-card__number font-display">{cs.number}</span>
                <div className="company-case-card__image">
                  <ImagePlaceholder
                    label={cs.image.label}
                    aspectRatio="4/3"
                    instruction={cs.image.instruction}
                    src={cs.image.src}
                  />
                </div>
                <div className="company-case-card__text">
                  <h3 className="company-case-card__name font-display">{cs.name}</h3>
                  <p className="company-case-card__description">{cs.description}</p>
                  <div className="company-case-card__tags">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/proyecto/${cs.slug}`} className="btn company-case-card__cta">
                    Ver caso de estudio →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...revealProps} className="company-cases__lock">
            🔒 Los casos de estudio están protegidos por temas de confidencialidad. Solicita acceso
            escribiendo a{" "}
            <a href="mailto:nicole.matusp@gmail.com" className="link-underline">
              nicole.matusp@gmail.com
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CompanyPage
