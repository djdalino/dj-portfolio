import React, { Component } from "react";
import "./contact.css";
class Contact extends Component {
  state = {
    email: "",
  };
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      alert("Please enter your email...");
    } else {
      alert("Thank You! Please wait within 24hours!");
      e.target.reset();
      this.setState({ email: "" });
    }
  };
  render() {
    return (
      <div className="contact-wrapper" id="contact-scroll">
        <div className="contact-container">
          <h1 className="text-center text-uppercase">Request my CV</h1>
          <h2 className="text-center text-capitalized np nm">
            Type your email and submit.
          </h2>
          <h2 className="text-center text-capitalized np nm">
            I will email you within 24 hours.
          </h2>
          <form className="subscribe" onSubmit={this.onSubmit}>
            <input
              type="email"
              name="email"
              onChange={this.onInputChange}
              className="email"
              placeholder="Email..."
            />
            <button type="submit" className="send-email">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
