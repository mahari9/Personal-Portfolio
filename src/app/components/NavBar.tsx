"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoChecklist } from "react-icons/go";
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();

    // Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle link click to close menu 
    const handleLinkClick = () => {
        setIsMenuOpen(false);

    };

    return (
        <>
            <header className="fixed:top w-full z-50">
                <nav className="flex flex-row text-litewhite rounded-bl-none p-4 backdrop-blur-lg bg-gradient-to-bl from-green-950 to-stone-950 w-full z-36">
                    <div className="ml-[5%] w-auto flex items-center text-[28px] md:text-[32px] font-medium">
                        <Link href="/" className={pathName === "/" ? "flex items-left gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}> Mahari Tsegay </Link>
                    </div>
                    <div className="absolute top-0 right-0 flex justify-center p-4 sm:p-5 text-[32px] md:text-[44px] text-green-400 bg-light-blue-3 hover:bg-jet flex lg:hidden cursor-pointer">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <AiOutlineClose className="flex items-center justify-center text-[32px] md:text-[44px] text-green-400 cursor-pointer"/> : <AiOutlineMenu className="flex items-center justify-center text-4xl md:text-5xl text-green-400 cursor-pointer"/>}
                        </button>
                    </div>
                    <div className="hidden lg:flex flex-row gap-3 mr-[5%] ml-auto lg:w-auto items-center justify-end text-lg xl:text-xl font-medium gap-8 xl:gap-12">
                        <Link href="/" className={pathName === "/" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><AiOutlineHome /> Home</Link>
                        <Link href="/about" className={pathName === "/about" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><FaUser /> About</Link>
                        <Link href="/journey" className={pathName === "/journey" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><GoChecklist /> Journey</Link>
                        <Link href="/projects" className={pathName === "/projects" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><AiOutlineFundProjectionScreen /> Projects</Link>
                        <Link href="/contact" className={pathName === "/contact" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><RiContactsBookFill /> Contact</Link>
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div className="w-[50%] fixed top-16 right-0 h-auto items-start text-xl sm:text-[28px] font-medium text-litewhite bg-gradient-to-bl from-green-950 to-stone-950 p-5 flex flex-col gap-4 sm:gap-6 lg:hidden z-[1000]">
                    <Link href="/" onClick={handleLinkClick} className={pathName === "/" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><AiOutlineHome /> Home</Link>
                    <Link href="/about" onClick={handleLinkClick} className={pathName === "/about" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><FaUser /> About</Link>
                    <Link href="/journey" onClick={handleLinkClick} className={pathName === "/journey" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><GoChecklist /> Journey</Link>
                    <Link href="/projects" onClick={handleLinkClick} className={pathName === "/projects" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><AiOutlineFundProjectionScreen /> Projects</Link>
                    <Link href="/contact" onClick={handleLinkClick} className={pathName === "/contact" ? "flex items-center gap-1 visited:text-green-400 font-bold transition-all delay-200" : "flex items-center gap-1 hover:text-gray transition-all delay-200"}><RiContactsBookFill /> Contact</Link>
                </div>
            )}
        </>
    );
}

export default NavBar;
