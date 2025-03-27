import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography"
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandReact, TbBrandTailwind } from "react-icons/tb";
import Card from "../molecules/Card";
import useEmblaCarousel from "embla-carousel-react";
import { JSX, useCallback } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { FaVuejs } from "react-icons/fa6";
import { PiGearSixBold } from "react-icons/pi";
import { RiNodejsLine } from "react-icons/ri";
import ClassNames from "embla-carousel-class-names";
import { TbBrandLaravel } from "react-icons/tb";
import { SiClevercloud, SiMongodb, SiMysql, SiNetlify, SiRefinedgithub } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaDocker } from "react-icons/lia";


interface interfaceStackData {
    iconCard: JSX.Element;
    cardTitle: string
    cardDescription: string
    cardContent: string
}

const stackData: interfaceStackData[] = [
    {
        iconCard: <PiGearSixBold className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Agile",
        cardDescription: "Software Development Methodology",
        cardContent: "Experienced in implementing Agile methodologies, including Scrum and Kanban, for efficient project management in software development."
    },
    {
        iconCard: <TbBrandTailwind className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Tailwind CSS",
        cardDescription: "Utility-First CSS Framework",
        cardContent: "Utilizing Tailwind CSS to build responsive and modern user interfaces in React and Vue-based projects."
    },
    {
        iconCard: <FaVuejs className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Vue.js",
        cardDescription: "Progressive Frontend Framework",
        cardContent: "Developing interactive frontend applications using Vue.js, with Vuex for state management and Vue Router for navigation."
    },
    {
        iconCard: <TbBrandReact className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "React",
        cardDescription: "JavaScript UI Library",
        cardContent: "Proficient in building React applications using Hooks, Context API, Redux, and API integration with Axios or Fetch."
    },
    {
        iconCard: <TbBrandLaravel className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Laravel",
        cardDescription: "PHP Backend Framework",
        cardContent: "Developing backend applications with Laravel, including REST API implementation, authentication, and ORM using Eloquent."
    },
    {
        iconCard: <RiNodejsLine className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Express.js",
        cardDescription: "Minimalist Node.js Framework",
        cardContent: "Building APIs with Express.js using MongoDB or MySQL, and implementing middleware for authentication and logging."
    },
    {
        iconCard: <SiMysql className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "MySQL",
        cardDescription: "Relational Database System",
        cardContent: "Managing relational databases with MySQL, optimizing queries, and integrating databases with backend services."
    },
    {
        iconCard: <SiMongodb className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "MongoDB",
        cardDescription: "NoSQL Database",
        cardContent: "Experienced in designing NoSQL databases with MongoDB, including data aggregation and performance optimization with indexing."
    },
    {
        iconCard: <BiLogoPostgresql className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "PostgreSQL",
        cardDescription: "Advanced Relational Database",
        cardContent: "Working with PostgreSQL features such as JSONB, indexing, and ACID transactions for scalable applications."
    },
    {
        iconCard: <SiRefinedgithub className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "GitHub",
        cardDescription: "Version Control Platform",
        cardContent: "Managing source code with GitHub, implementing Git Flow, pull requests, and continuous integration (CI/CD)."
    },
    {
        iconCard: <LiaDocker className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Docker",
        cardDescription: "Containerization Platform",
        cardContent: "Deploying applications using Docker, including creating Dockerfiles, docker-compose setups, and container orchestration."
    },
    {
        iconCard: <SiClevercloud className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Vercel",
        cardDescription: "Frontend Deployment Platform",
        cardContent: "Deploying Next.js and React-based applications on Vercel with automatic configuration for performance optimization."
    },
    {
        iconCard: <SiNetlify className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Netlify",
        cardDescription: "JAMstack Deployment Platform",
        cardContent: "Using Netlify for hosting JAMstack-based projects, including automated builds and domain configuration."
    }
]


const MySkill = () => {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ axis: 'y', loop: false, watchDrag: false, align: "start" }, [ ClassNames(), ])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [ emblaApi ])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [ emblaApi ])

    return (
        <section className="h-full">
            <div className="flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-2 text-justify">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Skills <Icon><IoIosArrowForward /></Icon> Non-Technical</Typography>
                    <Typography variantClass="body" tag="p">I possess strong non-technical skills, including effective communication, the ability to collaborate dynamically within a team, and experience in teaching and mentoring as a lab assistant for Web Technology, Mobile Technology, and Web Programming courses. I am also highly adaptable to dynamic work environments and actively contribute to team efforts to achieve shared goals. </Typography>
                </div>
                <div className="flex flex-col gap-2 h-[350px] lg:h-full relative">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Skills <Icon><IoIosArrowForward /></Icon> Technical</Typography>
                    <div className="slider border embla skill absolute w-full z-20 p-[10px_10px_50px_10px] rounded-xl" ref={emblaRef}>
                        <div className="list embla__container skill ">
                            {stackData.map((skill, index) => (
                                <div key={index} className="item embla__slide skill gap-2">
                                    <Card
                                        iconCard={skill.iconCard}
                                        cardTite={skill.cardTitle}
                                        cardDescription={skill.cardDescription}
                                        cardContent={skill.cardContent}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="container-btn border-l border-t flex absolute bottom-[-1px] z-50 right-[-1px] gap-2 bg-white px-2 rounded-tl-xl rounded-br-xl py-2">
                        <button className="embla__prev" onClick={scrollPrev}>{<FiArrowUpCircle className="w-7 h-7 " />}
                        </button>
                        <button className="embla__next " onClick={scrollNext}>{<FiArrowDownCircle className="w-7 h-7 " />}</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MySkill