import Icon from "../atoms/Icon"
import { SiRefinedgithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";
import Link from "../atoms/Link";

const SocialIcons = () => {
    return (
        <div className="flex flex-col bg-white rounded-br-lg gap-2 p-2 relative container-image border-r border-b">
            <a href="https://github.com/akbar5yn" target="_blank" rel="noopener noreferrer">
                <Icon><SiRefinedgithub className="w-7 h-9 transition-all hover:w-8 hover:h-10" /></Icon>
            </a>
            <a href="https://www.linkedin.com/in/akbar5yn/" target="_blank" rel="noopener noreferrer">
                <Icon><CiLinkedin className="w-7 h-7 transition-all hover:w-8 hover:h-8" /></Icon>
            </a>
            <a href="https://www.instagram.com/akbar_syn/" target="_blank" rel="noopener noreferrer">
                <Icon><TiSocialInstagram className="w-7 h-7 transition-all hover:w-8 hover:h-8" /> </Icon>
            </a>
        </div>
    )
}

export default SocialIcons