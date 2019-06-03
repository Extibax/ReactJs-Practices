/* Modules */
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

/* Components */
import Error from "./Error";

const AddProduct = ({ history, setReloadProducts }) => {
  /* State */
  const [nameSaucer, setNameSaucer] = useState("");
  const [priceSaucer, setPriceSaucer] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const leerValorRadio = e => {
    setCategory(e.target.value);
  };

  const saveProduct = async e => {
    e.preventDefault();

    if (nameSaucer === "" || priceSaucer === "" || category === "") {
      setError(true);
      return;
    }

    setError(false);

    /* Crear el nuevo producto */
    try {
      const result = await axios.post("http://localhost:4000/restaurant", {
        nameSaucer: nameSaucer,
        priceSaucer: priceSaucer,
        category: category
      });

      console.log(result);
      if (result.status === 201) {
        Swal.fire(
          "Product Created",
          "The product was created successfully",
          "success"
        );
      }
    } catch (error) {
      Swal.fire({
        type: "error",
        title: "Error",
        text: "There was an error, Please, Try again"
      });
    }

    /* Redirigir al usuario a productos */
    setReloadProducts(true);
    history.push("/products");
  };

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Agregar Nuevo Producto</h1>

      {error ? <Error message="Todos los campos son obligatorios" /> : null}

      <form className="mt-5" onSubmit={saveProduct}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            onChange={e => setNameSaucer(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            onChange={e => setPriceSaucer(e.target.value)}
          />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="postre"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Postre</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="bebida"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Bebida</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="cortes"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Cortes</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="ensalada"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Producto"
        />
      </form>
    </div>
  );
};

export default withRouter(AddProduct);
