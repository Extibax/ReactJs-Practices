import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Listado de productos</h2>
        {Object.keys(this.props.products).map(key => (
          <Product
            key={key}
            product={this.props.products[key]}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Products;
