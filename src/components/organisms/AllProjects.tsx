import Typography from "../atoms/Typography";
import ProjectCard from "../molecules/ProjectCard";
import profile from "../../assets/img/776_1x_shots_so.png"

const projectItem = [
    {
        image: profile,
        title: "Laboratorium Management",
        description: "Lasdasdasdasd",
        badges: [
            "Laravel", "Tailwind"
        ]
    },
    {
        image: profile,
        title: "Laboratorium Management",
        description: "Lasdasdasdasd",
        badges: [
            "Laravel", "Tailwind"
        ]
    }
]

const AllProjects = () => {
    return (
        <section className="flex flex-col gap-2 text-justify">
            <Typography tag="h1" variantClass="title">Projects</Typography>
            <div className="flex w-full gap-2 h-full">
                {projectItem.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default AllProjects;