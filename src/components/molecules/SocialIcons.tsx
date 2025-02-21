import Icon from "../atoms/Icon"
import { SiRefinedgithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";

const SocialIcons = () => {
    return (
        <div className="flex flex-col bg-white rounded-br-lg gap-2 p-2 relative container-image border-r border-b">
            <Icon><SiRefinedgithub className="w-7 h-7" /></Icon>
            <Icon><CiLinkedin className="w-7 h-7" /></Icon>
            <Icon><TiSocialInstagram className="w-7 h-7" /> </Icon>
        </div>
    )
}

export default SocialIcons