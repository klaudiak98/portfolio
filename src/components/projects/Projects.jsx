import './projects.scss'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5'

import ProjectItem from '../projectItem/ProjectItem'
import porfolioImg from '../../assets/projects/portfolio.png'
import bookshelfImg from '../../assets/projects/bookshelf.png'
import carsListImg from '../../assets/projects/carslist.png'
import hangmanImg from '../../assets/projects/hangman.png'
import imageGalleryImg from '../../assets/projects/imagegallery.png'
import memoryGameImg from '../../assets/projects/memorygame.png'
import taskTrackerImg from '../../assets/projects/tasktracker.png'
import awwwsomeImg from '../../assets/projects/awwwesome.png'
import socialNetworkingImg from '../../assets/projects/socialnetworking.png'
import componentsListImg from '../../assets/projects/componentslist.png'

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio',
      description: 'You are here :)',
      tags: ['React', 'Framer Motion', 'SCSS', 'Vite'],
      github: 'https://github.com/klaudiak98/portfolio',
      demo: '#',
      image: porfolioImg
    },
    {
      name: 'Bookshelf',
      description: "System for managing a collection of users' books.",
      tags: ['React', 'React Router',  'Angular', 'Vue.js', 'NodeJS', 'API', 'PWA', 'JWT', 'Bootstrap', 'SCSS', 'MongoDB', 'Express'],
      github: {
          react: 'https://github.com/klaudiak98/bookshelf',
          vue: 'https://github.com/klaudiak98/master-thesis-vue',
          angular: 'https://github.com/klaudiak98/master-thesis-angular',
          nodejs: 'https://github.com/klaudiak98/master-thesis-backend'
      },
      image: bookshelfImg
    },
    {
      name: 'Social Networking Site',
      description: 'Application for public threads, contacting friends, and sharing content.',
      tags: ['React', 'React Router', 'Vite', 'JWT', 'API', 'Java', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/klaudiak98/social-networking-site',
      image: socialNetworkingImg
    },
    {
      name: 'Cars List',
      description: 'A simple application for checking car prices. Users can filter the list of cars, add new ones, or remove selected ones. The main goal of the app was to practice Redux.',
      tags: ['React', 'Redux', 'Redux Toolkit'],
      github: 'https://github.com/klaudiak98/cars-list',
      demo: 'https://klaudiak98.github.io/cars-list/',
      image: carsListImg
    },
    {
      name: 'Components Library',
      description: 'The application contains implementations of different components that can be used in another project.',
      tags: ['React', 'Tailwind', 'React Context', 'React Reducer', 'React Hooks'],
      github: 'https://github.com/klaudiak98/components-list',
      image: componentsListImg
    },
    {
      name: 'Image Gallery',
      description: 'An application implemented to learn Next.js.',
      tags: ['NextJS', 'React', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/klaudiak98/nextjs-img-gallery',
      demo: 'https://nextjs-img-gallery-one.vercel.app/',
      image: imageGalleryImg
    },
    {
      name: 'Task tracker',
      description: 'My first React.js app in my GitHub repository.',
      tags: ['React', 'API', 'Json-Server', 'Vite'],
      github: 'https://github.com/klaudiak98/task-tracker-reacjs',
      demo: 'https://klaudiak98.github.io/task-tracker-reacjs/',
      image: taskTrackerImg
    },
    {
      name: 'Memory Game',
      description: 'Memory game implemented with a tutorial by M. Zelent.',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      github: 'https://github.com/klaudiak98/memory_game',
      demo: 'https://klaudiak98.github.io/memory_game/',
      image: memoryGameImg
    },
    {
      name: 'The Awwwesomes course',
      description: 'Webpage created as part of a summer challenge.',
      tags: ['HTML', 'CSS'],
      github: 'https://github.com/klaudiak98/The-Awwwesomes-course',
      demo: 'https://klaudiak98.github.io/The-Awwwesomes-course/',
      image: awwwsomeImg
    },
    {
      name: 'Hangman game',
      description: 'My first project on GitHub. Hangman game implemented with JS, HTML, and CSS.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/klaudiak98/game_hangman',
      demo: 'https://klaudiak98.github.io/game_hangman/',
      image: hangmanImg
    },
  ]

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 430 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1
    }
  };

  const variants = {
    initial: {
      x:-100,
      opacity: 0
    },
    animate: {
      x:0,
      opacity:1,
      transition: {
        duration:1,
      }
    }
  }

  const [select, setSelect] = useState('')

  const tags = [...new Set(projects.map(proj => proj.tags).flat())].sort()

  const [displayedProjects, setDisplayedProjects] = useState(projects)

  const [checkedTags, setCheckedTags] = useState([])

  const filterProject = () => {
    setDisplayedProjects(projects.filter(
      project => checkedTags.every(
        checkedTag => project.tags.includes(checkedTag)
      )
    ))
  }

  useEffect(() => {
    filterProject()
  },[checkedTags])

  const handleTagsChange = (event) => {
    setSelect(event.target.value)
    setCheckedTags([...checkedTags, event.target.value])
    setSelect('')
  }

  const tagRemove = (tagToRemove) => {
    setCheckedTags([...checkedTags.filter(tag => tag !== tagToRemove)])
  }

  return (
     <div className='projects' >
        <motion.div className='subtitleContainer' variants={variants} initial='initial' whileInView='animate'>
            <p>Check what I did</p>
            <hr/>
        </motion.div>
        <motion.div variants={variants} initial='initial' whileInView='animate' className='headerContainer'>
          <h2>My Projects</h2>
          <div className='filterContainer'>
            <select onChange={handleTagsChange} value={select} disabled={checkedTags.length >= 6}>
              <option value='' disabled>choose technology (max 6)</option>
                {tags.filter(tag => !checkedTags.includes(tag)).map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>

            <div className='checkedTags'>
              {checkedTags.map(tag =>
                <div key={tag} className='tag'>
                  <IoCloseCircle onClick={() => tagRemove(tag)}/>
                  <span>{tag}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div variants={variants} initial='initial' whileInView='animate'>
          { displayedProjects.length
            ?
             <Carousel responsive={responsive}>
                {displayedProjects.map(project => (
                  <ProjectItem project={project} key={project.name}/>
                ))}
             </Carousel>
            : <h4>No projects fulfilled your conditions. Please clear the filter.</h4>
            }
        </motion.div>
     </div>
  )
}

export default Projects