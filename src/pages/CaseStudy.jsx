import { useEffect, useRef, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { getProjectBySlug } from "../data/projects"
import { caseStudyContent } from "../data/caseStudies"
import Footer from "../components/Footer"
import CaseStudySideNav from "../components/CaseStudySideNav"

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

const CaseStudy = () => {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const content = caseStudyContent[slug]
  const steps = progressSteps.filter(
    (step) =>
      (step.id !== "problem" || content?.problem) &&
      (step.id !== "research" || content?.research) &&
      (step.id !== "wireframes" || content?.wireframes) &&
      (step.id !== "benchmark" || content?.benchmark) &&
      (step.id !== "definition" || content?.definition) &&
      (step.id !== "architecture" || content?.architecture) &&
      (step.id !== "design-system" || content?.designSystem || content?.finalScreens) &&
      (step.id !== "prototype" || content?.prototype) &&
      (step.id !== "results" || content?.results)
  )
  const [activeId, setActiveId] = useState(steps[0].id)
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
      <CSHero
        project={project}
        content={content.hero}
        breadcrumbs={[{ label: "Inicio", to: "/" }, { label: project.name }]}
      />

      <CaseStudySideNav steps={steps} activeId={activeId} />

      <div ref={setRef("overview")} data-section="overview">
        <CSOverview project={project} content={content.overview} />
      </div>
      {content.problem && (
        <div ref={setRef("problem")} data-section="problem">
          <CSProblem content={content.problem} />
        </div>
      )}
      {content.research && (
        <div ref={setRef("research")} data-section="research">
          <CSResearch content={content.research} />
        </div>
      )}
      {content.benchmark && (
        <div ref={setRef("benchmark")} data-section="benchmark">
          <CSBenchmark content={content.benchmark} />
        </div>
      )}
      {content.definition && (
        <div ref={setRef("definition")} data-section="definition">
          <CSDefinition content={content.definition} />
        </div>
      )}
      {content.architecture && (
        <div ref={setRef("architecture")} data-section="architecture">
          <CSArchitecture content={content.architecture} />
        </div>
      )}
      {content.wireframes && (
        <div ref={setRef("wireframes")} data-section="wireframes">
          <CSWireframes content={content.wireframes} />
        </div>
      )}
      {(content.designSystem || content.finalScreens) && (
        <div ref={setRef("design-system")} data-section="design-system">
          {content.designSystem && <CSDesignSystem content={content.designSystem} />}
          {content.finalScreens && <CSFinalScreens project={project} content={content.finalScreens} />}
        </div>
      )}
      {content.prototype && (
        <div ref={setRef("prototype")} data-section="prototype">
          <CSPrototype content={content.prototype} />
        </div>
      )}
      {content.results && (
        <div ref={setRef("results")} data-section="results">
          <CSResults content={content.results} />
        </div>
      )}

      <CSNavigation currentSlug={slug} />
      <Footer />
    </main>
  )
}

export default CaseStudy
