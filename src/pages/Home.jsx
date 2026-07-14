import Hero from "../sections/home/Hero"
import Projects from "../sections/home/Projects"
import About from "../sections/home/About"
import Formation from "../sections/home/Formation"
import Process from "../sections/home/Process"
import Contact from "../sections/home/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Formation />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
