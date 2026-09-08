import ExperienceDeskription from "../components/organisms/ExperienceDescription";
import Layout from "../components/templates/Layout";

const Experience = () => {
  return (
    <main
      id="page-experience"
      className="flex w-full items-center justify-center"
    >
      <Layout>
        <div id="experience-content" className="flex flex-col gap-5 snap-x">
          <ExperienceDeskription></ExperienceDeskription>
        </div>
      </Layout>
    </main>
  );
};

export default Experience;
