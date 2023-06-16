import React, { useState } from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "./Skills.css";

function Toolstack() {
  const [tooltipText, setTooltipText] = useState(""); // State to store the tooltip text

  const handleMouseEnter = (event) => {
    const toolName = event.currentTarget.getAttribute("data-tool"); // Get the tool name from the data-tool attribute of the parent div
    setTooltipText(toolName); // Set the tooltip text to the tool name
  };

  const handleMouseLeave = () => {
    setTooltipText(""); // Clear the tooltip text when the mouse leaves the icon
  };

  return (
    <div className="toolstack-container">
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Visual Studio Code">
        <SiVisualstudiocode />
        {tooltipText === "Visual Studio Code" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Postman">
        <SiPostman />
        {tooltipText === "Postman" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Vercel">
        <SiVercel />
        {tooltipText === "Vercel" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Figma">
        <SiFigma />
        {tooltipText === "Figma" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Git">
        <SiGit />
        {tooltipText === "Git" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="GitHub">
        <SiGithub />
        {tooltipText === "GitHub" && <span className="tooltip">{tooltipText}</span>}
      </div>
    </div>
  );
}

export default Toolstack;
