import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lateef Wasiu Olalekan</h1>
        <p className="footer__subtitle">Fullstack Developer</p>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__links">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__links">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__links">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://web.facebook.com/adewale.ologbenla.9"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/hybrid_web/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/WalexyTush"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Smartrove. All rights reserved {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
