import AboutDescription from "../components/organisms/AboutDescription"
import MySkill from "../components/organisms/MySkill"
import Layout from "../components/templates/Layout"

const About = () => {
    return (
        <main className='lg:h-screen flex items-center justify-center py-14'>
            <Layout>
                <div className="flex flex-col h-full gap-5 snap-x">
                    <AboutDescription></AboutDescription>
                    <MySkill></MySkill>
                </div>
            </Layout>
        </main>
    )
}

export default About