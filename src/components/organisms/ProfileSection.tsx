import Typography from "../atoms/Typography";
import profile from "../../assets/img/profile_pic.jpg"
import SocialIcons from "../molecules/SocialIcons";
import Nav from "../molecules/Nav";

const navItem = [
    { label: "ABOUT", to: "/about" },
    { label: "EXPERIENCE", to: "/experience" },
    { label: "PROJECTS", to: "/projects" }
]

interface interfaceProfileData {
    name: string
    job: string
    description: string
}

const profileData: interfaceProfileData = {
    name: "Akbar Pratama Suryamin",
    job: "Web Developer",
    description: "Mengembangkan aplikasi web yang responsif dan intuitif dengan teknologi modern untuk pengalaman pengguna yang optimal."
}


const ProfileSection = () => {
    return (
        <div className="relative flex flex-col bg-[#F9F8F6] rounded-2xl h-full border">
            <section className="w-full z-0">
                <img src={profile} className="rounded-t-2xl " alt="avatar" />
                <div className="absolute top-[-1px] left-[-1px] z-50">
                    <SocialIcons />
                </div>
            </section>
            <section className="absolute w-full bottom-0 bg-white space-y-2 z-50 bayangan p-5 border border-gray-200 rounded-2xl">
                <Typography tag="h1" variantClass="title">{profileData.name}</Typography>
                <Typography tag="h2" variantClass="subtitle">{profileData.job}</Typography>
                <Typography tag="p" variantClass="body">
                    {profileData.description}
                </Typography>
                <Nav links={navItem} className="mt-4"></Nav>
            </section>
        </div>
    );
};

export default ProfileSection;
