// Import icons
import {FaGithubSquare,FaLinkedin,FaBehanceSquare} from 'react-icons/fa'

function Footer () {

    return (
        <footer className="text-center p-4 items-center justify-center content-center place-content-center bg-slate-200 dark:text-white dark:bg-gray-dark" >
            <div className="mr-4 mb-1 text-silver-theme hover:text-cyan-theme">
                <a href="https://dyego-pimentel.gitbook.io/reactjs-study/" target="_blank" rel="noreferrer">Documentação</a>
            </div>
            <ul className="flex list-none items-center text-center justify-center content-center text-2xl">
                <li className="mr-4 text-silver-theme hover:text-cyan-theme">
                    <a href="https://github.com/dyegopimentel" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                </li>
                <li className="mr-4 text-silver-theme hover:text-cyan-theme">
                    <a href="https://www.linkedin.com/in/dyegopimentel/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                </li>
                <li className="mr-4 text-silver-theme hover:text-cyan-theme">
                    <a href="https://www.behance.net/dyegopimentel" target="_blank" rel="noreferrer"><FaBehanceSquare/></a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer;