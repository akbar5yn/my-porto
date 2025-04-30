import Typography from "../atoms/Typography";
import ProjectCard from "../molecules/ProjectCard";
import profile from "../../assets/img/lab_management.png"
import clinicGora from "../../assets/img/clinic_gora_product.png"
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useCallback } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

const projectItem = [
    {
        image: profile,
        title: "Laboratorium Management",
        description: "Laboratory Management is an application designed to facilitate the operations of a laboratory, specifically for the Physics study program. The application caters to two primary user roles: students and laboratory staff (laboran). It includes several features aimed at streamlining laboratory management and enhancing efficiency for both user types.",
        badges: [
            "Laravel", "Tailwind"
        ]
    },
    {
        image: clinicGora,
        title: "Clinic Gora",
        description: "Clinic Gora is a digital application specifically designed to support the administrative needs of clinics, with a focus on managing data for Indonesian Migrant Worker (TKI) patients. This application streamlines the processes of patient registration, medical examination documentation, automated receipt generation, and standardized official form (blanko) printing.",
        badges: [
            "Laravel", "Tailwind"
        ]
    },
]

const wheelGesturesPlugin = WheelGesturesPlugin()

const AllProjects = () => {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ axis: 'y', loop: false, watchDrag: true, dragFree: true, align: "start" }, [ ClassNames(), wheelGesturesPlugin ])
    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [ emblaApi ])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [ emblaApi ])

    return (
        <section className="flex min-h-[700px] lg:h-full flex-col gap-2">
            <Typography tag="h1" variantClass="title">Projects</Typography>
            <div className="relative h-full rounded-xl overflow-hidden inset-shadow-sm">
                <div className="slider embla project" ref={emblaRef}>
                    <div className="list embla__container project w-full gap-5 lg:gap-2 grid grid-cols-1 lg:grid-cols-2">
                        {projectItem.map((project, index) => (
                            <ProjectCard key={index} className="item emnbla__slide project lg:h-[550px]" {...project} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 w-full items-end justify-end">
                <button className="embla__prev" onClick={scrollPrev}>{<FiArrowUpCircle className="w-7 h-7 " />}
                </button>
                <button className="embla__next " onClick={scrollNext}>{<FiArrowDownCircle className="w-7 h-7 " />}</button>
            </div>
        </section>
    );
}

export default AllProjects;