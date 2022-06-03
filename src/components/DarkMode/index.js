import { MdNightlight,MdLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";
// import the translate 
import {i18n} from "../../translate/i18n"

function DarkMode () {

    const {theme,setTheme} = useTheme();

    return (
        <div>
            {theme === "light" ? (
                <div onClick={()=>setTheme("dark")} className="flex items-center">
                    <MdNightlight/> 
                    <p className="ml-1.5 md:hidden">{i18n.t("c_darkmode.dark")}</p>
                </div>
            ):(
                <div onClick={()=>setTheme("light")} className="flex items-center">
                    <MdLightMode/> 
                    <p className="ml-1.5 md:hidden">{i18n.t("c_darkmode.light")}</p>
                </div>
            )}
            
        </div>

    )
}

export default DarkMode;