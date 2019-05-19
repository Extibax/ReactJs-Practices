import React, { Component } from "react";

class Product extends Component {
  render() {

    const {nombre, precio} = this.props.product;

    return(
      <div>
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
      </div>
    )
  }
}

export default Product;
