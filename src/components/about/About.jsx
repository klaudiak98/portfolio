import './about.scss'
import { motion } from 'framer-motion'

const About = () => {

  return (
    <div className='about'>
        <div className='container'>
            <motion.div 
                className='textContainer'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                <h1>Hi, I'm <span className='name'>Klaudia</span></h1>
                <h2>I develope web applications using React</h2>
                <div>
                    <a href='#contact' className='button' title='Contact'>Contact Me</a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About