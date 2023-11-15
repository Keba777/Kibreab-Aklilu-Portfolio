import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";

interface Prop {
  title: string;
  details: string;
  image: string;
  children?: ReactNode;
}

const ProjectCard = ({ title, details, image, children }: Prop) => {
  return (
    <div className="card  bg-base-200 shadow-2xl border-slate-800 border-2">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{details}</p>
        <div className="card-actions justify-between">
          {children}
          <div className="justify-end flex space-x-4">
            <a href="">
              <BsGithub className="w-5 h-5" />
            </a>
            <button className="btn-xs btn-secondary font-semibold px-3 rounded-xl">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="card w-96 bg-base-300 shadow-xl">
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     <p className="text-sm text-justify">{details}</p>
    //     <span className="card-actions justify-end">
    //       {children}
    //       <BsGithub className="w-8 h-8" />
    //     </span>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
