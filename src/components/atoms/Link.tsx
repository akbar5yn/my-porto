import { ReactNode } from "react"
import { NavLink } from "react-router"

type LinkProps = {
    children: ReactNode
    className?: string
    to: string
}
const Link = (props: LinkProps) => {
    const { children, className, to } = props

    return (
        <NavLink to={`${to}`} key={to} className={({ isActive }) =>
            `${className} text-[13px] lg:text-base border px-2 rounded-md transition-all duration-300 font-semibold ${isActive ? 'border bg-black text-white' : 'bg-white'}`
        }>
            {children}
        </NavLink>
    );
}

export default Link