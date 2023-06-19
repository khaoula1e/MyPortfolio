import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Project.css";
import askricall from "../../assets/projects/all/2.png";
import edushare from "../../assets/projects/all/5.png";
import bruteforce from "../../assets/projects/all/3.png";
import parcauto from "../../assets/projects/all/1.png";
import eventdiscovery from "../../assets/projects/all/4.png";

function Projects() {
  return (
    <div className="project-section">
      <Particle />
      <div className="container">
        <h1 style={{ fontSize: "2.6em", textAlign: "center", position: "relative",marginTop:"50px" }}>
      My Recent <span className="unique"> Works </span> 
      <span
        className="underline"
      />
    </h1>
        <p className="project-description">
          Here are a few projects I've worked on recently
        </p>
        
        <div className="row2">
          <div className="col-md-4k project-card">
            <ProjectCard
              imgPath={parcauto}
              isBlog={false}
              title="Parc Auto"
              description="Parc Auto is a car fleet management application developed in React JS, PHP, and Firebase for the Marrakech Urban Agency. It simplifies the management of vehicles, drivers, mission orders, and vehicle registration stickers, ensuring efficient operations and resource utilization."
              ghLink="https://github.com/khaoula1e/ParcAuto.git"
              demoLink="https://parcauto.vercel.app/"
            />
          </div>
          <div className="col-md-4k project-card">
            <ProjectCard
              imgPath={edushare}
              isBlog={false}
              title="EduShare"
              description="EduShare is a mobile app that facilitates the sharing of educational resources within an engineering school. Developed with React Native and Spring Boot, it promotes collaboration and knowledge-sharing, providing a centralized platform for seamless access to educational content."
              ghLink="https://github.com/khaoula1e/EduShare.git"
            />
          </div>
          <div className="col-md-4k project-card">
            <ProjectCard
              imgPath={askricall}
              isBlog={false}
              title="AskBricall"
              description="
The app, powered by React.js and Spring Boot, enables customers to connect with skilled technicians across categories. Users can access real-time profiles and achievements, promoting transparency and streamlining operations in the service industry."
              ghLink="https://github.com/khaoula1e/Bricall.git"
            />
          </div>
          <div className="col-md-4k project-card">
            <ProjectCard
              imgPath={bruteforce}
              isBlog={false}
              title="Bruteforce"
              description="
                Bruteforce is a security application that implements brute force attacks to strengthen application security. It tests the strength of passwords and security measures, identifies vulnerabilities, and enhances defenses against unauthorized access attempts. "
              ghLink="https://github.com/khaoula1e/WebSecurityProject.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </div>
          <div className="col-md-4k project-card">
            <ProjectCard
              imgPath={eventdiscovery}
              isBlog={false}
              title="Event Discovery"
              description="This React JS and Node.js solution tackles the problem of event sharing. It enables users to create, share, and join activities and events that align with their interests and preferences. The platform promotes community engagement."
              ghLink="https://github.com/khaoula1e/pfa-Project.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </div>
        </div>
              <h3 className="hire" style={{ fontSize: "2.6em", textAlign: "center", position: "relative" }}><a href="https://drive.google.com/file/d/152wiTGZfoVlMUt712AZMHX1pveW1hRzN/view?usp=sharing">Discover my resume</a></h3>
      </div>
    </div>
  );
}

export default Projects;
