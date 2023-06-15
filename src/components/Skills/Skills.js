import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./TechStack";
import Toolstack from "./Toolstack";
import "./Skills.css"
function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
              <h1 style={{ fontSize: "2.6em", textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>
   <span className="purple"> Tools </span> I use
  <span className="underline" />
</h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
