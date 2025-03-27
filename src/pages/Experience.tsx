import ExperienceDeskription from "../components/organisms/ExperienceDescription"
import Layout from "../components/templates/Layout"

const Experience = () => {
    return (
        <main className='lg:h-screen flex items-center justify-center py-20'>
            <Layout>
                <div className="flex flex-col h-full gap-5 snap-x">
                    <ExperienceDeskription></ExperienceDeskription>

                </div>
            </Layout>
        </main>
    )
}

export default Experience