import Link from "../atoms/Link"

const NavLink = () => {
    return (

        <div className="flex flex-col">
            <Link href="about">ABOUT</Link>
            <Link href="experience">EXPERIENCE</Link>
            <Link href="projects">PROJECTS</Link>
        </div>
    )
}

export default NavLink