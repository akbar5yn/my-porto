import { ReactNode } from "react"

type LinkProps = {
    children: ReactNode
    className?: string
    href: string
}
const Link = (props: LinkProps) => {
    const { children, className, href } = props

    return (
        <a href={`${href}`} className={`${className}`}> {children}</a>
    );
}

export default Link