import ItemsList from '../itemsList/ItemsList'
import githubLogo from '../../assets/icons/github.svg'
import jiraLogo from '../../assets/icons/jira.svg'
import postmanLogo from '../../assets/icons/postman.svg'
import chromeDTLogo from '../../assets/icons/chrome-devtools.svg'
import vsCodeLogo from '../../assets/icons/vs-code.svg'
import intellijLogo from '../../assets/icons/intellij.svg'

const Tools = () => {
    const tools = [
        {
            name: 'GitHub',
            logo: githubLogo
        },
        {
            name: 'Jira',
            logo: jiraLogo
        },
        {
            name: 'Postman',
            logo: postmanLogo
        },
        {
            name: 'DevTools',
            logo: chromeDTLogo
        },
        {
            name: 'VS Code',
            logo: vsCodeLogo
        },
        {
            name: 'Intellij',
            logo: intellijLogo
        },
    ]

  return (
    <ItemsList title='Tools' subtitle='What I can use' list={tools}/>
  )
}

export default Tools
