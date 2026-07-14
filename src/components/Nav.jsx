import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__logo">
            Nicole Matus
          </Link>

          <nav className="nav__links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav__link link-underline"
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv-nicole-matus.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav__link link-underline"
            >
              CV ↓
            </a>
          </nav>

          <button
            className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav__overlay ${menuOpen ? "nav__overlay--open" : ""}`}>
        <nav className="nav__overlay-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="/cv-nicole-matus.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            CV ↓
          </a>
        </nav>
      </div>
    </>
  )
}

export default Nav
