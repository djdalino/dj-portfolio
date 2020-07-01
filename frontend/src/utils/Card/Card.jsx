import React from "react";
import "./Card.css";
const Card = ({ image, content, title, github, live }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={image} alt="project" />
      </div>

      <div className="card-content text-uppercase">
        <h2>{title}</h2>
        <div style={{ display: "flex", paddingBottom: "5px" }}>
          {content.map(c => {
            return (
              <div style={{}}>
                <p
                  style={{
                    backgroundColor: "#393b40",
                    margin: "2px",
                    padding: "2px 12px",
                    borderRadius: "5px"
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
            Github
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
