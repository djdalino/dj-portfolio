import React from "react";
import Home from "./Pages/home";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Footer from "./Footer/footer";
const singlePage = () => {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default singlePage;
