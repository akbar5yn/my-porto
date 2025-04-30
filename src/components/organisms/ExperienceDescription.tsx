import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useEmblaCarousel from "embla-carousel-react";
import Typography from "../atoms/Typography"
import ClassNames from "embla-carousel-class-names";
import { useCallback, useEffect, useRef } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

gsap.registerPlugin(ScrollToPlugin);

interface interfaceTimelineData {
    companyId: string
    job: string
    company: string
    date: string
    desc: string[]
}

const timelineData: interfaceTimelineData[] = [
    {
        companyId: "Qatros",
        job: "Frontend Developer",
        company: "PT Qatros Teknologi Nusantara",
        date: "Feb 2023 - Jun 2023",
        desc: [
            "Successfully built an interactive web interface using Vue.js and Nuxt.js with the Options API approach.",
            "Collaborated within a cross-functional team consisting of UI/UX designers, Backend Engineers, and QA.",
            "Actively involved in the development of Opibox, a visual-based opinion and collaboration platform.",
            "Learned to manage application state using Vuex according to feature requirements.",
            "Performed frontend-backend integration, including testing and debugging processes.",
            "Gained experience in Agile workflows with Scrum practices such as sprint planning, daily stand- ups, and retrospectives — enabling a structured team workflow, improved communication, and the ability to deliver tasks iteratively and on time.",
            "Contributed to increased team efficiency through effective communication and collaboration throughout the project development."
        ]
    },
    {
        companyId: "Intivada",
        job: "Frontend Developer",
        company: "PT Intivada Teknologi Nusantara",
        date: "Aug 2023 - Nov 2024",
        desc: [
            "Successfully built and launched Klinik Gora, a patient data management system for overseas clinics (migrant workers), from planning to deployment.",
            "Developed a modern and responsive user interface using Vue.js, and structured a modular backend with Express.js and MySQL.",
            "Implemented a microservice architecture to enhance scalability and development efficiency.",
            "Gained hands-on experience managing end-to-end development processes as part of the founding team.",
            "Directly involved in designing and shaping the technical direction of feature development within a small team.",
        ]
    },

];


const ExperienceDeskription = () => {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ axis: 'y', loop: false, watchDrag: true, dragFree: true, align: "center" }, [ ClassNames(), ])
    const itemRefs = useRef<{ [ key: string ]: number }>({});

    useEffect(() => {
        if (!emblaApi) return;

        // Inisialisasi ulang itemRefs saat Embla API sudah siap
        timelineData.forEach((data, index) => {
            itemRefs.current[ data.companyId ] = index;
        });

    }, [ emblaApi, timelineData ])


    const scrollToItem = useCallback(
        (companyId: string) => {
            if (emblaApi && itemRefs.current[ companyId ] !== undefined) {
                const targetIndex = itemRefs.current[ companyId ];

                emblaApi.scrollTo(targetIndex, true); // Smooth scroll
            }
        },
        [ emblaApi ]
    );

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [ emblaApi ])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [ emblaApi ])

    return (
        <main className="flex flex-col gap-4 text-justify overflow-y-auto">
            <Typography tag="h1" variantClass="title">Experience</Typography>
            <section className="flex gap-2">
                {timelineData.map((data) => (
                    <button
                        key={data.companyId}
                        onClick={() => scrollToItem(data.companyId)}
                        className="px-3 py-1 bg-black text-white rounded-md"
                    >
                        {data.companyId}
                    </button>
                ))}
            </section>
            <section className="experience embla overflow-hidden w-full flex flex-col select-none inset-shadow-gray-300 inset-shadow-sm p-2 rounded-2xl lg:inset-shadow-xs lg:p-0" ref={emblaRef}>
                <div className="embla__container h-[550px] experience space-y-4 flex flex-col lg:h-full">
                    {timelineData.map((data) => (
                        <div className="item embla__slide gap-2 experience" key={data.companyId}>
                            <div className="flex flex-col gap-4" id={data.companyId}>
                                <div className="flex flex-col justify-between px-2 py-1 rounded-md">
                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                                        <Typography tag="h3" variantClass="subtitle" className="">{data.company}</Typography>
                                        <Typography tag="h3" variantClass="subtitle" className="">{data.date}</Typography>
                                    </div>
                                    <Typography tag="p" variantClass="body" className="">{data.job}</Typography>
                                </div>
                                <div>
                                    <ul className="data-experience flex flex-col gap-2 pl-7">
                                        {data.desc.map((point) => (
                                            <li className="flex gap-5" key={point}>
                                                <span className="text-gray-400">•</span>
                                                <Typography key={point} variantClass="body" className="text-start">{point}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
            <div className="flex gap-2 w-full items-end justify-end">
                <button className="embla__prev" onClick={scrollPrev}>{<FiArrowUpCircle className="w-7 h-7 " />}
                </button>
                <button className="embla__next " onClick={scrollNext}>{<FiArrowDownCircle className="w-7 h-7 " />}</button>
            </div>
        </main>
    )
}

export default ExperienceDeskription