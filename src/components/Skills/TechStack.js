import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiAngularjs, SiMysql, SiOracle, SiLinux, SiFigma, SiDocker, SiKubernetes, SiJenkins, SiGitlab } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

import "./Skills.css";

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="category">
        <h2>Programming languages</h2>
        <div className="tech-icon">
          <DiJava />
        </div>
        <div className="tech-icon">
          <DiPython />
        </div>
        <div className="tech-icon">
          <DiJavascript1 />
        </div>
      </div>

      <div className="category">
        <h2>Frontend</h2>
        <div className="tech-icon">
          <FaHtml5 />
        </div>
        <div className="tech-icon">
          <FaCss3Alt />
        </div>
        <div className="tech-icon">
          <FaBootstrap />
        </div>
        <div className="tech-icon">
          <DiReact />
        </div>
        <div className="tech-icon">
          <SiAngularjs />
        </div>
        <div className="tech-icon">
          <RiReactjsLine />
        </div>
      </div>

      <div className="category">
        <h2>Database management</h2>
        <div className="tech-icon">
          <SiMysql />
        </div>
        <div className="tech-icon">
          <SiOracle />
        </div>
        <div className="tech-icon">
          <SiPostgresql />
        </div>
        <div className="tech-icon">
          <DiMongodb />
        </div>
      </div>

      <div className="category">
        <h2>Backend</h2>
        <div className="tech-icon">
          <IoLogoNodejs />
        </div>
        <div className="tech-icon">
          <DiNodejs />
        </div>
        <div className="tech-icon">
          <DiJava />
        </div>
        <div className="tech-icon">
          <SiPostgresql />
        </div>
      </div>

      {/* <div className="category">
        <h2>Logiciels et technologies</h2>
        <div className="tech-icon">
          <SiLinux />
        </div>
        <div className="tech-icon">
          <SiFigma />
        </div>
        <div className="tech-icon">
          <DiGit />
        </div>
        <div className="tech-icon">
          <DiJava />
        </div>
      </div> */}

      <div className="category">
        <h2>DevOps</h2>
        <div className="tech-icon">
          <SiDocker />
        </div>
        <div className="tech-icon">
          <SiKubernetes />
        </div>
        <div className="tech-icon">
          <SiJenkins />
        </div>
        <div className="tech-icon">
          <SiGitlab />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
