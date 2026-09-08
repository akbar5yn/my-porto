import AllProjects from "../components/organisms/AllProjects";
import Layout from "../components/templates/Layout";

const Experience = () => {
  return (
    <main
      id="page-projects"
      className="flex w-full items-center justify-center"
    >
      <Layout>
        <div id="projects-content" className="flex flex-col gap-5 snap-x">
          <AllProjects />
        </div>
      </Layout>
    </main>
  );
};

export default Experience;
