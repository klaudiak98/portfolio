import './projectItem.scss'
import githubLogo from '../../assets/icons/github.svg'
import webappLogo from '../../assets/icons/webapp.svg'
import { motion } from 'framer-motion'

const ProjectItem = ({ project }) => {

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='projectItem'>
      <div>
        {project.image && 
        <div className='imageContainer'>
            <a href={project.demo || project.github?.react || project.github} title='Check the project' target='_blanck'>
                <img src={project.image} alt={project.name} height='170px' width='100%'/>
            </a>
            <hr/>
        </div>}
        <a href={project.demo || project.github?.react || project.github} title='Check the project' target='_blanck'><h3>{project.name}</h3></a>
        <span>{project.description}</span>
      </div>
      <div className='footer'>
        {project.tags && <i>{project.tags.join(' - ')}</i>}
        <div className='linksContainer'>
          {
            typeof(project.github) === 'string'
            ? <a href={project.github} title='Code' target='_blanck'><img src={githubLogo} width='40px' height='40px'/></a>
            : <>
            {project.github.react && <a href={project.github.react} title='React code' target='_blanck'><img src={githubLogo} width='40px' height='40px'/></a>}
            {project.github.vue && <a href={project.github.vue} title='Vue.js code' target='_blanck'><img src={githubLogo} width='40px' height='40px'/></a>}
            {project.github.angular && <a href={project.github.angular} title='Angular code' target='_blanck'><img src={githubLogo} width='40px' height='40px'/></a>}
            {project.github.nodejs && <a href={project.github.nodejs} title='NodeJS code' target='_blanck'><img src={githubLogo} width='40px' height='40px'/></a>}
            </>
          }
          {project.demo && <a href={project.demo} title='Demo' target='_blanck'><img src={webappLogo} width='40px' height='40px'/></a>}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectItem