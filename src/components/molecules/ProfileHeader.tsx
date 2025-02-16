import Typography from "../atoms/Typography";

const ProfileHeader = () => {
    return (
        <div className="space-y-2">
            <Typography tag="h1" variantClass="title">Akbar Pratama Suryamin</Typography>
            <Typography tag="h2" variantClass="subtitle">Web Developer</Typography>
            <Typography tag="p" variantClass="body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt neque, accusamus similique quidem at consequatur suscipit assumenda quas voluptas tempora?
            </Typography>
        </div>
    );
};

export default ProfileHeader;
