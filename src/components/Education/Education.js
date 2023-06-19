import React from "react";
import "./Education.css";
import educationImage from "../../assets/images/education.png";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Education = () => {
  return (
    <div className="education">
        <div className="education-content">
    <div className="education-section">
        <div className="education-image">
        <img src={educationImage} alt="Education" />
        </div>
        <div className="education-quote">
        <h2 className="education-title">Academic Journey</h2>
        <p className="education-quote-text">"Learning is a treasure that will follow its owner everywhere."  <br/>- Chinese Proverb     
</p>
        </div>
    </div>
    </div>

      <div className="education-details">
        <div className="education-description">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021 - Present"
              iconStyle={{ background: '#FFD95A', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Advanced Software Engineering for Digital Services (ASEDS)</h3>
              <h4 className="vertical-timeline-element-subtitle">Engineering School</h4>
              <p>
                Institut National des Postes et Télécommunications (INPT), Rabat
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education custom-date-style"
              date="2019 - 2021"
              iconStyle={{ background: '#FFD95A', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
                          <h3 className="vertical-timeline-element-title">Mathematics, Physics, and Engineering Sciences</h3>
              <h4 className="vertical-timeline-element-subtitle">Preparatory Classes</h4>
              <p>
                Lycée Ibn Timiya, Marrakesh | Lycée Lissane Eddine Ibn Khatib, Laayoune
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019"
              iconStyle={{ background: '#FFD95A', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Mathematical Sciences</h3>
              <h4 className="vertical-timeline-element-subtitle">Baccalaureate</h4>
              <p>
                Lycée Al Khawarizmi, Guelmim
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: '#3c8f92', color: '#fff' }}
              icon={<AiFillStar />}
            />
          </VerticalTimeline>
        </div>
      </div>
      <h3 className="cv" style={{ fontSize: "2.6em", textAlign: "center", position: "relative" }}><a href="https://drive.google.com/file/d/152wiTGZfoVlMUt712AZMHX1pveW1hRzN/view?usp=sharing">Discover my resume</a></h3>
    </div>
  );
};

export default Education;
