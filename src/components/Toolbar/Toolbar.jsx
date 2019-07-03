import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar-toggle_button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="spacer" />
    </nav>
  </header>
);

export default Toolbar;
