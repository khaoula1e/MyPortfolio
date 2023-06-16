import React, { useState } from "react";
import { SiDocker, SiKubernetes, SiJenkins, SiGitlab } from "react-icons/si";
import "./Skills.css";

function DevOps() {
  const [tooltipText, setTooltipText] = useState(""); // State to store the tooltip text

  const handleMouseEnter = (event) => {
    const toolName = event.target.getAttribute("data-tool"); // Get the tool name from the data-tool attribute
    setTooltipText(toolName); // Set the tooltip text to the tool name
  };

  const handleMouseLeave = () => {
    setTooltipText(""); // Clear the tooltip text when the mouse leaves the icon
  };

  return (
    <div className="techstack-container">
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Docker">
        <SiDocker />
        {tooltipText === "Docker" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Kubernetes">
        <SiKubernetes />
        {tooltipText === "Kubernetes" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Jenkins">
        <SiJenkins />
        {tooltipText === "Jenkins" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="GitLab">
        <SiGitlab />
        {tooltipText === "GitLab" && <span className="tooltip">{tooltipText}</span>}
      </div>
    </div>
  );
}

export default DevOps;
