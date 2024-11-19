import Socials from "./Socials";
import ContactForm from "./ContactForm";
const MyContact = () => {
    return ( 
        <main className="relative w-full bg-transparent flex flex-col gap-10 mt-0 pb-10 lg:mb-0 mb-[4rem] overflow-hidden">
                <section className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">Contact Details</h1>
                        <div className="bg-green-400 h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                    </div>
                </section>

            <Socials />

            <ContactForm />
        </main>
    );
}

export default MyContact;