import './app.scss'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
      <section id='homepage'>
        <Navbar/>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='project'>Project</section>
      <section id='experience'>Experience</section>
      <section id='contact'>Contact</section>
    </>
  )
}

export default App
