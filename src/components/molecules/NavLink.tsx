import Link from "../atoms/Link"

type NavLinkProps = {
    className?: string
}

const NavLink = (props: NavLinkProps) => {
    const { className } = props
    return (
        <div className={`flex gap-2 ${className}`}>
            <Link to="about">ABOUT</Link>
            <Link to="experience">EXPERIENCE</Link>
            <Link to="projects">PROJECTS</Link>
        </div>
    )
}

export default NavLink