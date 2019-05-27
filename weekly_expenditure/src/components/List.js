/* Modules */
import React, { Component } from "react";

/* Components */
import Expenditure from "./Expenditure";

class List extends Component {
    render() {
        return(
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key => (
                  <Expenditure gasto={this.props.gastos[key]} />
                ))}
                <Expenditure />
            </div>
        );
    }
}

export default List;