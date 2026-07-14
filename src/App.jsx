import { AnimatePresence, motion } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import CustomCursor from "./components/CustomCursor"
import Home from "./pages/Home"
import CaseStudy from "./pages/CaseStudy"

const pageVariants = {
  initial: { opacity: 0, scale: 1.01 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
}

const PageWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
)

function App() {
  const location = useLocation()

  return (
    <>
      <CustomCursor />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/proyecto/:slug"
            element={
              <PageWrapper>
                <CaseStudy />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
