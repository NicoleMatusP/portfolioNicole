import { useEffect, useRef, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { getAiepCaseStudy } from "../data/aiepCaseStudies"
import Footer from "../components/Footer"
import CaseStudySideNav from "../components/CaseStudySideNav"

import CSHero from "../sections/casestudy/CSHero"
import CSProblem from "../sections/casestudy/CSProblem"
import ECContext from "../sections/casestudy/ECContext"
import ECTeam from "../sections/casestudy/ECTeam"
import ECRole from "../sections/casestudy/ECRole"
import ECProcess from "../sections/casestudy/ECProcess"
import ECSubprojects from "../sections/casestudy/ECSubprojects"
import ECLearnings from "../sections/casestudy/ECLearnings"
import ECNavigation from "../sections/casestudy/ECNavigation"

const EmployeeCaseStudy = ({ slug: slugProp }) => {
  const params = useParams()
  const slug = slugProp || params.slug
  const data = getAiepCaseStudy(slug)
  const sectionRefs = useRef({})

  const steps = data
    ? [
        { id: "context", label: "El contexto" },
        { id: "problem", label: "El problema" },
        ...(data.team ? [{ id: "team", label: "Cómo nos organizamos" }] : []),
        { id: "role", label: "Mi rol" },
        { id: "process", label: "El proceso" },
        ...(data.subprojects ? [{ id: "subprojects", label: "Subproyectos" }] : []),
        { id: "learnings", label: "Aprendizajes" },
      ]
    : []

  const [activeId, setActiveId] = useState(steps[0]?.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!data) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.section)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [data, slug])

  if (!data) {
    return <Navigate to="/empresa/aiep" replace />
  }

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el
  }

  const heroProject = {
    company: data.company,
    year: data.year,
    role: data.role,
    name: data.name,
    tags: data.tags,
    color: data.color,
    gradient: data.heroGradient,
  }

  return (
    <main className="case-study">
      <CSHero
        project={heroProject}
        content={{ challenge: data.tagline }}
        breadcrumbs={[
          { label: "Inicio", to: "/" },
          { label: "AIEP", to: "/empresa/aiep" },
          { label: data.name },
        ]}
      />

      <CaseStudySideNav steps={steps} activeId={activeId} />

      <div ref={setRef("context")} data-section="context">
        <ECContext data={data} />
      </div>
      <div ref={setRef("problem")} data-section="problem">
        <CSProblem content={data.problem} italic />
      </div>
      {data.team && (
        <div ref={setRef("team")} data-section="team">
          <ECTeam data={data.team} />
        </div>
      )}
      <div ref={setRef("role")} data-section="role">
        <ECRole blocks={data.roleDetail} />
      </div>
      <div ref={setRef("process")} data-section="process">
        <ECProcess steps={data.process} />
      </div>
      {data.subprojects && (
        <div ref={setRef("subprojects")} data-section="subprojects">
          <ECSubprojects title={data.subprojects.title} intro={data.subprojects.intro} items={data.subprojects.items} />
        </div>
      )}
      <div ref={setRef("learnings")} data-section="learnings">
        <ECLearnings data={data.learnings} />
      </div>

      <ECNavigation currentSlug={slug} />
      <Footer />
    </main>
  )
}

export default EmployeeCaseStudy
