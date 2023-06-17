import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => {
  const handleScroll = () => {
  console.log("window.scrollY", window.scrollY);
  if (window.scrollY > 50) {
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

  useEffect(() => {
  setIsNavExpanded(false);

  // Check if we're on the home page
  const newIsHome = location.pathname === "/";
  console.log("newIsHome", newIsHome);
  setIsHome(newIsHome);

  // Reset the scroll state variable if we're not on the home page
  if (!newIsHome) {
    setScroll(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}, [location]);

  return (
    <>
      <div className={`navbar ${isHome && scroll ? "sticky" : ""} ${!isHome ? "blue" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <Link to="/">
              <span>Khaoula ELFATIMI</span>
            </Link>
          </div>
          <button
            className="responsive"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FaBars />
          </button>
          <div className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}>
            <ul className={`menu ${isNavExpanded ? "open" : ""}`}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
