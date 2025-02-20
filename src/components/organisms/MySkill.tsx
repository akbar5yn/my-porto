import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography"
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import Card from "../molecules/Card";


const MySkill = () => {
    return (
        <section className="h-full">
            <div className="flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-2 text-justify">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Non-Teknis</Typography>
                    <Typography variantClass="body" tag="p">Saya memiliki keterampilan non-teknis seperti komunikasi yang baik, kemampuan bekerja sama dalam tim secara dinamis,
                        serta pengalaman dalam pengajaran dan mentoring sebagai asisten praktikum untuk mata kuliah Teknologi Web, Teknologi Mobile, dan Pemrograman Web.
                        Saya juga mampu beradaptasi dengan cepat dalam lingkungan kerja yang dinamis dan berkontribusi secara aktif dalam tim untuk mencapai tujuan bersama. </Typography>
                </div>
                <div className="flex flex-col gap-2 h-full">
                    <Typography variantClass="subtitle" className="items-center flex gap-2" tag="h1">Keterampilan <Icon><IoIosArrowForward /></Icon> Teknis</Typography>
                    <Card
                        iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                        cardTite="React"
                        cardDescription="Framework Library"
                        cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias." />
                    <Card
                        iconCard={<TbBrandReact className="w-12 h-12 items-center flex justify-center" />}
                        cardTite="React"
                        cardDescription="Framework Library"
                        cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias. " />
                    <p></p>
                </div>
            </div>
        </section >
    )
}

export default MySkill