import React from "react";
import "./Card.css";
const Card = ({ image, content, title, github, live }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <a className="click-live">
          <img src={image} alt="project" />
          <a href={live} target="_blank">
            <i className="fa fa-bullseye"></i>{" "}
          </a>
        </a>
      </div>

      <div className="card-content text-uppercase">
        <h2>{title}</h2>
        <div style={{ display: "flex", paddingBottom: "5px" }}>
          {content.map((c) => {
            return (
              <div style={{}}>
                <p
                  className="card-skills"
                  style={{
                    backgroundColor: "#393b40",
                    margin: "2px",
                    padding: "2px 12px",
                    borderRadius: "5px",
                  }}
                >
                  {c}
                </p>
              </div>
            );
          })}
        </div>
        <div className="card-footer">
          <a href={github} target="_blank" rel="noopener noreferrer">
            Open source on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
