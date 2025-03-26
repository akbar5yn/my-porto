import { ReactNode } from "react"
import ProfileSection from "../organisms/ProfileSection"
import { motion } from "motion/react"
type LayoutProps = {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {

    const { children } = props
    return (
        <div className="layout h-full grid max-w-screen-2xl lg:grid-cols-[40%_auto] gap-10 px-10">
            <ProfileSection></ProfileSection>
            <div className="h-full main-content w-full overflow-hidden">
                <motion.main

                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-full"
                >
                    {children}
                </motion.main>
            </div>
        </div >
    )
}

export default Layout