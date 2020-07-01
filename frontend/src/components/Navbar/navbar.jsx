import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    navbar: "",
    burger: false,
  };
  componentDidMount() {
    this.onChangeNavbar();
  }
  onChangeNavbar = () => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 80) {
        this.setState({ navbar: "nav-change" });
      } else {
        this.setState({ navbar: "" });
      }
    });
  };
  onScrollToHome = () => {
    const section = document.querySelector("#home-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  onScrollToAbout = () => {
    // window.scrollTo({
    //   top: 700,
    //   behavior: "smooth",
    // });
    const section = document.querySelector("#about-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  onScrollToProject = () => {
    const section = document.querySelector("#project-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  onScrollToContact = () => {
    const section = document.querySelector("#contact-scroll");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  onBurgerClick = () => {
    this.setState({ burger: !this.state.burger });
  };
  render() {
    console.log(this.state.burger);
    return (
      <nav className={`navbar-wrapper ${this.state.navbar}`}>
        <div className="navbar">
          <div className="navbar-header">
            <div className="navbar-logo">
              <Link to="#" onClick={this.onScrollToHome}>
                <h1>DARREN</h1>
              </Link>
            </div>

            <div className="navbar-burger" onClick={() => this.onBurgerClick()}>
              <div
                className={`${this.state.burger ? "" : "toggle"} line1`}
              ></div>
              <div
                className={`${this.state.burger ? "" : "toggle"} line2`}
              ></div>
              <div
                className={`${this.state.burger ? "" : "toggle"} line3`}
              ></div>
            </div>
          </div>

          <ul className={`navbar-ul ${this.state.burger ? "" : "show-nav"}`}>
            <li onClick={() => this.onBurgerClick()}>
              <Link to="#" onClick={this.onScrollToHome}>
                Home
              </Link>
            </li>
            <li onClick={() => this.onBurgerClick()}>
              <Link to="#" onClick={this.onScrollToAbout}>
                About
              </Link>
            </li>
            <li onClick={() => this.onBurgerClick()}>
              <Link to="#" onClick={this.onScrollToProject}>
                Projects
              </Link>
            </li>
            <li onClick={() => this.onBurgerClick()}>
              <Link to="#" onClick={this.onScrollToContact}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
