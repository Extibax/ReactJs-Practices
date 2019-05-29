/* Modules */
import React from "react";

/* Components */
import Header from "./components/Header";
import Form from "./components/Form";
import ListEvents from "./components/ListEvents";

/* Context */
import CategoriesProvider from "./context/CategoriesContext";
import EventsProvider from "./context/EventsContext";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <ListEvents />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
