/* Modules */
import React, { Component } from "react";
import axios from "axios";

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  state = {
    events: []
  };

  token = "3OTGI3OKPQ453X74I5IC";
  orderBy = "date";

  getEvents = async search => {
    const URL = `https://www.eventbriteapi.com/v3/events/search/?q=${
      search.name
    }&categories=${search.category}&sort_by=${this.orderBy}&token=${
      this.token
    }&locale=es_ES`;

    /* Consultar la API con la URL */
    const events = await axios(URL);

    this.setState({
      events: events.data.events
    });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
