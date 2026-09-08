import Icon from "../atoms/Icon";
import { SiRefinedgithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";

const SocialIcons = () => {
  return (
    <div
      id="social-link-list"
      className="social-stack"
      aria-label="Social links"
    >
      <a
        href="https://github.com/akbar5yn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        id="social-github"
        className="social-link"
      >
        <Icon>
          <SiRefinedgithub className="social-icon" />
        </Icon>
      </a>
      <a
        href="https://www.linkedin.com/in/akbar5yn/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        id="social-linkedin"
        className="social-link"
      >
        <Icon>
          <CiLinkedin className="social-icon" />
        </Icon>
      </a>
      <a
        href="https://www.instagram.com/akbar_syn/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        id="social-instagram"
        className="social-link"
      >
        <Icon>
          <TiSocialInstagram className="social-icon" />
        </Icon>
      </a>
    </div>
  );
};

export default SocialIcons;
