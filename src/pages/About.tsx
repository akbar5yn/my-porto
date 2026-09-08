import AboutDescription from "../components/organisms/AboutDescription";
import MySkill from "../components/organisms/MySkill";
import ExperienceDescription from "../components/organisms/ExperienceDescription";
import AllProjects from "../components/organisms/AllProjects";
import Layout from "../components/templates/Layout";

const About = () => {
  return (
    <main id="page-about" className="flex w-full items-center justify-center">
      <Layout>
        <div id="about-content" className="flex w-full flex-col gap-10">
          <AboutDescription />
          <MySkill />
          <ExperienceDescription />
          <AllProjects />
        </div>
      </Layout>
    </main>
  );
};

export default About;
