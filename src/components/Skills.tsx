import SkillCard from "./SkillCard";
import {
  FaReact,
  FaJava,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill, BsGit, BsGithub } from "react-icons/bs";
import {
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiPython,
  SiCplusplusbuilder,
  SiTailwindcss,
  SiDaisyui,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Define common icon classes separately
const commonIconClass = " w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6";
const commonCardClass =
  "lg:mx-2 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-3";

const Skills = () => {
  return (
    <div id="skills" className="mx-2 my-10">
      <h1 className="text-center text-4xl font-bold">My Skills</h1>
      <br />
      <div className="lg:mx-4 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6 flex">
          <FaCode className="" />{" "}
          <span className="pl-3 -mt-1 ">Programming Language</span>
        </h2>
        <div className={`${commonCardClass}`}>
          <SkillCard
            icon={
              <SiTypescript className={`${commonIconClass} text-[#007ACC]`} />
            }
            heading="Typescript"
          />
          <SkillCard
            icon={
              <IoLogoJavascript
                className={`${commonIconClass} text-[#FFD700]`}
              />
            }
            heading="Javascript"
          />
          <SkillCard
            icon={<SiPython className={`${commonIconClass} text-[#ffde57]`} />}
            heading="Python"
          />
          <SkillCard
            icon={<FaJava className={`${commonIconClass} text-[#1976D2]`} />}
            heading="Java"
          />
          <SkillCard
            icon={
              <SiCplusplusbuilder
                className={`${commonIconClass} text-[#044F88]`}
              />
            }
            heading="C++"
          />
        </div>
      </div>
      <div className="mx-2 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6 flex">
          <FaLaptopCode />{" "}
          <span className="pl-3 -mt-1">Frontend Technologies</span>
        </h2>

        <div className={`${commonCardClass}`}>
          <SkillCard
            icon={<FaReact className={`${commonIconClass} text-[#00D8FF]`} />}
            heading="React.js"
          />
          <SkillCard
            icon={
              <SiNextdotjs className={`${commonIconClass} text-[#00C7B7]`} />
            }
            heading="Next.js"
          />
          <SkillCard
            icon={
              <BsFillBootstrapFill
                className={`${commonIconClass} text-[#0d6efd]`}
              />
            }
            heading="Bootstrap"
          />
          <SkillCard
            icon={
              <SiTailwindcss className={`${commonIconClass} text-[#38B2AC]`} />
            }
            heading="TailwindCss"
          />
          <SkillCard
            icon={<SiDaisyui className={`${commonIconClass} text-[#00A689]`} />}
            heading="DaisyUI"
          />
          <SkillCard
            icon={<SiHtml5 className={`${commonIconClass} text-[#E34C26]`} />}
            heading="Html5"
          />
          <SkillCard
            icon={<SiCss3 className={`${commonIconClass} text-[#1572B6]`} />}
            heading="Css3"
          />
        </div>
      </div>
      <div className="mx-2 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6 flex">
          <FaServer /> <span className="pl-3 -mt-1">Backend Technologies</span>
        </h2>
        <div className={`${commonCardClass}`}>
          <SkillCard
            icon={<SiExpress className={`${commonIconClass} text-[#fff]`} />}
            heading="Express.js"
          />
          <SkillCard
            icon={
              <SiNodedotjs className={`${commonIconClass} text-[#8CC84B]`} />
            }
            heading="Node.js"
          />
        </div>
      </div>
      <div className="mx-2 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6 flex">
          <FaDatabase /> <span className="pl-3 -mt-1">Databases</span>
        </h2>

        <div className={`${commonCardClass}`}>
          <SkillCard
            icon={<SiMongodb className={`${commonIconClass} text-[#47A248]`} />}
            heading="Mongodb"
          />
          <SkillCard
            icon={<SiMysql className={`${commonIconClass} text-[#0079C1]`} />}
            heading="MySQL"
          />
          <SkillCard
            icon={
              <SiFirebase className={`${commonIconClass} text-[#FFC107]`} />
            }
            heading="Firebase"
          />
        </div>
      </div>
      <div className="mx-2 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6 flex">
          <GoGitBranch /> <span className="pl-3 -mt-1">Version Control</span>
        </h2>

        <div className={`${commonCardClass}`}>
          <SkillCard
            icon={<BsGit className={`${commonIconClass} text-[#F05032]`} />}
            heading="Git"
          />
          <SkillCard
            icon={<BsGithub className={`${commonIconClass} text-[#fff]`} />}
            heading="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
