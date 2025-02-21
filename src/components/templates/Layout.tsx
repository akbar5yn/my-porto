import { ReactNode } from "react"
import ProfileSection from "../organisms/ProfileSection"

type LayoutProps = {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    const { children } = props
    return (
        <div className="layout h-full grid max-w-screen-2xl grid-cols-[40%_auto] gap-10 px-10">
            <ProfileSection></ProfileSection>
            <div className="h-full main-content w-full overflow-hidden">
                <main className="h-full">{children}</main>
            </div>
        </div>
    )
}

export default Layout