import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
// import Qualification from "./components/Qualification/Qualification";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scrollup/Scrollup";
import Portfolio from "./components/Portfolio/Portfolio";
import { createContext, useState } from "react";
import Qualification from "./components/Qualification/Qualification";
export const themeContext = createContext(null);

const App = () => {
  // Function For Light And Dark Theme
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Portfolio />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </themeContext.Provider>
  );
};
// export toggleTheme
export default App;
