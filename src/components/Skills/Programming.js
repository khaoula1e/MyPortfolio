import React, { useState } from "react";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiAngularjs, SiMysql, SiOracle, SiLinux, SiFigma, SiDocker, SiKubernetes, SiJenkins, SiGitlab } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

import "./Skills.css";

function Programming() {
  const [tooltipText, setTooltipText] = useState(""); // State to store the tooltip text

  const handleMouseEnter = (event) => {
    const toolName = event.currentTarget.getAttribute("data-tool"); // Get the tool name from the data-tool attribute of the parent div
    setTooltipText(toolName); // Set the tooltip text to the tool name
  };

  const handleMouseLeave = () => {
    setTooltipText(""); // Clear the tooltip text when the mouse leaves the icon
  };

  return (
    <div className="techstack-container">
        {/* <h2>Programming languages</h2> */}
        <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Java">
          <DiJava />
          {tooltipText === "Java" && <span className="tooltip">{tooltipText}</span>}
        </div>
        <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Python">
          <DiPython />
          {tooltipText === "Python" && <span className="tooltip">{tooltipText}</span>}
        </div>
        <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="JavaScript">
          <DiJavascript1 />
          {tooltipText === "JavaScript" && <span className="tooltip">{tooltipText}</span>}
        </div>
    </div>
  );
}

export default Programming;
