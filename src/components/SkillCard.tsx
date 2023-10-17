import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  heading: string;
}

const SkillCard = ({ icon, heading }: Props) => {
  return (
    <div className="card w-32 bg-base-200 shadow-xl">
      <figure className="px-4 pt-4">{icon}</figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{heading}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
