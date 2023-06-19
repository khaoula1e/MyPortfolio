import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./TechStack";
import Toolstack from "./Toolstack";
import Programming from "./Programming";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Bd from "./BD";
import DevOps from "./DevOps";
import "./Skills.css"
function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 style={{ fontSize: "2.6em", textAlign: "center",color: "rgb(3, 57, 65)", position: "relative", margin: "0 auto", marginBottom: "50px",marginTop:"50px"}}>
   Professional<span className="unique"> Skillset </span>
  <span className="underline" />
        </h1>
        <h2 style={{  textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>Programming Languages</h2>
        <Programming />
        <h2 style={{  textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>Frontend</h2>
        <Frontend />
        <h2 style={{  textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>Backend</h2>
        <Backend />
        <h2 style={{  textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>Database Management</h2>
        <Bd />
        <h2 style={{  textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>DevOps</h2>
        <DevOps/>
              <h1 style={{ fontSize: "2.6em", textAlign: "center",color: "rgb(3, 57, 65)", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>
   <span className="unique"> Tools </span> I use
  <span className="underline" />
</h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
