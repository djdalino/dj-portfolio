import React, { Component } from "react";
import "./home.css";
import Background from "../../Images/monolith.jpg";
import Clouds from "../../Images/clouds.png";
class Home extends Component {
  onScrollToContact = () => {
    const section = document.querySelector("#contact-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  render() {
    return (
      <div
        className="home-wrapper"
        style={{ backgroundImage: `url(${Background})` }}
        id="home-scroll"
      >
        <div
          className="moving-clouds"
          style={{ backgroundImage: `url(${Clouds})` }}
        ></div>
        <div className="home-container">
          <div className="home-container-content">
            <h1 className="home-welcome text-uppercase">
              Welcome to my Profile
            </h1>
            <span className="home-line" />
            <button
              className="home-contact-me text-uppercase"
              onClick={this.onScrollToContact}
            >
              Get my CV
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
