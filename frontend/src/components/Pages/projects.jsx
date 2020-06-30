import React, { Component } from "react";
import "./projects.css";
import Card from "../../utils/Card/Card";
import { data } from "../../datas/data";
class Projects extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    this.setState({ data: data });
  };
  render() {
    return (
      <div className="project-wrapper mt-60" id="project-scroll">
        <div className="project-container">
          <h1 className="text-uppercase pt-60">Projects</h1>
          <div className="project-container-content mt-60">
            {this.state.data.map((item) => {
              return (
                <div className="mx-15">
                  <Card
                    key={item._id}
                    image={item.image}
                    title={item.title}
                    content={item.content}
                    github={item.github}
                    live={item.live}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
