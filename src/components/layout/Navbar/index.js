
import { MdGTranslate } from "react-icons/md";
import DarkMode from "../../DarkMode";
import"./Navbar.css"
function Navbar () {

    return (
        <nav className="navbar bg-indigo-500 dark:bg-indigo-700">
            
            <div>
                <h1 >MECONTRATA</h1>
            </div>


            <ul>
                <li>
                    
                </li>
                <li>
                    <MdGTranslate/>
                </li>
                <li>
                    <DarkMode />
                </li>
            </ul>            
        </nav>

    )
}

export default Navbar;