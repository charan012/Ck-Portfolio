import React from "react";
import "./Home.css"
import { Link } from "react-scroll";
import About from "../mycomponents/About.jsx";
import Projects from "../mycomponents/Projects.jsx";
import Skills from "../mycomponents/Skills.jsx";
import Contact from "../mycomponents/Contact.jsx";

const Home = () => {
  return (
    <>
      <div id="/" className="home-container">
        <div className="home-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="home-text text-center">
                  <h1 className="fade-in-bottom">
                    Hi, I'm <br className="d-sm-none" />
                    <span className="highlight">Charan Kantamsetti</span>
                  </h1>

                  <div className="fade-in-bottom-delayed">
                    <h5 className="home-subtitle">
                      Full Stack Developer | UI Designer
                    </h5>
                    <hr className="home-divider" />
                    <p className="home-description">
                      I design and develop modern, responsive web applications
                      and mobile platforms. <br className="d-none d-md-block" />
                      Let's build something great together.
                    </p>
                    <div className="home-buttons">
                      <Link
                        to="/contact"
                        className="btn home-btn"
                        smooth={true}
                        duration={800}
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="/about">
        <About />
      </div>

      <div id="/projects">
        <Projects />
      </div>

      <div id="/skills">
        <Skills />
      </div>

      <div className="quote-wrapper">
        <div className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="quote-content">
                  <div className="quote-mark">❝</div>
                  <blockquote className="quote-text">
                    The only thing we know about the future
                    <br className="d-none d-md-block" /> is that it will be
                    different.
                  </blockquote>
                  <hr className="quote-divider" />
                  <cite className="quote-author">Peter Drucker</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="/contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
