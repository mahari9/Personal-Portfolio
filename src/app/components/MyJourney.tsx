import { FiBookOpen } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";


const MyJourney = () => {
    return (
        <main className="flex ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-transparent rounded-lg border border-jet border-solid p-5 flex flex-col gap-10 mr-[5%] mt-10 lg:mt-0 pb-10 lg:mb-0 mb-0 overflow-hidden">
            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-litewhite" data-aos="fade-down">My Journey</h1>
                    <div className="bg-green-400 h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                </div>
                
                <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Education</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">Addis Ababa University, Addis Ababa Institute of Technology(AAIT)</h3>
                        <h4 className="text-[15px] md:text-[17px] text-litewhite" data-aos="fade-down">Civil Engineering</h4>
                        <p className="text-[14px] md:text-[16px] text-green-400" data-aos="fade-down">2012 - 2016</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-green-400 text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">ALX Africa Software Engineering Program</h3>
                        <h4 className="text-[15px] md:text-[17px] text-litewhite" data-aos="fade-down">Low-Level Programming & Algorithm, High-Level Programming, System Engineering & DevOps, Technical Writing and Networking</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite font-bold font-italic" data-aos="fade-down">Full - Stack Software Engineer </h4>
                        <p className="text-[14px] md:text-[16px] text-green-400" data-aos="fade-down">2023 - 2024</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-green-400 text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>

                <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Certifications</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">ALX Software Engineering</h3>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">Python Programming</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">ALX low Level Programming</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">ALX High Level Programming</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">JavaScript Programming</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">HTML/CSS Programming</h4>
                        <p className="text-[14px] md:text-[16px] text-green-400" data-aos="fade-down">2024</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-green-400 text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">Self-Study</h3>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">Responsive Web Design</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">HTML, CSS, JavaScript, jQuery</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">Game Development with JavaScript</h4>
                        <p className="text-[14px] md:text-[16px] text-green-400" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-green-400 text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>

                <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Working Experience</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">Upwork</h3>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-italic" data-aos="fade-down">Freelancer (Full-stack Developer)</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">- Specialize in building robust and scalable server-side applications using Node.js, Express.js, and MongoDB. I create efficient and secure APIs that ensure seamless data flow and integration for client applications.</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">- Collaborate with cross-functional teams including front-end developers, product managers, and database administrators to develop high-quality backend services and APIs.</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">- Stay up-to-date with the latest backend development trends and technologies, ensuring that my clients receive the most advanced and reliable solutions.</h4>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">- Participate in code reviews, offering constructive feedback, and ensuring code quality, security, and performance standards.</h4>
                        <p className="text-[14px] md:text-[16px] text-green-400" data-aos="fade-down">2024</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-green-400 text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>
            </section>

        </main>
    );
}

export default MyJourney;