import React, { Component } from "react";

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";

import Header from "./Header";
import Form from "./Form";
import Summary from "./Summary";
import Result from "./Result";

class App extends Component {
  state = {
    resultado: "",
    datos: {}
  };

  cotizarSeguro = datos => {
    const { marca, year, plan } = datos;

    /* Agregar una base de 2000 */
    let resultado = 2000;

    /* Obtener la diferencia de años */
    const diferencia = obtenerDiferenciaAnio(year);

    /* Por cada año restar el 3% al seguro */
    resultado -= (diferencia * 3 * resultado) / 100;

    /* Americano 15% Asiatio 5% y Europeo 30% de incremento al valor actual */
    resultado = calcularMarca(marca) * resultado;

    /* El plan del auto, el basico incrementa el valor 20% y cobertura completa 50% */
    let incrementoPlan = obtenerPlan(plan);

    /* Dependiendo del plan incrementar */
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    /* Crear objeto para el resumen */
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    };

    /* Ya tenemos el costo */
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });

    console.log(resultado);
  };

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador Seguro Auto" />
        <div className="contenedor-formulario">
          <Form cotizarSeguro={this.cotizarSeguro} />
          <Summary datos={this.state.datos} resultado={this.state.resultado} />
          <Result resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
