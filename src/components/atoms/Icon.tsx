import { ReactNode } from "react"

type IconProps = {
    children: ReactNode
    to?: string
    className?: string
}

const Icon = (props: IconProps) => {
    const { children, className } = props
    return (
        <span className={`${className}`}>{children}</span>
    )
}

export default Icon