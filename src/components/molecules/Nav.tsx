import Link from "../atoms/Link"

type NavProps = {
    className?: string
    links: {
        label: string;
        to: string;
    }[];
}


const Nav = (props: NavProps) => {
    const { className, links } = props
    return (
        <nav className={`flex gap-2 ${className}`}>
            {links.map((link, index) => (
                <Link key={index} to={link.to}>{link.label}</Link>
            ))}
        </nav>
    )
}

export default Nav