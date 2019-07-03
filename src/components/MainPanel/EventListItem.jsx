import React from "react";

const EventListItem = props => {
  return (
    <div
      className="item"
      key={props.i}
      onClick={() => props.eventListItemClickHandler(props.event.id)}
    >
      <div className="header" data-label="Event" event-id={props.event.id}>
        {props.event.name}
      </div>
      <div className="description">
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZone: "Australia/Sydney"
        }).format(Date.parse(props.event.openDate))}
      </div>
    </div>
  );
};

export default EventListItem;
