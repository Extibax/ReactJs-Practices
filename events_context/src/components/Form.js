/* Modules */
import React, { Component } from "react";

/* Consumers */
import { CategoriesConsumer } from "../context/CategoriesContext";
import { EventsConsumer } from "../context/EventsContext";

class Form extends Component {
  state = {
    name: "",
    category: ""
  };

  /* Si el usuario agrega un evento o categoria */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventsConsumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Busca tu evento por Nombre o Categoria
                </legend>
              </fieldset>

              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="name"
                    type="text"
                    placeholder="Nombre de Evento o Ciudad"
                    className="uk-input"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    name="category"
                    className="uk-select"
                    onChange={this.handleChange}
                  >
                    <option value="">--Selecciona Categoria--</option>
                    <CategoriesConsumer>
                      {value => {
                        return value.categories.map(category => {
                          return (
                            <option
                              key={category.id}
                              value={category.id}
                              data-uk-form-select
                            >
                              {category.name_localized}
                            </option>
                          );
                        });
                      }}
                    </CategoriesConsumer>
                  </select>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Buscar Eventos"
                    className="uk-button uk-button-danger"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}

export default Form;
