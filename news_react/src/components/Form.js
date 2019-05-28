/* Modules */
import React, { Component } from "react";

class Form extends Component {
  state = {
    categoria: "general"
  };

  handleChange = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        /* Pasarlo a la pagina principal */
        this.props.requestNews(this.state.categoria);
      }
    );
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticias por Categoria</h2>

            <div className="input-field col s12">
              <select onChange={this.handleChange}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
