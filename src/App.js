import React, { Component } from "react";
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import EventList from "./components/MainPanel/EventList";
import { BounceLoader } from "react-spinners";
import MarketList from "./components/MainPanel/MarketList";

var afl = { api_key: 61420, title: "AFL" };
var mma = { api_key: 26420387, title: "MMA" };
var soccer = { api_key: 1, title: "Soccer" };

class App extends Component {
  async getEventList(eventTypeId) {
    const response = await axios.post(
      //REMEMBER TO RUN C:/cors-anywhere-master/ node server CMD before testing

      "http://220.253.88.23:8080/https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/",
      // "https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/",
      {
        filter: { eventTypeIds: [eventTypeId], marketTypeCodes: ["MATCH_ODDS"] }
      },
      {
        headers: {
          "X-Application": "srvsmqIdO5bzDv92",
          "X-Authentication": "doBpj027XoDXqH+x0KKMrXQNWEB5rGXURFmor6hXPAc=",
          "content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );

    this.setState({
      events: response.data.map(events => events.event),
      showload: false,
      showmarketpages: false,
      showeventpage: true
    });
  }

  async getMarketList(eventId) {
    console.log(eventId);
    const response = await axios.post(
      //REMEMBER TO RUN C:/cors-anywhere-master/ node server CMD before testing
      "http://220.253.88.23:8080/https://api.betfair.com/exchange/betting/rest/v1.0/listMarketCatalogue/",
      {
        maxResults: 30,
        filter: { eventIds: [eventId] }
      },
      {
        headers: {
          "X-Application": "srvsmqIdO5bzDv92",
          "X-Authentication": "doBpj027XoDXqH+x0KKMrXQNWEB5rGXURFmor6hXPAc=",
          "content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );

    this.setState({
      markets: response.data.map(markets => markets),
      showload: false,
      showmarketpages: true,
      showeventpage: false
    });
  }

  state = {
    sideDrawerOpen: false,
    sports: [afl, mma, soccer],
    selectedSport: afl,
    showload: false,
    showmarketpages: false,
    showeventpage: true,
    events: [],
    markets: []
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
    this.getEventList(eventId);

    let selectedSport = this.state.sports.find(event => {
      return event.api_key === eventId;
    });

    this.setState({
      selectedSport: selectedSport,
      sideDrawerOpen: false,
      showeventpage: false,
      showmarketpages: false
    });

    this.setState({ showload: true });
  };

  eventListItemClickHandler = eventId => {
    this.getMarketList(eventId);
    this.setState({
      showmarketpages: true,
      showeventpage: false,
      showload: true
    });
  };

  marketListItemClickHandler = () => {
    this.setState({ showmarketpages: false });
  };

  render() {
    let backdrop;
    let marketpage;
    let eventpage;

    if (this.state.sideDrawerOpen || this.state.showload) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.showeventpage) {
      eventpage = (
        <EventList
          events={this.state.events}
          eventListItemClickHandler={this.eventListItemClickHandler}
        />
      );
    }

    if (this.state.showmarketpages) {
      marketpage = (
        <MarketList
          markets={this.state.markets}
          marketListItemClickHandler={this.marketListItemClickHandler}
        />
      );
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="sweet-loading">
          <BounceLoader
            loading={this.state.showload}
            sizeUnit={"px"}
            size={60}
            color={"#521751"}
          />
        </div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          sports={this.state.sports}
          show={this.state.sideDrawerOpen}
          drawItemClickHandler={this.drawItemClickHandler}
        />
        {backdrop}
        <div />
        <main>
          {eventpage}
          {marketpage}
        </main>
      </div>
    );
  }
}

export default App;
