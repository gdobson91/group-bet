import React, { Component } from "react";
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  onSearchSubmit() {
    axios.post(
      "http://220.253.88.23:8080/https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/",
      {
        filter: { eventTypeIds: ["26420387"] }
      },
      {
        headers: {
          "X-Application": "srvsmqIdO5bzDv92",
          "X-Authentication": "g+RKKec7WIzTSTtrlqyppwi6w3W/SFb+83j945UCRdo=",
          "content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );
  }

  state = {
    sideDrawerOpen: false,
    sports: ["AFL", "Golf", "Soccer", "UFC"]
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });

    this.onSearchSubmit();
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          sports={this.state.sports}
          show={this.state.sideDrawerOpen}
        />
        {backdrop}
        <div style={{ height: "60px" }} />
        <main style={{ padding: "0px 10px" }}>
          <p>This is the page content 1!</p>
          <p>This is the page content 2!</p>
          <p>This is the page content 3!</p>
        </main>
      </div>
    );
  }
}

export default App;
