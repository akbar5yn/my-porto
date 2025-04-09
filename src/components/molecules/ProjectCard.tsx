import Typography from "../atoms/Typography";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    badges?: string[];
    className?: string;
};

const ProjectCard = ({ title, description, image, badges, className }: ProjectCardProps) => {
    return (
        <div className={`project-card border rounded-xl overflow-hidden shadow-lg ${className}`}>
            <img src={image} alt={title} className="w-full h-auto object-cover" />
            <div className="p-4 flex flex-col gap-4">
                <div className="flex gap-2 mb-2">
                    {badges?.map((badge, index) => (
                        <span key={index} className="bg-black text-white text-xs px-2 py-1 rounded">
                            {badge}
                        </span>
                    ))}
                </div>
                <Typography className="!text-xl font-bold">{title}</Typography>
                {/* <Typography className="text-sm text-gray-500">{description}</Typography> */}
            </div>
        </div>
    );
};

export default ProjectCard;
