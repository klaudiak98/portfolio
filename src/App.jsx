import './app.scss'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Tools from './components/tools/Tools'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import { useState, useEffect } from 'react';
import { IoArrowUpCircle} from 'react-icons/io5'

const App = () => {

  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const skillsSection = document.getElementById('skills');
    const skillsAnimationOffset = 500;

    setShowScrollUp(scrollY > skillsSection.offsetTop - skillsAnimationOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     {showScrollUp && (
        <a href='#'>
          <IoArrowUpCircle className='scrollUp'/>
        </a>
      )}
      <section>
        <Navbar/>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='tools'>
        <Tools/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </>
  )
}

export default App
