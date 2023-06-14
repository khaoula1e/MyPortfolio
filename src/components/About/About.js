import React from "react";
import "./About.css";
import img from '../../assets/images/about.png'

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
                Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India.
I am a final year student pursuing an Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
Additionally, I am currently employed as a software developer at Juspay.

Apart from coding, some other activities that I love to do!

 Playing Games
 Writing Tech Blogs
 Travelling
"Strive to build things that make a difference!"

Soumyajit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
