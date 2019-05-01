import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Carousel.module.css";

const carousel = props => (
  <Carousel className={classes.Carousel}>
    <Carousel.Item>
      <img
        className="d-block w-100 vh-100"
        src="http://placehold.it/400x300&text=slide1"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Welcome to my Personal Site</h3>
        <p>Created using React</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 vh-100"
        src="http://placehold.it/400x300&text=slide2"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>My Portfolio</h3>
        <p>
          Projects of my own creation. <br />
          You will find demos and explanations of any projects I do.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 vh-100"
        src="http://placehold.it/400x300&text=slide3"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Coming Soon...</h3>
        <p>Blog Page</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default carousel;
