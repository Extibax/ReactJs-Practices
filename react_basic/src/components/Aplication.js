import React, { Component } from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";

class Aplication extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    const products = [
      { nombre: "Libro1", precio: 200 },
      { nombre: "Libro2", precio: 200 },
      { nombre: "Libro3", precio: 200 },
      { nombre: "Libro4", precio: 200 }
    ];

    setTimeout(() => {
      this.setState({
        products: products
      });
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Header title="Online Store" />
          <Products products={this.state.products} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Aplication;
