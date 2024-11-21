import { HiDownload } from "react-icons/hi";
import Home1 from "./home1";
import Type from "./type";
import Image from "next/image";
import React, { useEffect } from "react";

const LandngPage = () => {

  return (
    <main className="relative ml-0 w-full bg-transparent p-5 lg:pr-[5%] lg:pl-[10%] flex flex-col gap-10 mt-[10%] pb-10 mb-[2rem] overflow-hidden">
      <main className="relative ml-0 w-full lg:w-100% flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[50%] flex-col items-center text-white justify-center">
          <h1 className="text-2xl md:text-[28px] pb-4 font-bold" data-aos="fade-down">
            Welcome!{" "}
            <span className="animate-ping">
              ✨
            </span>
          </h1>
          <h1 className="text-2xl md:text-[28px] font-bold" data-aos="fade-down">
            I'M
            <strong className="main-name"> Mahari Tsegay</strong>
          </h1>
          
          <div className="pt-5 lg:pt-[70px] text-2xl md:text-[28px] font-bold" data-aos="fade-down">
            <Type />
          </div>
        </div>
        <div className="relative lg:right-0 w-full lg:w-[40%] flex flex-col items-center justify-center gap-3 rounded-lg border border-jet border-solid shadow-sm shadow-jet py-3 px-5">
          <div className="w-full lg:w-[60%] flex items-center justify-center">
            <Image src="/img/maharitsegay.svg" width={200} height={200} alt="Mahari Tsegay Image" className="w-full h-auto rounded-lg" loading="eager"/>
          </div>

          <div className="flex flex-col items-start lg:items-center gap-2">
            <h1 className="text-litewhite text-xl md:text-[24px] font-bold text-center">Mahari Tsegay</h1>
            
            <h3 className="p-1 rounded-lg bg-smoky-gray text-litewhite text-[14px] md:text-[16px] text-center font-medium">Software Engineer - Full Stack</h3>
            <a href="/resume/Mahari Resume.pdf" target="_blank" download="Mahari Resume.pdf" className="py-[3px] px-3 md:px-5 rounded-md text-light-blue-3 hover:text-green-400 bg-green-400 hover:bg-light-blue-3 hover:border-jet border border-solid text-[12px] md:text-[14px] font-bold transition-all delay-200 flex items-center justify-center">Resume <HiDownload className="ml-1 animate-bounce"/> </a>
          </div>
        </div>
      </main>
      <Home1 />
    </main>
  );
}

export default LandngPage;