import React from "react";
import "./footer.css";

import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <a
                href="https://github.com/djdalino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/darren-james-dalino-767bb2183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/darrenjames888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-developer">
          <p>
            © 2020 Darren James Dalino. All rights reserved. Built with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
