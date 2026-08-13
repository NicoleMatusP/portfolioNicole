import { useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"
import { getAiepCaseStudy } from "../data/aiepCaseStudies"
import Footer from "../components/Footer"

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!data) {
    return <Navigate to="/empresa/aiep" replace />
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
      <ECContext data={data} />
      <CSProblem content={data.problem} italic />
      {data.team && <ECTeam data={data.team} />}
      <ECRole blocks={data.roleDetail} />
      <ECProcess steps={data.process} />
      {data.subprojects && <ECSubprojects intro={data.subprojects.intro} items={data.subprojects.items} />}
      <ECLearnings data={data.learnings} />
      <ECNavigation currentSlug={slug} />
      <Footer />
    </main>
  )
}

export default EmployeeCaseStudy
