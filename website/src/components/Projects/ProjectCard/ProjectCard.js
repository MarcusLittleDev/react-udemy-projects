import React from "react";
import { Card } from "react-bootstrap";

const projectCard = props => (
  <Card className="bg-dark" text-white>
    <Card.Img
      src={"http://placehold.it/100x100&text=" + props.title}
      alt={props.title}
      variant="top"
    />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default projectCard;
