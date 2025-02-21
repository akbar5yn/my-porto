import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography"
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import Card from "../molecules/Card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import ClassNames from "embla-carousel-class-names";


const MySkill = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: false, watchDrag: false, align: "start" }, [ClassNames(),])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <section className="h-full">
            <div className="flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-2 text-justify">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Non-Teknis</Typography>
                    <Typography variantClass="body" tag="p">Saya memiliki keterampilan non-teknis seperti komunikasi yang baik, kemampuan bekerja sama dalam tim secara dinamis,
                        serta pengalaman dalam pengajaran dan mentoring sebagai asisten praktikum untuk mata kuliah Teknologi Web, Teknologi Mobile, dan Pemrograman Web.
                        Saya juga mampu beradaptasi dengan cepat dalam lingkungan kerja yang dinamis dan berkontribusi secara aktif dalam tim untuk mencapai tujuan bersama. </Typography>
                </div>
                <div className="flex flex-col gap-2 h-full relative">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Teknis</Typography>
                    <div className="slider border embla absolute w-full z-20 p-[10px_10px_50px_10px] rounded-xl" ref={emblaRef}>
                        <div className="list embla__container">
                            <div className="item embla__slide gap-2">
                                <Card
                                    iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                                    cardTite="React"
                                    cardDescription="Framework Library"
                                    cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias." />
                            </div>
                            <div className="embla__slide">
                                <Card
                                    iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                                    cardTite="React"
                                    cardDescription="Framework Library"
                                    cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias." />
                            </div>
                            <div className="embla__slide">
                                <Card
                                    iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                                    cardTite="React"
                                    cardDescription="Framework Library"
                                    cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias." />
                            </div>
                            <div className="embla__slide">
                                <Card
                                    iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                                    cardTite="React"
                                    cardDescription="Framework Library"
                                    cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias." />
                            </div>
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