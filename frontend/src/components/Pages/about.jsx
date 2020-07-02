import React from "react";
import "./about.css";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Darren from "../../Images/darren.png";
const About = () => {
  return (
    <div className="about-wrapper" id="about-scroll">
      <h1 className="text-uppercase text-center pt-60">About Me</h1>
      <div className="about-container mt-60">
        <div className="about-me-dp mx-15">
          <img src={Darren} alt="Darren James Dalino" />
        </div>
        <div className="about-me">
          <p>
            Hi there! I'm <span className="dev-name">Darren James Dalino</span>.
            I am proficient in HTML5, CSS3, Javascript, React JS, Node JS,
            Express JS, MongoDB, Converting PSD file into interactive and
            responsive web pages. I can work on both server-side and client-side
            using modern technologies I have mentioned. I always make sure that
            all my works are QA'd using testing tool like browserstack.
          </p>

          <p>
            I love coding and debugging so much. I enjoy turning complex
            problems into simple and intuitive designs.
          </p>

          <p>
            When I'm not coding, you'll find me playing online games, cycling,
            trekking or working out in the park.
          </p>
        </div>
        <div>
          <h1>Skills</h1>
          <p>HTML/CSS</p>
          <ProgressBar done="97" />
          <p>JAVASCRIPT</p>
          <ProgressBar done="95" />
          <p>REACT JS</p>
          <ProgressBar done="97" />
          <p>NODE JS/ EXPRESS JS</p>
          <ProgressBar done="96" />
          <p>MONGO DB</p>
          <ProgressBar done="93" />
          <p>PHOTOSHOP</p>
          <ProgressBar done="90" />
        </div>
      </div>
    </div>
  );
};

export default About;
