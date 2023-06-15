import React from "react";
import "./About.css";
import img from '../../assets/images/khaoula3.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h1 style={{ fontSize: "2.6em", textAlign: "center", position: "relative", margin: "0 auto", marginBottom: "10px", marginTop: "0px" }}>
  Know <span className="purple"> Who I am </span> 
  <span className="underline" />
</h1>
          <div className="about-ca">
            <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${img})` }}
        ></div>
      <div className="rightSide">
          <h2 className="about-card__title">Hi, I'm Khaoula ELFATIMI</h2>
          <form id="contact-form" method="POST">
           <p className="about-card__text">
                
I am a passionate second-year student at the National Institute of Posts and Telecommunications, currently pursuing a diploma in Advanced Software Engineering for Digital Services. My enthusiasm for software development is limitless, and I am always motivated to improve my skills and broaden my knowledge in this ever-evolving field. 
              </p>
              <p className="about-card__text">
                Throughout my academic journey, I have gained a solid foundation and practical expertise in software development.
              </p>
              
              
              <h3 className="resume"><a href="https://drive.google.com/file/d/152wiTGZfoVlMUt712AZMHX1pveW1hRzN/view?usp=sharing">Discover my resume</a></h3>
          
        </form>
      </div>
    </div>
          </div>
          
    </div>
        </div>
    </section>
  );
};

export default About;
