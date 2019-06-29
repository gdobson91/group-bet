import React from "react";
import "./SideDrawer.css";

const DrawerItem = props => (
  <a
    href="#header"
    className="item"
    api_key={props.sport.api_key}
    key={props.i}
    onClick={() => props.drawItemClickHandler(props.sport.api_key)}
  >
    {props.sport.title}
  </a>
);

export default DrawerItem;
