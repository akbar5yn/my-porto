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
        cardContent: "Berpengalaman dalam menerapkan metode Agile, termasuk Scrum dan Kanban, dalam pengelolaan proyek pengembangan perangkat lunak."
    },
    {
        iconCard: <TbBrandTailwind className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Tailwind CSS",
        cardDescription: "Utility-First CSS Framework",
        cardContent: "Menggunakan Tailwind CSS untuk membangun UI yang responsif dan modern dalam proyek berbasis React dan Vue."
    },
    {
        iconCard: <FaVuejs className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Vue.js",
        cardDescription: "Progressive Frontend Framework",
        cardContent: "Membangun aplikasi frontend interaktif menggunakan Vue.js, Vuex untuk state management, dan Vue Router untuk navigasi."
    },
    {
        iconCard: <TbBrandReact className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "React",
        cardDescription: "JavaScript UI Library",
        cardContent: "Berpengalaman dalam membangun aplikasi React dengan Hooks, Context API, Redux, dan integrasi API menggunakan Axios atau Fetch."
    },
    {
        iconCard: <TbBrandLaravel className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Laravel",
        cardDescription: "PHP Backend Framework",
        cardContent: "Mengembangkan aplikasi backend dengan Laravel, termasuk implementasi REST API, autentikasi, dan ORM menggunakan Eloquent."
    },
    {
        iconCard: <RiNodejsLine className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Express.js",
        cardDescription: "Minimalist Node.js Framework",
        cardContent: "Membangun API menggunakan Express.js dengan MongoDB atau MySQL, serta menerapkan middleware untuk otentikasi dan logging."
    },
    {
        iconCard: <SiMysql className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "MySQL",
        cardDescription: "Relational Database System",
        cardContent: "Menggunakan MySQL untuk mengelola database dengan skema relasional, optimasi query, dan integrasi dengan backend."
    },
    {
        iconCard: <SiMongodb className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "MongoDB",
        cardDescription: "NoSQL Database",
        cardContent: "Berpengalaman dalam desain database NoSQL menggunakan MongoDB, termasuk agregasi data dan indexing untuk optimasi performa."
    },
    {
        iconCard: <BiLogoPostgresql className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "PostgreSQL",
        cardDescription: "Advanced Relational Database",
        cardContent: "Menggunakan PostgreSQL dengan fitur seperti JSONB, indexing, dan transaksi ACID untuk aplikasi skala besar."
    },
    {
        iconCard: <SiRefinedgithub className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "GitHub",
        cardDescription: "Version Control Platform",
        cardContent: "Mengelola kode sumber dengan GitHub, menggunakan Git Flow, pull request, dan continuous integration (CI/CD)."
    },
    {
        iconCard: <LiaDocker className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Docker",
        cardDescription: "Containerization Platform",
        cardContent: "Mendeploy aplikasi menggunakan Docker, termasuk pembuatan Dockerfile, docker-compose, dan container orchestration."
    },
    {
        iconCard: <SiClevercloud className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Vercel",
        cardDescription: "Frontend Deployment Platform",
        cardContent: "Mendeploy aplikasi frontend berbasis Next.js dan React ke Vercel dengan konfigurasi otomatis untuk optimasi performa."
    },
    {
        iconCard: <SiNetlify className="w-8 h-8 lg:w-12 lg:h-12 items-center flex justify-center" />,
        cardTitle: "Netlify",
        cardDescription: "JAMstack Deployment Platform",
        cardContent: "Menggunakan Netlify untuk hosting proyek berbasis JAMstack, termasuk otomatisasi build dan konfigurasi domain."
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
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Non-Teknis</Typography>
                    <Typography variantClass="body" tag="p">Saya memiliki keterampilan non-teknis seperti komunikasi yang baik, kemampuan bekerja sama dalam tim secara dinamis,
                        serta pengalaman dalam pengajaran dan mentoring sebagai asisten praktikum untuk mata kuliah Teknologi Web, Teknologi Mobile, dan Pemrograman Web.
                        Saya juga mampu beradaptasi dengan cepat dalam lingkungan kerja yang dinamis dan berkontribusi secara aktif dalam tim untuk mencapai tujuan bersama. </Typography>
                </div>
                <div className="flex flex-col gap-2 h-[350px] lg:h-full relative">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Teknis</Typography>
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