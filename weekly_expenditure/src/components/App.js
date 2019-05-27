/* Modules */
import React, { Component } from "react";

/* Components */
import Header from "./Header";
import Form from "./Form";
import List from "./List";

/* Styles */
import "../styles/App.css";

class App extends Component {

  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  }

  /* Agregar un nuevo gasto al state */
  agregarGasto = gasto => {
    /* Tomar una copia del state actual */
    const gastos = {...this.state.gastos};

    /* Agregar al gasto al objeto del state */
    gastos[`gasto${Date.now()}`] = gasto;

    console.log(this.state);
    console.log(gastos);

    /* Ponerlo en state */
    this.setState({
      gastos
    });
  }

  render() {
    return (
      <div className="App container">
        <Header title="Weekly Expenditure" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <List gastos={this.state.gastos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
