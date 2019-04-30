import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard/ProjectCard";
import classes from "./Projects.module.css";

const projects = props => {
  let projects = props.projects.map(project => (
    <Col sm={6} md={4} lg={3} className={classes.Projects}>
      <Link to="#">
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      </Link>
    </Col>
  ));

  return (
    <Container fluid>
      <Row>{projects}</Row>
    </Container>
  );
};

export default projects;
