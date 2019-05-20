import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Result extends Component {
  props = {
    resultado: {}
  };

  render() {
    const result = this.props.resultado;
    const message = !result ? "Elige Marca. Año y Plan" : "El total es: $";

    return (
      <div className="gran-total">
        {message}
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={result}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span>{result}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Result;
