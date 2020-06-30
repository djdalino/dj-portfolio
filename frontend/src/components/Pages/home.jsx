import React, { Component } from "react";
import "./home.css";
class Home extends Component {
  onScrollToContact = () => {
    const section = document.querySelector("#contact-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  render() {
    return (
      <div className="home-wrapper" id="home-scroll">
        <div className="filter"></div>
        <div className="moving-clouds"></div>
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
