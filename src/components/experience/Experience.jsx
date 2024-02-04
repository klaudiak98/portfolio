import './experience.scss'
import { IoCodeSlash, IoBriefcase, IoSchool, IoRibbon } from 'react-icons/io5'
import Timeline from '../timeline/Timeline'

const Experience = () => {

    const experience = [
        {
            date: '2019 August',
            title: 'First JavaScript application on my GitHub repository',
            description: 'Hangman game - implemented with a tutorial by M. Zelent',
            img: IoCodeSlash,
            tech: ['HTML','CSS','JavaScript'],
            link: 'https://github.com/klaudiak98/game_hangman'
        },
        {
            date: '2019 August',
            title: 'Taking part in The-Awwwesomes-course',
            description: '#codesummer challenge',
            img: IoCodeSlash,
            tech: ['HTML','CSS'],
            link: 'https://github.com/klaudiak98/The-Awwwesomes-course'
        },
        {
            date: '2019 September',
            title: 'Memory game',
            description: 'Implemented with a tutorial by M. Zelent',
            img: IoCodeSlash,
            tech: ['HTML','CSS', 'JavaScript', 'jQuery'],
            link: 'https://github.com/klaudiak98/memory_game'
        },
        {
            date: '2020 July - September',
            title: 'System engineer internship',
            description: 'Comarch',
            img: IoBriefcase,
            tech: ['Linux', 'Asterisk', 'Docker', 'Ansible'],
            important: true,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2020 October - Present',
            title: 'System engineer',
            description: 'Comarch - working with VOiP systems',
            img: IoBriefcase,
            tech: ['3CX', 'InnovaPhone', 'MS SQL', 'Linux', 'Microsoft'],
            important: true,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2021 March',
            title: 'Bachelor of Engineering: Electronics and Telecommunications',
            description: 'AGH University of Science and Technology',
            img: IoSchool,
            tech: [],
            important: true,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2021 August',
            title: 'First React app',
            description: 'Task Tracker',
            img: IoCodeSlash,
            tech: ['Components','State', 'Props', 'Hooks', 'API'],
            link: 'https://github.com/klaudiak98/task-tracker-reacjs'
        },
        {
            date: '2021 December',
            title: 'Completed course: Linux - Basic Level Administration Part 1.',
            description: 'Comarch',
            img: IoRibbon,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2022 Juny',
            title: 'Completed course: Linux - Basic Level Administration Part 2.',
            description: 'Comarch',
            img: IoRibbon,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2022 September',
            title: 'Completed course: Docker Fundamentals',
            description: 'Comarch',
            img: IoRibbon,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2023 February',
            title: 'Completed course: Ansible Fundamentals',
            description: 'Comarch',
            img: IoRibbon,
            link: 'https://www.linkedin.com/in/klaudia-kieryk'
        },
        {
            date: '2023 June',
            title: 'Master of Engineering: Applied Computer Science',
            description: 'Cracow University of Technology',
            img: IoSchool,
            tech: ['React', 'Angular', 'Vue.js', 'NodeJS', 'Postgresql','JWT','PWA'],
            important: true,
            link: 'https://github.com/klaudiak98/bookshelf'
        },
        {
            date: '2023 September',
            title: 'First NextJS app',
            description: 'Image Gallery',
            img: IoCodeSlash,
            tech: ['NextJS', 'React', 'Tailwind', 'TypeScript'],
            link: 'https://github.com/klaudiak98/nextjs-img-gallery'
        },
        {
            date: '2024 February',
            title: 'Creation of this portfolio',
            description: '',
            img: IoCodeSlash,
            tech: ['React','Framer Motion', 'SCSS'],
            link: '#'
        },
    ]

  return (
    <div className='experience'>
        <h2>Experience</h2>
        <Timeline items={experience.reverse()}/>
    </div>
  )
}

export default Experience
