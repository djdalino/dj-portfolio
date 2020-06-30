import React from "react";
import "./about.css";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
const About = () => {
  return (
    <div className="about-wrapper" id="about-scroll">
      <h1 className="text-uppercase text-center pt-60">About</h1>
      <div className="about-container mt-60">
        <div className="about-me-dp mx-15">
          <img src="/images/darren.png" alt="Darren James Dalino" />
        </div>
        <div className="about-me">
          <h1>Darren James Dalino</h1>
          <p>
            I am proficient in HTML5, CSS3, Javascript, React JS, Node JS,
            Express JS, MongoDB and converting PSD file to interactive web pages
            using reactJS and cutting images using photoshop.
          </p>
        </div>
        <div>
          <h1>Skills</h1>
          <p>HTML/CSS</p>
          <ProgressBar done="90" />
          <p>JAVASCRIPT</p>
          <ProgressBar done="93" />
          <p>REACT JS</p>
          <ProgressBar done="97" />
          <p>NODE JS/ EXPRESS JS</p>
          <ProgressBar done="97" />
          <p>MONGO DB</p>
          <ProgressBar done="98" />
        </div>
      </div>
    </div>
  );
};

export default About;
