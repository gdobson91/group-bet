import React, { Component } from "react";
import "./SideDrawer.css";
import DrawItem from "./DrawItem";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  let sports = props.sports;
  console.log(sports);
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="nav flex-column">
        {sports.map(sport => (
          <DrawItem sport={sport} />
        ))}
      </ul>
    </nav>
  );
};

export default sideDrawer;
