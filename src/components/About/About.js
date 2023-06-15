import React from "react";
import "./About.css";
import img from '../../assets/images/about.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="about-title">Know Who I Am</h1>
          <div className="about-card">
            <div className="about-card__image">
              <img src={img} alt="About" />
            </div>
            <div className="about-card__content">
              <h2 className="about-card__title">Hi, I'm Khaoula ELFATIMI</h2>
              <p className="about-card__text">
                Hi, everyone! I'm Khaoula ELFATIMI, a second-year student at the National Institute of Posts and Telecommunications, pursuing a diploma in Advanced Software Engineering for Digital Services. I have a strong passion for software development and continuously strive to enhance my skills and knowledge in this field.
              </p>
              <p className="about-card__text">
                Throughout my academic journey, I have gained both theoretical and practical expertise in software development. I have worked on various academic projects related to web development, mobile development, and UX/UI design. 
              </p>
              <p className="about-card__text">
                Apart from coding, I enjoy engaging in other activities that nourish my creativity and personal growth. In my free time, you can find me:
              </p>
              <ul className="about-card__list">
                <li>Playing games</li>
                <li>Writing tech blogs</li>
                <li>Travelling</li>
              </ul>
              <p className="about-card__text">
                I am excited about the prospect of applying my knowledge and skills in a professional setting through a PFA internship. I am eager to contribute to impactful software development projects and further develop my expertise. If you are interested in collaborating or learning more about my work, please feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
