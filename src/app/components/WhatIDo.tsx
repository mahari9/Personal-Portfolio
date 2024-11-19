import { FaProjectDiagram } from "react-icons/fa";
import { FaCode, FaDatabase, FaBullseye } from "react-icons/fa6";

const WhatIDo = () => {
    return (
        <main className="grid gap-5 w-[100%] text-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-[28px] font-bold" data-aos="fade-down">My Services</h1>
                <div className="bg-green-400 h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <FaProjectDiagram className="text-3xl text-green-400 font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl font-bold">Software Engineering</h1>
                        <p className="text-[14px] md:text-[16px]">I specialize in backend development, leveraging the power of JavaScript, Express, Node.js, Python, and Django to build robust, scalable applications. My expertise extends to databases like MySQL and MongoDB, enabling me to create comprehensive full-stack solutions that meet a variety of business needs. Additionally, I have experience in frontend technologies, including React, HTML5, and CSS3, which allows me to create visually appealing and responsive user interfaces. While my primary focus is on backend technologies, I ensure that the applications I develop are efficient, secure, and maintainable, providing optimal performance and user satisfaction.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <FaCode className="text-3xl text-green-400 font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl font-bold">Web Development</h1>
                        <p className="text-[14px] md:text-[16px]">
                        I provide clean, efficient code and ensure seamless backend functionality. While my primary focus is on robust and scalable backend solutions using JavaScript, Express, Node.js, Python, and Django, I also have the ability to deliver pixel-perfect web designs using frontend technologies like React, HTML5, and CSS3. My goal is to develop interactive and responsive websites that work flawlessly across all devices. Every application I build is designed to be fast, secure, and provide an exceptional user experience.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <FaDatabase className="text-3xl text-green-400 font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Data Analysis</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">In addition to my software engineering expertise, I am a seasoned data analyst with a talent for transforming complex data into actionable insights. Proficient in tools such as Excel, Python, SQL, and Tableau, I have successfully led projects that achieved significant cost savings and enhanced data accuracy. I thrive in collaborative environments and am eager to contribute to your team's success. Looking forward to discussing how my skills can benefit your organization</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <FaBullseye className="text-3xl text-green-400 font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Search Engine Optimization</h1>
                        <p className="text-[14px] md:text-[16px] text-litewhite">As a Full Stack Software Engineer, I recognize that SEO is a strategic and dynamic process vital to enhancing a website's online presence. When optimizing a website for search engines, I conduct a comprehensive analysis of its structure, content, and performance. This involves refining the code, improving loading speeds, and ensuring the website is mobile-friendly. My holistic approach to SEO not only boosts visibility but also enhances user experience, making sure that every aspect of the site is optimized for both search engines and users.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WhatIDo;