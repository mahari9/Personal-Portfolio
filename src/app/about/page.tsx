'use client'
import WhatIDo from "../components/WhatIDo";
import Skills from "../components/Skills";
import InscribeQuotes from "../components/InscribeQuotes";
import BackToTop from "../components/BackToTop";
export default function Home() {
    return (
        <main className="flex w-full text-white bg-gradient-to-tr from-stone-950 via-green-950 to-stone-950 p-[5%] flex flex-col gap-10 mt-0 mb-0 overflow-hidden">
                    <section className="flex flex-col text-white gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl md:text-[28px] font-bold" data-aos="fade-down">About Me</h1>
                            <div className="bg-green-400 h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                        </div>
                        <p className="text-[14px] md:text-[16px] text-justify" data-aos="fade-down">As a Full Stack Software Engineer, I possess a proven ability to build durable and efficient websites for small and medium-sized enterprises. My enthusiasm for programming drives my work in both Backend and Frontend development, and I am an active open-source contributor. I am dedicated to team success, exemplified by my hard work, innovative problem-solving, and superior organizational skills. My expertise lies in JavaScript, Node.js, React.js, and Express.js, where I have a history of creating robust and scalable web applications that provide excellent user experiences. My commitment to clean, reusable code and pixel-perfect web design ensures high-quality results. I also enhance websites with responsive designs and interactive web animations, making them accessible on all devices.In addition to my development skills, I am a seasoned data analyst proficient in Python, SQL, and MongoDB. I have led projects that have delivered significant cost savings and improved data accuracy. I thrive in team environments and am eager to contribute to your organization's success. I look forward to discussing how my skills can support your goals.</p>
                    </section>

                    <WhatIDo />

                    <Skills />

                    <InscribeQuotes />

                    <BackToTop targetId={"top"} />
        </main>
    );
}