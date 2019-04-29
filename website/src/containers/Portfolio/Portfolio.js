import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";

class Portfolio extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "test title 1",
        image: "test image 1",
        description: "test description 1"
      },
      {
        id: 2,
        title: "test title 2",
        image: "test image 2",
        description: "test description 2"
      },
      {
        id: 3,
        title: "test title 3",
        image: "test image 3",
        description: "test description 3"
      },
      {
        id: 4,
        title: "test title 4",
        image: "test image 4",
        description: "test description 4"
      },
      {
        id: 5,
        title: "test title 5",
        image: "test image 5",
        description: "test description 5"
      },
      {
        id: 6,
        title: "test title 6",
        image: "test image 6",
        description: "test description 6"
      },
      {
        id: 7,
        title: "test title 7",
        image: "test image 7",
        description: "test description 7"
      },
      {
        id: 8,
        title: "test title 8",
        image: "test image 8",
        description: "test description 8"
      }
    ]
  };
  render() {
    return <Projects projects={this.state.projects} />;
  }
}

export default Portfolio;
