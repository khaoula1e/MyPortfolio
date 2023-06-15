import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import "./Skills.css";

function Toolstack() {
  return (
    <div className="toolstack-container">
      <div className="tech-icon">
        <SiMacos />
      </div>
      <div className="tech-icon">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icon">
        <SiPostman />
      </div>
      <div className="tech-icon">
        <SiSlack />
      </div>
      <div className="tech-icon">
        <SiVercel />
      </div>
    </div>
  );
}

export default Toolstack;
