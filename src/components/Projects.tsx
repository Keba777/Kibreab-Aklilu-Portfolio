import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="p-4 flex gap-6">
      <ProjectCard
        title="A2sv Success Stories Page Clone"
        children={<button className="btn btn-neutral">View</button>}
        details="In this project, I cloned a web application that showcases success stories of A2SVians and presents growth statistics for A2SV. Users can view impact stories and gain insights into the growth of A2SV through the provided graphs."
      />
      <ProjectCard
        title="Next.js Firebase FullStack Blog App"
        details="This project involves a Next.js application for managing personal blogs, integrating Firebase for backend operations like data storage and retrieval. Users can edit, delete, and add blog data. The App router ensures smooth navigation across various application routes."
      />
      <ProjectCard
        title="React Typescript Todo List App"
        details="In this project, I developed a TypeScript-based React application for managing todo lists. Users can create, edit, and store tasks efficiently using this app, enhancing task management with the power of TypeScript for type safety and improved code quality."
      />
    </div>
  );
};

export default Projects;
