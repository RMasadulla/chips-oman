"use client"

import { useState, useEffect  } from "react";
import Logo from "./logo"
import Menu from "./menu"

const Header = () => {

    const [navScrool, setNavScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setNavScroll(window.scrollY > 0);
        };
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className={navScrool ?
            `w-full bg-primary py-4 text-white fixed z-[9999] transition-all`
            : `w-full bg-primary py-4 text-white`}>
            <nav className="flex items-center container  m-auto justify-between">
                <Logo />
                <Menu />
            </nav>
        </header>
    )
}

export default Header




