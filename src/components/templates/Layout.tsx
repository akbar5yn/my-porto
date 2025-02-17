import Content from "../organisms/Content"
import Sidebar from "../organisms/Sidebar"
const Layout = () => {
    return (
        <main className="h-full grid max-w-screen-2xl grid-cols-[30%_auto] gap-x-52 px-10">
            <Sidebar></Sidebar>
            <Content></Content>
        </main>
    )
}

export default Layout