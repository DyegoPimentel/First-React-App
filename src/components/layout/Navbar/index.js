// Import useState to modify menu in mobile viewport
import { useState } from "react";
// Import react router dom
import { Link } from "react-router-dom";
// Import icons
import { MdMenu,MdClose,MdHowToReg } from "react-icons/md";
// Import the Dark Mode component
import DarkMode from "../../DarkMode";
// Import the Translate component
import Translate from "../../MultiLanguage";
// import the translate 
import {i18n} from "../../../translate/i18n"


function Navbar () {
    
    // useState to verify the mobile menu
    let [open,setOpen]=useState(false);
    
    // Variable to put css in li tags wihtout repeat
    let li_css = 'md:ml-4 md:my-0 my-7 text-white hover:text-blue-theme md:hover:text-cyan-theme cursor-pointer duration-500';

    return (
        <nav className="w-full sticky top-0 z-50">
            <div className="flex items-center md:justify-between py-4 md:px-10 px-7 bg-blue-theme 
            dark:bg-gray-dark" title={i18n.t("c_navbar.logo_alt")}>
                <Link to="/">
                    
                    <h1 className="flex items-center font-roboto font-black text-2xl text-cyan-theme hover:text-white 
                    dark:text-blue-theme dark:hover:text-white duration-500"
                >
                    <MdHowToReg className="pr-1 text-3xl text-white"/>
                    {i18n.t("c_navbar.logo")}</h1>
                </Link>

                {/* This set open or close the mobile navbar */}
                <div onClick={()=>setOpen(!open)} className='text-2xl text-white hover:text-cyan-theme absolute right-8 top-5 cursor-pointer md:hidden duration-500'>
                    {open ? <MdClose title={i18n.t("c_navbar.close_menu")}/>:<MdMenu title={i18n.t("c_navbar.open_menu")}/>}
                </div>

                <ul className={`md:flex list-none md:items-center md:pb-0  absolute md:static bg-cyan-theme md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto h-screen md:h-auto md:pl-0 pl-9 md:pr-0 pr-9 transition-all duration-500 ease-in ${open ? 'top-[100%]':'hidden'}`}>
                    <li className={li_css} title={i18n.t("c_navbar.home_alt")}>
                        <Link to="/">
                            {i18n.t("c_navbar.home")}
                        </Link>
                    </li>
                    <li className={li_css} title={i18n.t("c_navbar.docs_alt")}>
                        <a  target="_blank" 
                            href="https://dyego-pimentel.gitbook.io/reactjs-study/" 
                            rel="noreferrer"   
                        >
                            {i18n.t("c_navbar.docs")}
                        </a>
                    </li>
                    <li className={li_css} title={i18n.t("c_navbar.contact_alt")}>
                        <Link to="/Contact">
                            {i18n.t("c_navbar.contact")}
                        </Link>
                    </li>

                    <hr className="md:hidden"/>

                    <li className={li_css} title={i18n.t("c_navbar.theme_alt")}>
                        <DarkMode/>
                    </li>
                    <li className={li_css} title={i18n.t("c_navbar.language_alt")}>
                        <Translate/>
                    </li>
                </ul> 
            </div>
           
        </nav>

    )
}

export default Navbar;