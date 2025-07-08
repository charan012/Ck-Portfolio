import React, { useEffect } from "react";
import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  useEffect(() => {
    const form = document.querySelector("#contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.target.elements.name.value = "";
        e.target.elements.email.value = "";
        e.target.elements.message.value = "";
      });
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", () => {});
      }
    };
  }, []);

  return (
    <>
      <div className="contact-container">
        <section id="contact">
          <div className="section-header">
            <h1>Contact</h1>
            <p>Get In Touch!</p>
          </div>
          <div className="contact-wrapper">
            <form id="contact-form" className="form-horizontal" role="form">
              <p>❝Drop me a message and let's get to work!❞</p>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="10"
                    placeholder="MESSAGE"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                className="btn btn-primary send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>

            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i
                    className="fa-solid fa-location-dot fa-2x"
                    aria-hidden="true"
                  ></i>
                  <span className="contact-text place">
                    Hyderabad, Telangana - 500081
                  </span>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                  <span className="contact-text phone">
                    <a href="tel:+917997695859" title="Give me a call">
                      +91-7997695859
                    </a>
                  </span>
                </li>
                <li className="list-item">
                  <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                  <span className="contact-text gmail">
                    <a
                      href="mailto:CharanKantamsetty@gmail.com"
                      title="Send me an email"
                    >
                      CharanKantamsetty@gmail.com
                    </a>
                  </span>
                </li>
              </ul>

              <hr className="hrl" />

              <ul className="social-media-list">
                <li>
                  <a
                    href="https://github.com/charan012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/charan-kantamsetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Pk_charan96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
                      alt="Twitter"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_charan.79/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
                      alt="Instagram"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/your-facebook-id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                      alt="Facebook"
                      className="social-icon"
                    />
                  </a>
                </li>
              </ul>

              <hr className="hrl" />
              <div className="copyright"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
