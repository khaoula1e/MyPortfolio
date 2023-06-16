import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { SiAngularjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from 'react-icons/si';

import "./Skills.css";

function Frontend() {
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
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="HTML5">
        <FaHtml5 />
        {tooltipText === "HTML5" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="CSS3">
        <FaCss3Alt />
        {tooltipText === "CSS3" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Bootstrap">
        <FaBootstrap />
        {tooltipText === "Bootstrap" && <span className="tooltip">{tooltipText}</span>}
      </div>
      {/* <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Tailwind">
        <SiTailwindcss/>
        {tooltipText === "Tailwind" && <span className="tooltip">{tooltipText}</span>}
      </div> */}
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="React.js">
        <DiReact />
        {tooltipText === "React.js" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="AngularJS">
        <SiAngularjs />
        {tooltipText === "AngularJS" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="React Native">
        <RiReactjsLine />
        {tooltipText === "React Native" && <span className="tooltip">{tooltipText}</span>}
      </div>
    </div>
  );
}

export default Frontend;
