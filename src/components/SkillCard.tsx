import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  heading: string;
}

const SkillCard = ({ icon, heading }: Props) => {
  return (
    <div className="card w-18  sm:w-20 md:w-24 lg:w-28 bg-base-200 shadow-xl">
      <figure className="px-4 pt-4">{icon}</figure>
      <div className="py-5 sm:py-6 md:py-7 lg:py-9 card-body items-center  text-center">
        <h2 className="card-title text-xs sm:text-sm md:text-lg">{heading}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
