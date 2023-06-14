import React from "react";
import myImg from "../../assets/images/Khaoula.svg";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

function Home2() {
  const email = "khaoulaelfatimi4@gmail.com";
  const phoneNumber = "+212643948038";

  return (
    <div className="home-about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1> */}
            <h1 style={{ fontSize: "2.6em", textAlign: "center", position: "relative" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
      <span
        className="underline"
        
      />
    </h1>
            <p className="home-about-body">
              I am passionate about programming and I have at least learned
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Java, Python, Javascript, and Typescript </b>
              </i>
              <br />
              <br />
              I am particularly interested in exploring new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> with a focus on{" "}
                <b className="purple">
                  emerging technologies and innovative solutions.
                </b>
              </i>
              <br />
              <br />
              I am keen on staying updated with the latest advancements in fields like <b className="purple">artificial intelligence, machine learning, cloud computing</b> and
              <i>
                <b className="purple">
                  {" "}
                   cybersecurity.
                </b>
              </i>
              <br />
              <br />
              I enjoy creating innovative and user-friendly web experiences using <b className="purple">React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
            </p>
          </div>
          <div className="col-md-4 home-about-image">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <Tilt>
                  <img src={myImg} className="img-fluid custom-avatar" alt="avatar" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khaoula1e"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khaoula-elfatimi-6092a8239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`tel:${phoneNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaPhone />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;