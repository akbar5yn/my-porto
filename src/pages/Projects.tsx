import AllProjects from "../components/organisms/AllProjects"
import Layout from "../components/templates/Layout"

const Experience = () => {
    return (
        <main className='lg:h-screen flex items-center justify-center py-14'>
            <Layout>
                <div className="flex flex-col h-full overflow-hidden lg:h-full gap-5 snap-x">
                    <AllProjects />
                </div>
            </Layout>
        </main>
    )
}

export default Experience