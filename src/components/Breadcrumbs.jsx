import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Breadcrumbs = ({ items }) => (
  <motion.nav
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="breadcrumbs"
    aria-label="Breadcrumb"
  >
    {items.map((item, i) => {
      const isLast = i === items.length - 1
      return (
        <span key={item.label} className="breadcrumbs__item">
          {!isLast ? (
            <Link to={item.to} className="breadcrumbs__link link-underline">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumbs__current">{item.label}</span>
          )}
          {!isLast && <span className="breadcrumbs__separator">/</span>}
        </span>
      )
    })}
  </motion.nav>
)

export default Breadcrumbs
