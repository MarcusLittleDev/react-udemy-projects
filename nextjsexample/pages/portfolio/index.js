import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "../../components/Project";

const portfolio = props => {
  // alternative to getInitialProps
  // const [projects, setProjects] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("/api/projects")
  //     .then(response => {
  //       setProjects(response.data);
  //     })
  //     .catch(error => {});
  // }, []);

  const projectElements = props.projects.map(project => {
    return <Project key={project.name} projectName={project.name} />;
  });

  return (
    <>
      <h1>Portfolio Page</h1>
      {projectElements}
    </>
  );
};

portfolio.getInitialProps = async context => {
  const result = await axios
    .get("http://localhost:3000/api/projects")
    .then(response => {
      if (response.data) {
        return response.data;
      } else {
        return { projects: [] };
      }
    })
    .catch(error => {
      console.log(error);
      return { projects: [] };
    });
  return result;
};

export default portfolio;
