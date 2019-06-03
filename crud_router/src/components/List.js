/* Modules */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const List = ({ product, setReloadProducts }) => {
  const deleteProduct = id => {
    console.log("Eliminando", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurant/${id}`;
          console.log(url);

          const result = await axios.delete(url);

          console.log(result);

          if (result.status === 200) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            /* Consultar la API nuevamente */
            setReloadProducts(true);
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            type: "error",
            title: "Error",
            text: "There was an error, Please, Try again"
          });
        }
      }
    });
  };

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
