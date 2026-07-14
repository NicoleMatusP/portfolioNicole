const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2025 Nicole Matus · Diseñado y construido por mí.</p>
        <button onClick={scrollTop} className="footer__top link-underline">
          ↑ Volver arriba
        </button>
      </div>
    </footer>
  )
}

export default Footer
