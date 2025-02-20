import { ReactNode } from "react"

type LinkProps = {
    children: ReactNode
    className?: string
    to: string
}
const Link = (props: LinkProps) => {
    const { children, className, to } = props

    return (
        <Link to={`${to}`} className={`${className}`}> {children}</Link>
    );
}

export default Link