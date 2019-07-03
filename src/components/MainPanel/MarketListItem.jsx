import React from "react";

const MarketListItem = props => {
  return (
    <div
      className="item"
      key={props.i}
      onClick={props.marketListItemClickHandler}
    >
      <div className="header" data-label="Market">
        {props.market.marketName}
      </div>
    </div>
  );
};

export default MarketListItem;
