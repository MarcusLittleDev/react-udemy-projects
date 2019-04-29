import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard/ProjectCard";

const projects = props => {
  let projects = props.projects.map(project => (
    <Col sm={4} md={3}>
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
      />
    </Col>
  ));

  return (
    <Container fluid>
      <Row>{projects}</Row>
    </Container>
  );
};

export default projects;
