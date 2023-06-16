import React, { useState } from "react";
import { SiMysql, SiOracle, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import "./Skills.css";

function Bd() {
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
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="MySQL">
        <SiMysql />
        {tooltipText === "MySQL" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="Oracle">
        <SiOracle />
        {tooltipText === "Oracle" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="PostgreSQL">
        <SiPostgresql />
        {tooltipText === "PostgreSQL" && <span className="tooltip">{tooltipText}</span>}
      </div>
      <div className="tech-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tool="MongoDB">
        <DiMongodb />
        {tooltipText === "MongoDB" && <span className="tooltip">{tooltipText}</span>}
      </div>
    </div>
  );
}

export default Bd;
