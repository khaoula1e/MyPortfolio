import React, { useEffect, useState } from "react";
import "../style.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={`navbar ${scroll ? "scroll" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              <span>Khaoula ELFATIMI</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
