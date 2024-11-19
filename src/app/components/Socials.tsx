import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaPhoneVolume, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa6";

const Socials = () => {
    return ( 
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <HiOutlineMail className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Email</p>
                    </div>
                    <a href="mailto:merytseg77@gmail.com" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className="text-litewhite text-[12px] md:text-[13px] font-medium">merytseg77@gmail.com</p>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite group-hover:text-green-400 transition-all delay-200 font-medium">Send Email</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaWhatsapp className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">WhatsApp</p>
                    </div>
                    <a href="https://wa.me/251944779932" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className="text-litewhite text-[12px] md:text-[13px] font-medium">+251944779932</p>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite group-hover:text-green-400 transition-all delay-200 font-medium">Call/Send Message</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaPhoneVolume className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Phone</p>
                    </div>
                    <a href="tel:+251944779932" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className="text-litewhite text-[12px] md:text-[13px] font-medium">+251944779932</p>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite group-hover:text-green-400 transition-all delay-200 font-medium">Call</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaTelegram className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Telegram</p>
                    </div>
                    <a href="https://t.me/@TTMM79" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className="text-litewhite text-[12px] md:text-[13px] font-medium">@TTMM79</p>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite group-hover:text-green-400 transition-all delay-200 font-medium">Call/Send Message</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaInstagram className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Instagram</p>
                    </div>
                    <a href="https://www.instagram.com/maharitsegay9/" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className="text-litewhite text-[12px] md:text-[13px] font-medium">maharitsegay9</p>
                        <h4 className="text-[14px] md:text-[16px] text-litewhite group-hover:text-green-400 transition-all delay-200 font-medium">Send Message</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-light-blue-3" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <HiOutlineMapPin className="p-2 rounded-xl text-green-400 bg-light-blue-3 border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Location</p>
                    </div>

                    <h4 className="text-[14px] md:text-[16px] text-litewhite transition-all delay-200 font-medium">Addis Ababa, Ethiopia</h4>
                </div>
        </main>
    );
}

export default Socials;
