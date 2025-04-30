import { NavLink } from "react-router";
import Typography from "../atoms/Typography";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    badges?: string[];
    className?: string
};

const ProjectCard = ({ title, description, image, badges, className }: ProjectCardProps) => {
    return (
        <div className={`project-card flex flex-col border rounded-xl shadow-lg ${className}`}>
            <img src={image} alt={title} className="w-full rounded-t-xl object-cover" />
            <div className="p-4 flex flex-col gap-4 justify-between h-full">
                <div>
                    <div className="flex gap-2 mb-2">
                        {badges?.map((badge, index) => (
                            <span key={index} className="bg-black text-white text-xs px-2 py-1 rounded">
                                {badge}
                            </span>
                        ))}
                    </div>
                    <Typography className="!text-xl font-bold">{title}</Typography>
                    <Typography className="!text-[12px] text-gray-500 line-clamp-3">{description}</Typography>
                </div>
                <NavLink to="/project-detail" className="border rounded-md p-2 text-center">More Detail</NavLink>

            </div>
        </div>
    );
};

export default ProjectCard;
