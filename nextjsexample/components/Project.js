import React from "react";
import Styles from "./styles";

const project = props => (
  <>
    <p className="Project">{props.projectName}</p>
    <Styles />
  </>
);

export default project;
