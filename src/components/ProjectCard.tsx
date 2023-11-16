import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";

interface Prop {
  title: string;
  details: string;
  image: string;
  children?: ReactNode;
  gitHubLink?: string;
  viewLink?: string;
}

const ProjectCard = ({
  title,
  details,
  image,
  children,
  gitHubLink,
  viewLink,
}: Prop) => {
  return (
    <div className="card  bg-base-200 shadow-2xl border-slate-800 border-2">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-between">
          {children}
          <div className="justify-end flex space-x-4">
            <a href={gitHubLink} className="cursor-pointer">
              <BsGithub className="w-5 h-5" />
            </a>
            <a
              href={viewLink}
              className="btn-xs btn-secondary font-semibold px-3 rounded-xl cursor-pointer pt-1"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
