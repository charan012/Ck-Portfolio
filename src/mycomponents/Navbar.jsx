import { Link } from "react-scroll";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import logo from "/images/Logo_Design.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const logoTooltip = document.querySelector('[data-bs-toggle="tooltip"]');
    if (logoTooltip) {
      new window.bootstrap.Tooltip(logoTooltip);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg nav-menu ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Home"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <button
          className={`navbar-toggler nav-button ${isMenuOpen ? "change" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="line1 ham"></div>
          <div className="line2 ham"></div>
          <div className="line3 ham"></div>
        </button>

        <div
          className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="myNavbar"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link menu-item"
                to="/"
                smooth={true}
                duration={800}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-item"
                to="/about"
                smooth={true}
                duration={800}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-item"
                to="/projects"
                smooth={true}
                duration={800}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-item"
                to="/skills"
                smooth={true}
                duration={800}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-item"
                to="/contact"
                smooth={true}
                duration={800}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
