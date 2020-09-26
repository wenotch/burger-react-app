import React from "react";
import Aux from "../../hoc/Aux";
import clases from "./Layout.module.css";
const layout = (props) => (
  <Aux>
    <div>toolbar, sidedraw, backdrop</div>
    <main className={clases.Content}>{props.children}</main>
  </Aux>
);

export default layout;
