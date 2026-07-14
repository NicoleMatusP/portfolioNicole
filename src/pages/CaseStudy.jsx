import { useEffect, useRef, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { getProjectBySlug } from "../data/projects"
import { caseStudyContent } from "../data/caseStudies"
import Footer from "../components/Footer"

import CSHero from "../sections/casestudy/CSHero"
import CSOverview from "../sections/casestudy/CSOverview"
import CSProblem from "../sections/casestudy/CSProblem"
import CSResearch from "../sections/casestudy/CSResearch"
import CSBenchmark from "../sections/casestudy/CSBenchmark"
import CSDefinition from "../sections/casestudy/CSDefinition"
import CSArchitecture from "../sections/casestudy/CSArchitecture"
import CSWireframes from "../sections/casestudy/CSWireframes"
import CSDesignSystem from "../sections/casestudy/CSDesignSystem"
import CSFinalScreens from "../sections/casestudy/CSFinalScreens"
import CSPrototype from "../sections/casestudy/CSPrototype"
import CSResults from "../sections/casestudy/CSResults"
import CSNavigation from "../sections/casestudy/CSNavigation"

const progressSteps = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "El problema" },
  { id: "research", label: "Research" },
  { id: "benchmark", label: "Benchmark" },
  { id: "definition", label: "Definición" },
  { id: "architecture", label: "Arquitectura" },
  { id: "wireframes", label: "Wireframes" },
  { id: "design-system", label: "Diseño visual" },
  { id: "prototype", label: "Prototipo" },
  { id: "results", label: "Resultados" },
]

const ProgressIndicator = ({ activeId }) => {
  const activeIndex = progressSteps.findIndex((s) => s.id === activeId)

  return (
    <div className="cs-progress" aria-hidden="true">
      <div className="cs-progress__track">
        {progressSteps.map((step, i) => (
          <div key={step.id} className={`cs-progress__item ${i <= activeIndex ? "cs-progress__item--active" : ""}`}>
            <span className="cs-progress__dot" />
            <span className="cs-progress__label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const CaseStudy = () => {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const content = caseStudyContent[slug]
  const [activeId, setActiveId] = useState(progressSteps[0].id)
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) return

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
  }, [project])

  if (!project || !content) {
    return <Navigate to="/" replace />
  }

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el
  }

  return (
    <main className="case-study">
      <CSHero project={project} content={content.hero} />

      <ProgressIndicator activeId={activeId} />

      <div ref={setRef("overview")} data-section="overview">
        <CSOverview project={project} content={content.overview} />
      </div>
      <div ref={setRef("problem")} data-section="problem">
        <CSProblem content={content.problem} />
      </div>
      <div ref={setRef("research")} data-section="research">
        <CSResearch content={content.research} />
      </div>
      <div ref={setRef("benchmark")} data-section="benchmark">
        <CSBenchmark content={content.benchmark} />
      </div>
      <div ref={setRef("definition")} data-section="definition">
        <CSDefinition content={content.definition} />
      </div>
      <div ref={setRef("architecture")} data-section="architecture">
        <CSArchitecture content={content.architecture} />
      </div>
      <div ref={setRef("wireframes")} data-section="wireframes">
        <CSWireframes content={content.wireframes} />
      </div>
      <div ref={setRef("design-system")} data-section="design-system">
        <CSDesignSystem content={content.designSystem} />
        <CSFinalScreens project={project} />
      </div>
      <div ref={setRef("prototype")} data-section="prototype">
        <CSPrototype content={content.prototype} />
      </div>
      <div ref={setRef("results")} data-section="results">
        <CSResults content={content.results} />
      </div>

      <CSNavigation currentSlug={slug} />
      <Footer />
    </main>
  )
}

export default CaseStudy
