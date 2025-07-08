import "./Footer.css";
import React from "react";
import { Link } from "react-scroll";
import logo from "/images/Logo_Design.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content-wrapper">
        <div className="footer-left">
          <div className="footer-brand-horizontal">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="brand-text">
              <h2 className="brand-name">Charan K</h2>
              <p className="brand-role">Full-Stack Web Developer</p>
            </div>
          </div>

          <p className="footer-con">
            Code&nbsp; | &nbsp;Design&nbsp; | &nbsp;Capture&nbsp; | &nbsp;Create
          </p>
          <p className="footer-description">
            A passionate developer creating web experiences that combine design
            and functionality to bring ideas to life.
          </p>
        </div>

        <hr className="hrll" />

        <ul className="footer-nav-links">
          <li>
            <Link to="/" smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" smooth={true} duration={800}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>

        <hr className="hrlll" />

        <div className="footer-right">
          <p className="footer-cp">
            &copy; {new Date().getFullYear()} CharanKantamsetti. All rights
            reserved.
          </p>
          <div className="social-icons">
            <a
              href="https://x.com/Pk_charan96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/_charan.79/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/charan-kantamsetty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <hr className="hrlt" />
    </footer>
  );
};

export default Footer;
