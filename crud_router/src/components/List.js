/* Modules */
import React from "react";
import { Link } from "react-router-dom";

const List = ({ product }) => {

  const deleteProduct = id => {
    console.log("Eliminando", id);
    /* TODO: Eliminar los registros */
  }

  return (
    <li
      data-category={product.category}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {product.nameSaucer}{" "}
        <span className="font-weight-bold">{product.priceSaucer}</span>
      </p>

      <div>
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-success mr-2"
        >
          Edit
        </Link>

        <button
          type="button"
          onClick={() => deleteProduct(product.id)}
          className="btn btn-danger"
        >
          Delete &times;
        </button>
      </div>
    </li>
  );
};

export default List;
