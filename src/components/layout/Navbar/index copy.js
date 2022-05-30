// Import react router dom
import { Link } from "react-router-dom";
// Import icons
import { MdGTranslate } from "react-icons/md";
// Importa Dark Mode component
import DarkMode from "../../DarkMode";


function Navbar () {

    return (
        <nav className="flex p-4 items-center justify-between sticky top-0 bg-blue-theme dark:bg-gray-dark">
            
            <Link to="/">
                <h1 className=" font-roboto 
                                font-black 
                                text-2xl 
                                text-cyan-theme 
                                hover:text-white 
                                dark:text-blue-theme 
                                dark:hover:text-white"
                >MECONTRATA</h1>
            </Link>

            <ul className="flex list-none items-center">
                <li className="mr-4 text-white hover:text-cyan-theme">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-4 text-white hover:text-cyan-theme">
                    <a target="_blank" href="https://dyego-pimentel.gitbook.io/reactjs-study/" rel="noreferrer">Docs</a>
                </li>
                <li className="mr-4 text-white hover:text-cyan-theme">
                    <Link to="/Contact">Bora conversar?</Link>
                </li>
                <li className="mr-4 text-white hover:text-cyan-theme cursor-pointer">
                    <MdGTranslate/>
                </li>
                <li className="text-white hover:text-cyan-theme cursor-pointer">
                    <DarkMode />
                </li>
            </ul>            
        </nav>

    )
}

export default Navbar;