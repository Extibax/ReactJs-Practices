/* Modules */
import React, { Component, Fragment } from "react";

/* Components */
import Header from "./components/Header";
import ListNews from "./components/List";
import Form from "./components/Form";

class App extends Component {
  state = {
    category: "general",
    news: []
  };

  componentDidMount() {
    this.requestNews();
  }

  requestNews = async (category = "general") => {
    const URL = `https://newsapi.org/v2/top-headlines?country=co&
    category=${category}&apiKey=fcaf233d6e2741d983fcd1d560cafc75
    `;

    const response = await fetch(URL);
    const news = await response.json();

    this.setState({
      news: news.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header title="React News API" />
        <div className="container white contenedor-noticias">
          <Form requestNews={this.requestNews} />
          <ListNews news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
