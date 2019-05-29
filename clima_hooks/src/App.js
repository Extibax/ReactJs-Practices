/* Modules */
import React, { useState } from "react";

/* Components */
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";

function App() {
  /* State principal */
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);

  const dataQuery = data => {
    /* Validar que ambos campos esten */
    if (data.city === "" || data.country === "") {
      /* Un error */
      setError(true);
      return;
    }

    /* Ciudad y pais existen, agregarlos al state */
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  /* Consultar API */
  const apiQuery = async () => {
    const appId = "f2faf68d451cd84d7c9df2dff57d0b73";

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  };

  /* Cargar un componente condicionalmente */
  let component;
  if (error) {
    /* Hay un error, mostrarlo */
    component = <Error message="Ambos campos son obligatorios" />;
  } else {
    /* Mostrar el clima */
    component = null;
  }

  return (
    <div className="App">
      <Header title="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col s12 m6">
                <Form dataQuery={dataQuery} />
              </div>
              <div className="col s12 m6">{component}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
