// Import useState to modify menu in mobile viewport
import { useState } from "react";
// Import react router dom
import { Link } from "react-router-dom";
// Import icons
import { MdMenu,MdClose } from "react-icons/md";
// Import the Dark Mode component
import DarkMode from "../../DarkMode";
// Import the Translate component
import Translate from "../../Translate";


function Navbar () {
    
    // useState to verify the mobile menu
    let [open,setOpen]=useState(false);
    
    // Variable to put css in li tags wihtout repeat
    let li_css = 'md:ml-4 md:my-0 my-7 text-white hover:text-blue-theme md:hover:text-cyan-theme cursor-pointer duration-500';

    return (
        <nav className="w-full sticky top-0 ">
            <div className="flex items-center md:justify-between py-4 md:px-10 px-7 bg-blue-theme 
            dark:bg-gray-dark">
                <Link to="/">
                    <h1 className="font-roboto font-black text-2xl text-cyan-theme hover:text-white 
                    dark:text-blue-theme dark:hover:text-white duration-500"
                    >MECONTRATA</h1>
                </Link>

                {/* This set open or close the mobile navbar */}
                <div onClick={()=>setOpen(!open)} className='text-2xl text-white hover:text-cyan-theme absolute right-8 top-5 cursor-pointer md:hidden duration-500'>
                    {open ? <MdClose/>:<MdMenu/>}
                </div>

                <ul className={`md:flex list-none md:items-center md:pb-0 pb-12 absolute md:static bg-cyan-theme md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:pr-0 pr-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
                    <li className={li_css}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={li_css}>
                        <a target="_blank" href="https://dyego-pimentel.gitbook.io/reactjs-study/" rel="noreferrer">Docs</a>
                    </li>
                    <li className={li_css}>
                        <Link to="/Contact">Bora conversar?</Link>
                    </li>

                    <hr className="md:hidden"/>

                    <li className={li_css}>
                        <DarkMode/>
                    </li>
                    <li className={li_css}>
                        <Translate/>
                    </li>
                </ul> 
            </div>
           
        </nav>

    )
}

export default Navbar;