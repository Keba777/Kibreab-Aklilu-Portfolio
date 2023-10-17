import SkillCard from "./SkillCard";
import { FaReact, FaJava } from "react-icons/fa";
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

const Skills = () => {
  return (
    <div className="mx-2 my-10">
      <h1 className="text-center text-4xl font-bold">My Skills</h1>
      <br />
      <div className="mx-20 mb-10">
        <h2 className="text-2xl font-bold mb-6">Programming Language</h2>
        <div className=" mx-14 grid grid-cols-5 gap-4">
          <SkillCard
            icon={<SiTypescript color="#007ACC" className="w-10 h-10" />}
            heading="Typescript"
          />
          <SkillCard
            icon={<IoLogoJavascript color="#FFD700" className="w-10 h-10" />}
            heading="Javascript"
          />
          <SkillCard
            icon={<SiPython color="#ffde57" className="w-10 h-10" />}
            heading="Python"
          />
          <SkillCard
            icon={<FaJava color="#1976D2" className="w-10 h-10" />}
            heading="Java"
          />
          <SkillCard
            icon={<SiCplusplusbuilder color="#044F88" className="w-10 h-10" />}
            heading="C++"
          />
        </div>
      </div>
      <div className="mx-20 mb-10">
        <h2 className="text-2xl font-bold mb-6">Frontend Technologies</h2>
        <div className="ms-14 grid grid-cols-7 gap-6">
          <SkillCard
            icon={<FaReact color="#00D8FF" className="w-10 h-10" />}
            heading="React.js"
          />
          <SkillCard
            icon={<SiNextdotjs color="#00C7B7" className="w-10 h-10" />}
            heading="Next.js"
          />
          <SkillCard
            icon={<BsFillBootstrapFill color="#0d6efd" className="w-10 h-10" />}
            heading="Bootstrap"
          />
          <SkillCard
            icon={<SiTailwindcss color="#38B2AC" className="w-10 h-10" />}
            heading="TailwindCss"
          />
          <SkillCard
            icon={<SiDaisyui color="#00A689 " className="w-12 h-12" />}
            heading="DaisyUI"
          />
          <SkillCard
            icon={<SiHtml5 color="#E34C26" className="w-10 h-10" />}
            heading="Html5"
          />
          <SkillCard
            icon={<SiCss3 color="#1572B6" className="w-10 h-10" />}
            heading="Css3"
          />
        </div>
      </div>
      <div className="mx-20 mb-10">
        <h2 className="text-2xl font-bold mb-6">Backend Technologies</h2>
        <div className="ms-14 grid grid-cols-5 gap-6">
          <SkillCard
            icon={<SiExpress color="#fff" className="w-10 h-10" />}
            heading="Express.js"
          />
          <SkillCard
            icon={<SiNodedotjs color="#8CC84B" className="w-10 h-10" />}
            heading="Node.js"
          />
        </div>
      </div>
      <div className="mx-20 mb-10">
        <h2 className="text-2xl font-bold mb-6">Databases</h2>
        <div className="ms-14 grid grid-cols-5  gap-6">
          <SkillCard
            icon={<SiMongodb color="#47A248" className="w-10 h-10" />}
            heading="Mongodb"
          />
          <SkillCard
            icon={<SiMysql color="#0079C1" className="w-10 h-10" />}
            heading="MySQL"
          />
          <SkillCard
            icon={<SiFirebase color="#FFC107" className="w-10 h-10" />}
            heading="Firebase"
          />
        </div>
      </div>
      <div className="mx-20 mb-10">
        <h2 className="text-2xl font-bold mb-6">Version Control</h2>
        <div className="ms-14 grid grid-cols-5  gap-6">
          <SkillCard
            icon={<BsGit color="#F05032" className="w-10 h-10" />}
            heading="Git"
          />
          <SkillCard
            icon={<BsGithub color="#fff" className="w-10 h-10" />}
            heading="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
