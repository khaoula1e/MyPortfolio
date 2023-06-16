import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const isHomePage = location.pathname === "/";

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`navbar ${isHomePage && scroll ? "sticky" : ""} ${
          !isHomePage ? "blue" : ""
        }`}
      >
        <div className="max-width">
          <div className="logo">
            <Link to="/">
              <span>Khaoula ELFATIMI</span>
            </Link>
          </div>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="menu-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-btn">
                About
              </Link>
            </li>
            <li>
              <Link to="/education" className="menu-btn">
                Education
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-btn">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="menu-btn">
                Projects
              </Link>
            </li>
          </ul>
          <div className="menu-btn" onClick={handleMenuToggle}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
