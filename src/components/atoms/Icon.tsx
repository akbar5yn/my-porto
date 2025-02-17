import { ReactNode } from "react"

type IconProps = {
    children: ReactNode
    to?: string
}

const Icon = (props: IconProps) => {
    const { children, to } = props
    return (
        <button>{children}</button>
    )
}

export default Icon