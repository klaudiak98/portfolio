import './about.scss'
import { motion } from 'framer-motion'

const About = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

  return (
    <div className='about'>
        <div className='wrapper'>
            <motion.div 
                className='textContainer'
                variants={textVariants}
                initial='initial'
                animate='animate'>
                <motion.h1 varients={textVariants}>Hi, I'm <motion.span varients={textVariants} className='name'>Klaudia</motion.span></motion.h1>
                <motion.h2 varients={textVariants}>I develope web application using React</motion.h2>
                <motion.div varients={textVariants}>
                    <motion.button varients={textVariants}>Contact Me</motion.button>
                </motion.div>
            </motion.div>
            <div className='imgContainer'>
                <img width={300} height={400} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default About