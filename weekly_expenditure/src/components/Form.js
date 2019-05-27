/* Modules */
import React, { Component } from "react";

class Form extends Component {

    /* Refs para los campos del formulario */
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {

        /* Prevenir el default */
        e.preventDefault();

        /* Crear el objeto */
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }

        /* Agregarlo y enviarlo por props */
        this.props.agregarGasto(gasto);

        /* Resetear el formulario (opcional) */
        e.currentTarget.reset();

    }

    render() {
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gatos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} type="text" className="u-full-width" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastoRef} type="text" className="u-full-width" placeholder="Ej. 300" />
                </div>

                <input type="submit" value="Agregar" className="button-primary u-full-width"/>
            </form>
        )
    }
}

export default Form;