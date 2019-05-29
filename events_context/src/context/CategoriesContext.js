/* Modules */
import React, { Component } from 'react'
import axios from "axios";

/* Create Context */
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  state = {
    categories: []
  }

  token = "3OTGI3OKPQ453X74I5IC";

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {

    let URL = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categories = await axios.get(URL);

    this.setState({
      categories: categories.data.categories
    });

  }

  render() { 
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}
 
export default CategoriesProvider;