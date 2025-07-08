import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const [skillWidths, setSkillWidths] = useState({
    html: "0%",
    css: "0%",
    react: "0%",
    javascript: "0%",
    nodejs: "0%",
    sql: "0%",
    java: "0%",
  });

  const lang = {
    html: "95%",
    css: "90%",
    react: "90%",
    javascript: "85%",
    nodejs: "75%",
    sql: "95%",
    java: "80%",
  };

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          let multiply = 2;
          const delay = 200;

          Object.entries(lang).forEach(([language, percentage]) => {
            setTimeout(() => {
              setSkillWidths((prevWidths) => ({
                ...prevWidths,
                [language]: percentage,
              }));
            }, delay * multiply);
            multiply++;
          });
        } else {
          setSkillWidths({
            html: "0%",
            css: "0%",
            react: "0%",
            javascript: "0%",
            nodejs: "0%",
            sql: "0%",
            java: "0%",
          });
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      <h1>Skills & Expertise</h1>
      <div className="content-wrapper">
        <div className="skills-wrapper">
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            <div className="skill-content">
              <p>HTML</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.html }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <div className="skill-content">
              <p>CSS</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.css }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <div className="skill-content">
              <p>JavaScript</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.javascript }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="ReactJS"
            />
            <div className="skill-content">
              <p>ReactJS</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.react }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="NodeJS"
            />
            <div className="skill-content">
              <p>NodeJS</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.nodejs }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="SQL"
            />
            <div className="skill-content">
              <p>SQL</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.sql }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <div className="skill-content">
              <p>Java</p>
              <div className="skill-bar">
                <div
                  className="progress-bar"
                  style={{ width: skillWidths.java }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="show" id="container">
          <div className="box">
            <h4 style={{ color: "#3dff98" }}>Junior Full-Stack Developer</h4>
            <h6 style={{ color: "#e6f8ba" }}>Busitron IT Solutions</h6>
            <p>Jan/2025 - May/2025</p>
            <p>
              Developed and integrated 5 reusable front-end components in
              React.js for a company dashboard, improving UI consistency and
              user interaction.
            </p>
          </div>
          <div className="box">
            <h4 style={{ color: "#3dff98" }}>Associate Software Developer</h4>
            <h6 style={{ color: "#e6f8ba" }}>Virtue Wireless Pvt Ltd</h6>
            <p>Sep/2024 - Dec/2024</p>
            <p>
              Collaborated with designers and backend developers while learning
              and gaining hands-on experience with tools and technologies like
              React, GitHub, and MySQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
