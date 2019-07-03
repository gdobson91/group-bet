import React from "react";
import MarketListItem from "./MarketListItem";

const MarketList = props => {
  let markets = props.markets;

  return (
    <div className="market-list" style={{ margin: 0, borderRadius: 0 }}>
      <div className="ui relaxed divided right aligned list">
        {markets.map((market, i) => (
          <MarketListItem
            market={market}
            key={i}
            eventListItemClickHandler={props.marketListItemClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketList;
