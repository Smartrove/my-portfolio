import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Lateef Wasiu Olalekan</h1>
      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        Fullstack developer with 6+ years of experience crafting scalable web applications.
        I specialize in JavaScript, TypeScript, React, NextJs, and NodeJs, building
        solutions from e-commerce platforms to real estate consultancy systems. My portfolio
        includes See Kool, Clever Biz, Regional Trade Institute, and A1SwiftLink - each
        delivering seamless user experiences through clean code and modern architecture.
        Let's build something exceptional together.
      </p>
      <div>
        <a href="#contact" className="button">
          <span className="button-text">Say Hi </span>
          <span>
            <i className="button-icon uil uil-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Data;
