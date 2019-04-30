import React from "react";
import { Card } from "react-bootstrap";
import classes from "./ProjectCard.module.css";

const projectCard = props => (
  <Card className={classes.ProjectCard} text-white>
    <Card.Img
      src={"http://placehold.it/100x100&text=" + props.title}
      alt={props.title}
    />
    <Card.ImgOverlay className={classes.ProjectCardImgOverlay}>
      <Card.Title className={classes.ProjectCardTitle}>
        {props.title}
      </Card.Title>
      <Card.Text className={classes.ProjectCardText}>
        {props.description}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
);

export default projectCard;
