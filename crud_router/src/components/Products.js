/* Modules */
import React from "react";

/* Component */
import List from "./List";

const Products = ({ products, setReloadProducts }) => {
  return (
    <React.Fragment>
      <h1 className="text-center">Products</h1>
      <ul className="list-group mt-5">
        {products.map(product => {
          return (
            <List
              key={product.id}
              product={product}
              setReloadProducts={setReloadProducts}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Products;
