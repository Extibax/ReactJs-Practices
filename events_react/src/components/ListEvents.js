/* Modules */
import React from "react";

/* Consumers */
import { EventsConsumer } from "../context/EventsContext";

/* Components */
import Event from "../components/Event";

const ListEvents = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventsConsumer>
        {value => {
          return value.events.map(event => (
            <Event key={event.id} event={event} />
          ));
        }}
      </EventsConsumer>
    </div>
  );
};

export default ListEvents;
