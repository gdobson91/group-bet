import React, { Component } from "react";
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

var afl = { api_key: 61420, title: "AFL" };
var mma = { api_key: 26420387, title: "MMA" };
var soccer = { api_key: 1, title: "Soccer" };

class App extends Component {
  getEventList(eventTypeId) {
    axios.post(
      //REMEMBER TO RUN C:/cors-anywhere-master/ node server CMD before testing

      "http://220.253.88.23:8080/https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/",
      {
        filter: { eventTypeIds: [eventTypeId] }
      },
      {
        headers: {
          "X-Application": "srvsmqIdO5bzDv92",
          "X-Authentication": "XiMYEnVdzFFMBSyVFq26/NUgJMBQ5u6nYDXcOuTxaE4=",
          "content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );
  }

  state = {
    sideDrawerOpen: false,
    sports: [afl, mma, soccer],
    selectedSport: afl,
    events: []
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawItemClickHandler = eventId => {
    //this.getEventList(eventId);

    let selectedSport = this.state.sports.find(event => {
      return event.api_key === eventId;
    });

    this.setState({ selectedSport: selectedSport });

    //this.setState({events:})
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
          drawItemClickHandler={this.drawItemClickHandler}
        />
        {backdrop}
        <div />
        <main>
          <p>This is the page content 1!</p>
        </main>
      </div>
    );
  }
}

export default App;
