import React from "react";
import "./SideDrawer.css";
import DrawerItem from "./DrawerItem";

const sideDrawer = props => {
  let drawerClasses = "side-drawer ui vertical menu";
  let sports = props.sports;
  if (props.show) {
    drawerClasses = "side-drawer open ui vertical menu";
  }
  return (
    <div className={drawerClasses} style={{ margin: 0, borderRadius: 0 }}>
      <div className="item" />
      {sports.map((sport, i) => (
        <DrawerItem
          sport={sport}
          key={i}
          drawItemClickHandler={props.drawItemClickHandler}
        />
      ))}
    </div>
  );
};

export default sideDrawer;
