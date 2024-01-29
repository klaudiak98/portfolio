import reactLogo from '../../assets/icons/react.svg'
import reduxLogo from '../../assets/icons/redux.svg'
import bootstrapLogo from '../../assets/icons/bootstrap.png'
import htmlLogo from '../../assets/icons/html.svg'
import cssLogo from '../../assets/icons/css.svg'
import jsLogo from '../../assets/icons/javascript.svg'
import nodejsLogo from '../../assets/icons/nodejs.svg'
import javaLogo from '../../assets/icons/java.svg'
import scssLogo from '../../assets/icons/scss.svg'
import tsLogo from '../../assets/icons/typescript.svg'
import mongodbLogo from '../../assets/icons/mongodb.svg'
import postgresqlLogo from '../../assets/icons/postgresql.svg'
import ItemsList from '../itemsList/ItemsList'

const Skills = () => {
    const skills = [
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
            name: 'SCSS',
            logo: scssLogo,
        },
        {
            name: 'CSS',
            logo: cssLogo,
        },
        {
            name: 'HTML5',
            logo: htmlLogo,
        },
        {
            name: 'TypeScript',
            logo: tsLogo,
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
            name: 'MongoDB',
            logo: mongodbLogo,
        },
        {
            name: 'PostgreSQL',
            logo: postgresqlLogo,
        }
    ]

  return (
    <ItemsList title='Skills' subtitle='Check my tech stack' list={skills}/>
  )
}

export default Skills