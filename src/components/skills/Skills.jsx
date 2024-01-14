import './skills.scss'
import { motion } from 'framer-motion'
import reactLogo from '../../assets/react.svg'
import reduxLogo from '../../assets/redux.svg'
import bootstrapLogo from '../../assets/bootstrap.png'
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/javascript.svg'
import nodejsLogo from '../../assets/nodejs.svg'
import javaLogo from '../../assets/java.svg'
import gitLogo from '../../assets/git.svg'

const Skills = () => {

    const skillsList = [
        {
            name: 'React',
            logo: reactLogo,
        },
        {
            name: 'Redux',
            logo: reduxLogo,
        },
        {
            name: 'Bootstrap',
            logo: bootstrapLogo,
        },
        {
            name: 'HTML5',
            logo: htmlLogo,
        },
        {
            name: 'CSS',
            logo: cssLogo,
        },
        {
            name: 'JavaScript',
            logo: jsLogo,
        },
        {
            name: 'NodeJS',
            logo: nodejsLogo,
        },
        {
            name: 'Java',
            logo: javaLogo,
        },
        {
            name: 'Git',
            logo: gitLogo,
        }
    ]

    const variants = {
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
        },
    }

  return (
    <div className='skills' >
        <motion.div className='textContainer' variants={variants} initial='initial' whileInView='animate'>
            <p>Check my tech stack</p>
            <hr/>
        </motion.div>
        <motion.h2 variants={variants} initial='initial' whileInView='animate'>Skills</motion.h2>
        <motion.div className='wrapper' variants={variants} initial='initial' whileInView='animate'>
            {skillsList.map(skill => (
                <motion.div key={skill} className='skill' variants={variants} whileHover={{ scale: 1.2 }}>
                    <img src={skill.logo} alt=""  height='50px' width='60px'/>
                    {skill.name}
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Skills