import './App.scss'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <section><Navbar/></section>
      <section><a>About me</a></section>
      <section>Skills</section>
      <section>Project</section>
      <section>Experience</section>
      <section>Contact</section>
    </>
  )
}

export default App
