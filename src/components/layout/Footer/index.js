// Import icons
import {FaGithubSquare,FaLinkedin,FaBehanceSquare,FaYoutubeSquare} from 'react-icons/fa'
// Import i18n Translate
import {i18n} from '../../../translate/i18n'

function Footer () {

    const socialIcons = [
        {icon:<FaGithubSquare/>, alt:"c_footer.github_alt",url:"https://github.com/dyegopimentel"},
        {icon:<FaLinkedin/>, alt:"c_footer.linkedin_alt",url:"https://www.linkedin.com/in/dyegopimentel/"},
        {icon:<FaBehanceSquare/>, alt:"c_footer.behance_alt",url:"https://www.behance.net/dyegopimentel"},
        {icon:<FaYoutubeSquare/>, alt:"c_footer.youtube_alt",url:"https://www.youtube.com/channel/UC4lw3GgcNetQnTwZf5d0zXA?sub_confirmation=1"},
        
    ]

    return (
        <footer className="text-center p-4 items-center justify-center content-center place-content-center bg-background-secondary-light dark:bg-background-secondary-dark " >
            <div className="mr-4 mb-1 text-theme-gray-light dark:text-theme-gray-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark">
                <a href="https://dyego-pimentel.gitbook.io/reactjs-study/" target="_blank" rel="noreferrer" title={i18n.t('c_footer.docs_alt')}>{i18n.t('c_footer.docs')}</a>
            </div>
            <ul className="flex list-none items-center text-center justify-center content-center text-2xl">

                {/* Loop icons */}
                {socialIcons.map((icons) => {
                    const {icon,url,alt} = icons
                    return(
                        <li className="mr-4 text-theme-gray-light dark:text-theme-gray-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark" title={i18n.t(alt)}>
                            <a href={url} target="_blank" rel="noreferrer">{icon}</a>
                        </li>
                    );
                })}

            </ul>
        </footer>

    )
}

export default Footer;