import { useEffect, useRef, useState } from "react"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  const [supportsHover, setSupportsHover] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)")
    setSupportsHover(mq.matches)
    const handleChange = (e) => setSupportsHover(e.matches)
    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (!supportsHover) return

    const handleMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const handleOver = (e) => {
      setIsHoveringProject(!!e.target.closest("[data-cursor-hover]"))
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseover", handleOver)

    let frame
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12
      current.current.y += (target.current.y - current.current.y) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseover", handleOver)
      cancelAnimationFrame(frame)
    }
  }, [supportsHover])

  if (!supportsHover) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHoveringProject ? "custom-cursor--hover" : ""}`}
      aria-hidden="true"
    >
      <span className="custom-cursor__label">Ver →</span>
    </div>
  )
}

export default CustomCursor
