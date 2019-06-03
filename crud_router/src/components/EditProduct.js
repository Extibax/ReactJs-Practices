/* Modules */
import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

/* Components */
import Error from "./Error";

const EditProduct = props => {
  /* Destructuring de props */
  const { history, setReloadProducts, product } = props;

  /* General los Refs */
  const priceSaucerRef = useRef("");
  const nameSaucerRef = useRef("");

  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");

  const leerValorRadio = e => {
    setCategory(e.target.value);
  };

  const editProduct = async e => {
    e.preventDefault();

    /* Validacion */
    const newNameSaucer = nameSaucerRef.current.value,
      newPriceSaucer = priceSaucerRef.current.value;

    let categorySaucer = category === "" ? product.category : category;

    if (
      newNameSaucer === "" ||
      newPriceSaucer === "" ||
      categorySaucer === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    console.log(categorySaucer);

    /* Obtener los valores del formulario */
    const editSaucer = {
      nameSaucer: newNameSaucer,
      priceSaucer: newPriceSaucer,
      category: categorySaucer
    };

    /* Enviar el Request */
    const url = `http://localhost:4000/restaurant/${product.id}`;

    try {
      const result = await axios.put(url, editSaucer);
      console.log(result);
      if (result.status === 200) {
        Swal.fire(
          "Product Created",
          "The product was edited successfully",
          "success"
        );
      }

      /* Redirigir al usuario a productos */
      setReloadProducts(true);
      history.push("/products");
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "error",
        title: "Error",
        text: "There was an error, Please, Try again"
      });
    }
  };

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar Producto</h1>

      {error ? <Error message="Todos los campos son obligatorios" /> : null}

      <form className="mt-5" onSubmit={editProduct}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            ref={nameSaucerRef}
            defaultValue={product.nameSaucer}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            ref={priceSaucerRef}
            defaultValue={product.priceSaucer}
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
              defaultChecked={product.category === "postre"}
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
              defaultChecked={product.category === "bebida"}
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
              defaultChecked={product.category === "cortes"}
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
              defaultChecked={product.category === "ensalada"}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Editar Producto"
        />
      </form>
    </div>
  );
};

export default withRouter(EditProduct);
