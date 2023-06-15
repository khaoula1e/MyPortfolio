import React from "react";
import '../../style.css';
import Type from "./Type";
import Contact from "./Contact";
import Home2 from "./Home2";

function Home() {
  // Add the "home-page" class to the body element when rendering the home page
  document.body.classList.add('home-page');

  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <h1 style={{ paddingBottom: 15 }} className="text-1">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> ELFATIMI Khaoula</strong>
            </h1>
            <div className="text-3">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>
      <Home2 />
      <Contact/>
    </>
  );
}

export default Home;
