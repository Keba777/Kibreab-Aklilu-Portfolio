import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";

interface Prop {
  title: string;
  details: string;
  children?: ReactNode;
}

const ProjectCard = ({ title, details, children }: Prop) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-justify">{details}</p>
        <span className="card-actions justify-end">
          {children}
          <BsGithub className="w-8 h-8" />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
