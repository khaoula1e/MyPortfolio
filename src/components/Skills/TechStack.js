import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import "./Skills.css"

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="tech-icon">
        <CgCPlusPlus />
      </div>
      <div className="tech-icon">
        <DiJavascript1 />
      </div>
      <div className="tech-icon">
        <TbBrandGolang />
      </div>
      <div className="tech-icon">
        <DiNodejs />
      </div>
      <div className="tech-icon">
        <DiReact />
      </div>
      <div className="tech-icon">
        <SiSolidity />
      </div>
      <div className="tech-icon">
        <DiMongodb />
      </div>
      <div className="tech-icon">
        <SiNextdotjs />
      </div>
      <div className="tech-icon">
        <DiGit />
      </div>
      <div className="tech-icon">
        <SiFirebase />
      </div>
      <div className="tech-icon">
        <SiRedis />
      </div>
      <div className="tech-icon">
        <SiPostgresql />
      </div>
      <div className="tech-icon">
        <DiPython />
      </div>
      <div className="tech-icon">
        <DiJava />
      </div>
    </div>
  );
}

export default Techstack;
