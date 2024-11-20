'use client'
import MyProjects from "../components/MyProjects";
import BackToTop from "../components/BackToTop";

const Projects = () => {
    return ( 
        <main className="w-full min-h-screen h-full p-[5%] bg-gradient-to-tr from-stone-950 via-green-950 to-stone-950  flex flex-col gap-10 mt-0 mb-0 overflow-hidden">
            <MyProjects />
            <BackToTop targetId={"top"} />
    </main>
    );
}

export default Projects;