import Typography from "../atoms/Typography";

const ProfileHeader = () => {
    return (
        <div className="space-y-2">
            <Typography tag="h1" variantClass="title" className="text-red-400">Brittany Chiang</Typography>
            <Typography tag="h2" variantClass="subtitle">Front End Engineer</Typography>
            <Typography tag="p" variantClass="body">
                I build accessible, pixel-perfect digital experiences for the web.
            </Typography>
        </div>
    );
};

export default ProfileHeader;
