import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "../../components/Project";

const portfolio = props => {
  const [projects, setProjects] = useState(0);
  useEffect(() => {
    axios
      .get("/api/projects")
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {});
  }, []);
  const projectElements = Object.keys(projects).map(project => (
    <Project key={projects[project]} projectName={projects[project]} />
  ));
  return (
    <>
      <h1>Portfolio Page</h1>
      {projectElements}
    </>
  );
};

export default portfolio;
