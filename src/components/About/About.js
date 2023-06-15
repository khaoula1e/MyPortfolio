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
          {/* <div className="about-card">
            <div
        className="leftSide"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
            <div className="rightSide">
              <h2 className="about-card__title">Hi, I'm Khaoula ELFATIMI</h2>
              <p className="about-card__text">
                Greetings, everyone! I'm Khaoula ELFATIMI, a passionate second-year student at the National Institute of Posts and Telecommunications. Currently, I am pursuing a diploma in Advanced Software Engineering for Digital Services, where I dive deep into the fascinating world of software development.
              </p>
              <p className="about-card__text">
                My enthusiasm for software development knows no bounds, and I am constantly driven to enhance my skills and expand my knowledge in this dynamic field. Throughout my academic journey, I have had the privilege of acquiring both theoretical foundations and practical expertise in software development. I have actively engaged in diverse academic projects focusing on web development, mobile development, and UX/UI design, which have further refined my abilities.
              </p>
              <p className="about-card__text">
                Beyond coding, I find immense joy in nurturing my creativity and personal growth through various activities. During my leisure time, you'll often find me:
              </p>
              <ul className="about-card__list">
                <li>Volunteering to make a positive impact in my community</li>
                <li>Getting lost in the pages of captivating books</li>
                <li>Capturing moments and stories through the lens of my phone</li>
                <li>Reflecting and expressing my thoughts through journaling</li>
              </ul>
              <p className="about-card__text">
                I am thrilled about the opportunity to apply my knowledge and skills in a professional setting through a PFA internship. Collaborating on impactful software development projects and continuously expanding my expertise is something I eagerly look forward to. If you are interested in collaborating or would like to learn more about my work, please don't hesitate to reach out.
<br/>
              </p>
              <h3>Let's create something exceptional together!</h3>
            </div>
          </div> */}
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
