/* Modules */
import React, { Component } from "react";

class Form extends Component {
    render() {
        return(
            <form action="">
                <h2>Agrega tus gatos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input type="text" className="u-full-width" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input type="text" className="u-full-width" placeholder="Ej. 300" />
                </div>

                <input type="text" className="button-primary u-full-width" value="Agregar" />
            </form>
        )
    }
}

export default Form;