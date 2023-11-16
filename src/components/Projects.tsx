import ProjectCard from "./ProjectCard";
import EHImage from "../assets/ElectroHub.jpg";
import ASImage from "../assets/A2svClone.jpg";
import TodoImage from "../assets/TodoList.jpg";
import ChatMeImage from "../assets/Chat.jpg";
import { FaReact } from "react-icons/fa";

import {
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="my-10 mx-6">
      <h2 className="text-4xl font-bold text-center m-6">
        Some of My Projects
      </h2>
      <div className="p-4 grid md:grid-cols-2 gap-10">
        <ProjectCard
          title="ElectroHub"
          image={EHImage}
          children={
            <span className="flex space-x-3">
              <SiMongodb color="#47A248" className="w-5 h-5" />

              <SiExpress color="#fff" className="w-5 h-5" />
              <FaReact color="#00D8FF" className="w-5 h-5" />
              <SiNodedotjs color="#8CC84B" className="w-5 h-5" />
            </span>
          }
          details="The Mern Stack E-Commerce App which is used to sell electronics of different type. It has the functionality to add to carts and filter products as well as to search the products."
        />
        <ProjectCard
          title="A2sv Success Stories Page Clone"
          image={ASImage}
          gitHubLink="https://github.com/Keba777/A2sv-success-stories-page-clone"
          viewLink="https://a2sv-success-stories-page-clone.vercel.app/"
          children={
            <span className="flex space-x-3">
              <FaReact color="#00D8FF" className="w-5 h-5" />
              <SiTailwindcss color="#38B2AC" className="w-5 h-5" />
            </span>
          }
          details="In this project, I cloned a web application that showcases success stories of A2SVians and presents growth statistics for A2SV. Users can view impact stories and gain insights into the growth of A2SV."
        />

        <ProjectCard
          title="React Typescript Todo List App"
          image={TodoImage}
          gitHubLink="https://github.com/Keba777/A2sv-React-Typescript-Todo-List-Task"
          viewLink="https://a2sv-react-typescript-todo-list-task.vercel.app/"
          children={
            <span className="flex space-x-3">
              <FaReact color="#00D8FF" className="w-5 h-5" />
              <SiTypescript color="#007ACC" className="w-5 h-5" />
              <SiTailwindcss color="#38B2AC" className="w-5 h-5" />
            </span>
          }
          details="In this project, I developed a TypeScript-based React application for managing todo lists. Users can create, edit, and store tasks efficiently using this app, enhancing task management with the power of TypeScript for type safety and improved code quality."
        />

        <ProjectCard
          title="Chat Me"
          image={ChatMeImage}
          gitHubLink="https://github.com/Keba777/Chat-Me"
          children={
            <span className="flex space-x-3">
              <FaReact color="#00D8FF" className="w-5 h-5" />
              <SiNodedotjs color="#8CC84B" className="w-5 h-5" />
              <SiExpress color="#fff" className="w-5 h-5" />
            </span>
          }
          details="A real-time chat application designed for seamless communication. Built with React on the frontend and powered by a Node.js server with Socket.io, this project provides users with a live chat experience in designated rooms. "
        />
      </div>
    </div>
  );
};

export default Projects;
