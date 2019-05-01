import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import classes from "./Home.module.css";

const home = props => (
  <div className={classes.Home}>
    <Carousel />
  </div>
);

export default home;
