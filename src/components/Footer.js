import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      {/* <div className="footer-copywright">
        <h3>Designed and Developed by Khaoula ELFATIMI</h3>
      </div> */}
      <div className="footer-copywright">
        <h3>Copyright © {year} </h3>
      </div>
      <div className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/khaoula1e"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/khaoula-elfatimi-6092a8239/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100009511973118&mibextid=ZbWKwL"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
