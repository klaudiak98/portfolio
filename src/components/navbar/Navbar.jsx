import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      <motion.span 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>Klaudia Kieryk</motion.span>
      <div className='links'>
        <a href='#homepage'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#project'>Project</a>
        <a href='#experience'>Experience</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar