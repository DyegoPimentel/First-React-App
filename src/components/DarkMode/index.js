import { MdNightlight,MdLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

function DarkMode () {

    const {theme,setTheme} = useTheme();

    return (
        <div>
            {theme === "light" ? (
                <div onClick={()=>setTheme("dark")} className="flex items-center">
                    <MdNightlight/> 
                    <p className="ml-1.5 md:hidden">Dark Mode</p>
                </div>
            ):(
                <div onClick={()=>setTheme("light")} className="flex items-center">
                    <MdLightMode/> 
                    <p className="ml-1.5 md:hidden">Light Mode</p>
                </div>
            )}
            
        </div>

    )
}

export default DarkMode;