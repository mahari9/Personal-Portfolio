import React from 'react'
import { FaGithub, FaXTwitter, FaLinkedinIn, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa6";

function Home1() {
  return (
    <main className="relative flex-col items-center text-white justify-center w-[100%]">
        <div className="w-[100%] lg:w-[50%] flex-col items-center justify-center">
            <h1 className="text-2xl md:text-[28px] font-bold" data-aos="fade-down">
              Here's a brief introduction about me
            </h1>
            <p className="mt-[28px] md:mt-[30px] text-[14px] md:text-[18px]" data-aos="fade-down">
              I'm a passionate programmer and tech enthusiast with a love for innovation.
              My journey in coding has led me to master languages like,<a className="text-green-400"> JavaScript and Python, </a>
              and I thrive on creating cutting-edge web technologies and applications using
              <a className="text-green-400"> Django, Flask, Express, and React.js.</a>
              <br/>
              <span className="block my-4">
                In addition to my primary focus, I have a keen interest in data analysis, driven by my skills in databases such as
                <a className="text-green-400"> MongoDB and MySQL,</a> as well as my fluency in <a className="text-green-400"> Python.</a>
                <br/>
              </span>
              I’m always eager to explore new challenges and bring my creative ideas to life.
            </p>
          </div>
        <div className="w-[100%] text-center mt-[47px] md:mt-[100px]">
            <p className="text-green-400 text-[14px] md:text-[16px] font-bold" data-aos="fade-down">
              Let's connect anytime!
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
                <a href="https://github.com/mahari9" target="_blank"><FaGithub className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                <a href="https://x.com/TsegayMahari/" target="_blank"><FaXTwitter className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                <a href="https://www.linkedin.com/in/mahari-tsegay-22376524a/" target="_blank"><FaLinkedinIn className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                <a href="https://wa.me/251944779932" target="_blank"><FaWhatsapp className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                <a href="t.me/@TTMM79" target="_blank"><FaTelegram className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
                <a href="https://www.instagram.com/maharitsegay9/" target="_blank"><FaInstagram className="text-4xl md:text-3xl p-2 rounded-xl bg-light-blue-3 hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-green-400 font-medium" /></a>
            </div>
        </div>
    </main>
  )
}
export default Home1