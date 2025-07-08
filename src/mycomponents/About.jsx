import React, { useEffect, useRef } from "react";
import "./About.css";
import homeImage from '/images/About_Prof.jpg';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="about-title">About Me</h1>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 about-image-col">
            <div className="about-image">
              <div className="image-wrapper">
                <img
                  src={homeImage}
                  alt="Profile"
                  className="profile-image"
                  loading="lazy"
                />
                <div className="green-border"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 about-text-col">
            <div className="about-text">
              <h4 className="about-heading">
                A curious mind shaping ideas into interactive reality.
              </h4>
              <p className="about-description">
                I'm a motivated Full Stack Developer with 9 months of hands-on
                experience in designing and building web applications. I'm
                proficient in both front-end and back-end technologies, with a
                strong grasp of database systems and responsive design
                principles.
              </p>
              <p className="about-description">
                I have experience developing and integrating client-server
                architectures and thrive in collaborative environments. With a
                solid foundation in software development, I'm eager to
                contribute to impactful projects and grow in a fast-paced,
                innovative setting.
              </p>

              <div className="timeline">
                <div className="timeline-row">
                  <div className="timeline-item">
                    <span className="year">
                      <span className="vertical-line"></span> 2019 - 2023
                    </span>
                    <div className="role">Amrita Vishwa VidyaPeetham</div>
                    <p>B.Tech - CSE</p>
                  </div>

                  <div className="timeline-item">
                    <span className="year">
                      <span className="vertical-line"></span> 2017 - 2019
                    </span>
                    <div className="role">Tirumala Junior College</div>
                    <p>SSC - MPC</p>
                  </div>
                </div>

                <div className="timeline-row">
                  <div className="timeline-item">
                    <span className="year">
                      <span className="vertical-line"></span> 2014 - 2017
                    </span>
                    <div className="role">Bharatiya Vidya Bhavan's</div>
                    <p>CBSE</p>
                  </div>
                </div>
              </div>

              <div className="download-section">
                <button className="download-btn">
                  <a
                    href="/CharanKResume.pdf"
                    download="Charan_Resume.pdf"
                    className="download-link"
                  >
                    Download CV <span className="download-icon">&#8595;</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
