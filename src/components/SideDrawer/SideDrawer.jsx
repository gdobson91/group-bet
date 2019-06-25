import React, { Component } from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a id="#opening">AFL</a>
        </li>
        <li>
          <a href="#opening">UFC</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
