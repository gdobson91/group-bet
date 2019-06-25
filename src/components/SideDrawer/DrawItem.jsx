import React, { Component } from "react";
import "./SideDrawer.css";

const DrawItem = props => (
  <li className="nav-item">
    <a className="nav-link active" href="">
      {props.sport}
    </a>
  </li>
);

export default DrawItem;
