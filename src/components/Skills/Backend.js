import React, { useState } from "react";
import { IoLogoNodejs } from "react-icons/io";
import { DiNodejs, DiJava } from "react-icons/di";
import "./Skills.css";
import { SiSpring } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { DiPhp } from 'react-icons/di';
import { BsArrowRightShort } from 'react-icons/bs';

function Backend() {
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
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Node.js">
        <IoLogoNodejs />
        {tooltipText === "Node.js" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Express.js">
        <DiNodejs />
        {tooltipText === "Express.js" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Spring Boot">
        <span><SiSpring/></span>
        {tooltipText === "Spring Boot" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="PHP">
        <span><DiPhp/></span>
        {tooltipText === "PHP" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Next.js">
        <span><BsArrowRightShort /></span>
        {tooltipText === "Next.js" && <span className="tooltip">{tooltipText}</span>}
      </div>
    </div>
  );
}

export default Backend;
