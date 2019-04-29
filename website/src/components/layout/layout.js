import React from "react";
import { Container, Row } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";

const layout = props => (
  <>
    <Navbar />
    {props.children}
  </>
);

export default layout;
