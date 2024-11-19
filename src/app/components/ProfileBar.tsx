import Image from "next/image";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile, HiOutlineMapPin } from "react-icons/hi2";

const ProfileBar = () => {

    return (
        <aside className="relative lg:absolute w-full lg:w-[23%] bg-light-red rounded-lg border border-jet border-solid shadow-sm shadow-jet py-3 px-5 flex flex-col gap-4">
            <div className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-2">
                <div className="w-[25%] lg:w-full flex items-center justify-center">
                    <Image src="/img/maharitsegay.svg" width={200} height={200} alt="Mahari Tsegay Image" className="w-full lg:w-[60%] rounded-lg" loading="eager"/>
                </div>

                <div className="flex flex-col items-start lg:items-center gap-2">
                    <h1 className="text-litewhite text-xl md:text-[24px] font-bold text-center">Mahari Tsegay</h1>

                    <h3 className="p-1 rounded-lg bg-smoky-gray text-litewhite text-[14px] md:text-[16px] text-center font-medium">Software Engineer - Full Stack</h3>

                    <a href="/resume/Mahari Resume.pdf" target="_blank" download="Mahari Resume.pdf" className="py-[3px] px-3 md:px-5 rounded-md text-light-blue-3 hover:text-green-400 bg-green-400 hover:bg-light-blue-3 hover:border-jet border border-solid text-[12px] md:text-[14px] font-bold transition-all delay-200 flex items-center justify-center">Resume <HiDownload className="ml-1 animate-bounce"/> </a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 items-start border-t-[2px] border-b-[2px] border-jet border-solid pt-3 pb-3 overflow-x-hidden">
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMail className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="mailto:egesionucharlesobimnaeto@gmail.com" target="_blank">
                            <p className="text-gray text-[12px] font-bold">Email</p>
                            <h4 className="text-[12px] text-litewhite">merytseg77@gmail.com</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineDevicePhoneMobile className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="tel:+2348147371491" target="_blank">
                            <p className="text-gray text-[12px] font-bold">Phone</p>
                            <h4 className="text-[12px] text-litewhite">+251944779932</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMapPin className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl md:text-3xl" />
                        <div>
                            <p className="text-gray text-[12px] font-bold">Location</p>
                            <h4 className="text-[12px] text-litewhite">Addis Ababa, Ethiopia</h4>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ProfileBar;