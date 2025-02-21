import Typography from "../atoms/Typography";
import profile from "../../assets/img/profile_pic.jpg"
import SocialIcons from "../molecules/SocialIcons";


const ProfileSection = () => {
    return (
        <div className="relative flex flex-col bg-[#F9F8F6] rounded-2xl h-full border">
            <section className="w-full z-0">
                <img src={profile} className="rounded-t-2xl " alt="avatar" />
                <div className="absolute top-[-1px] left-[-1px] z-50">
                    <SocialIcons />
                </div>
            </section>
            <section className="absolute bottom-0 bg-white space-y-2 z-50 bayangan p-5 border border-gray-200 rounded-2xl">
                <Typography tag="h1" variantClass="title">Akbar Pratama Suryamin</Typography>
                <Typography tag="h2" variantClass="subtitle">Web Developer</Typography>
                <Typography tag="p" variantClass="body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt neque, accusamus similique quidem at consequatur suscipit assumenda quas voluptas tempora?
                </Typography>
            </section>
        </div>
    );
};

export default ProfileSection;
