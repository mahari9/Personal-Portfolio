"use client"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <footer className="fixed:bottom w-full z-50">
            <div className="flex flex-col md:flex-row p-5 gap-4 md:justify-between text-litewhite text-lg xl:text-xl font-medium text-litewhite bg-gradient-to-tl from-stone-950 to-green-950 w-full z-50">
                <h3 className="flex items-center justify-center md:ml-[5%] font-bold">
                    Mahari Tsegay
                </h3>
                <h3 className="flex items-center justify-center text-base xl:text-lg">
                    Copyright © {year} MT
                </h3>
                <div className="flex items-center justify-center md:mr-[5%] gap-4">
                    <a href="https://github.com/mahari9" target="_blank"><FaGithub className="text-2xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                    <a href="https://www.linkedin.com/in/mahari-tsegay-22376524a/" target="_blank"><FaLinkedinIn className="text-2xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;