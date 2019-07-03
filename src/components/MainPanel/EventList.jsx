import React from "react";
import EventListItem from "./EventListItem";

const EventList = props => {
  let events = props.events;

  return (
    <div style={{ margin: 0, borderRadius: 0 }}>
      <div className="ui relaxed divided right aligned list">
        {events.map((event, i) => (
          <EventListItem
            event={event}
            key={i}
            eventListItemClickHandler={props.eventListItemClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
