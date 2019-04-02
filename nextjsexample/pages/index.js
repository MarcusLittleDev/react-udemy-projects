import React from "react";
import Link from "next/link";

import Styles from "./styles";

const home = props => (
  <div>
    <p>Welcome to the Home Page!</p>
    <p>
      Go to the{" "}
      <Link href="/portfolio">
        <a>Portfolio Page!</a>
      </Link>
    </p>
    <Styles />
  </div>
);

export default home;
