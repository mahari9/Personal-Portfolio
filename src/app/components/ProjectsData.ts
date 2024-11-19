interface ProjectDataTypes {
    id: number;
    projectImgURL: string;
    projectTitle: string;
    ProjectAbout: string;
    stack: string;
    projectGithubURL: string;
    projectLiveURL: string;
    }
    
  const ProjectData: ProjectDataTypes[] = [
    {
        id: 1,
        projectImgURL: "/img/yourhome.png",
        projectTitle: "Your Home",
        ProjectAbout: "Your Home is a web-based platform designed to streamline the process of finding, connecting with, and managing housing options for both homeowners and renters. The platform aims to simplify the housing search by providing a user-friendly interface and efficient environment where homeowners can list their properties and buyers/renters can easily find and connect with potential homes.",
        stack: "Javascript |Node.js | React.js | Vite | Express | MongoDB",
        projectGithubURL: "https://github.com/mahari9/Your-home",
        projectLiveURL: "https://your-home-slai.onrender.com",
    },
    {
        id: 2,
        projectImgURL: "/img/easyfreight.png",
        projectTitle: "Easy Freight",
        ProjectAbout: "Easy Freight is a web-based platform designed to streamline the process of finding, connecting with, and managing freight services for both shippers and carriers. The platform aims to simplify the freight search by providing a user-friendly interface and efficient environment where shippers can list their freight and carriers can easily find and connect with potential freight.",
        stack: "Python | Flask | HTML | CSS | MySQL",
        projectGithubURL: "https://github.com/mahari9/Portfolio_Project",
        projectLiveURL: "https://github.com/mahari9/mahari9.github.io",
    },
    
    {
        id: 3,
        projectImgURL: "/img/personalportfolio.png",
        projectTitle: "Personal Portfolio",
        ProjectAbout: "This is the website you are currently on. My portfolio website that showcases my about, what I do, stack, journey, projects and contact information.",
        stack: "NextJS | Typescript | TailwindCSS | AOS",
        projectGithubURL: "https://github.com/mahari9/Personal-portfolio",
        projectLiveURL: "https://mahari9.vercel.app/",
    },
]

export default ProjectData
