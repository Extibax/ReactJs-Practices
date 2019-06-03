/* Modules */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

/* Components */
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [reloadProducts, setReloadProducts] = useState(true);

  useEffect(() => {
    if (reloadProducts) {
      const queryApi = async () => {
        /* Consultar la API de JSON-SERVER */
        const result = await axios.get("http://localhost:4000/restaurant");
        setProducts(result.data);
      };
      queryApi();

      /* Cambiar a false la recarga de los productos */
      setReloadProducts(false);
    }
  }, [reloadProducts]);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact
            path="/products"
            render={() => {
              return (
                <Products
                  products={products}
                  setReloadProducts={setReloadProducts}
                />
              );
            }}
          />
          <Route
            exact
            path="/products/new"
            render={() => {
              return <AddProduct setReloadProducts={setReloadProducts} />;
            }}
          />
          <Route
            exact
            path="/products/edit/:id"
            render={props => {
              /* Tomar el ID del producto */
              const idProduct = parseInt(props.match.params.id);

              /* El producto que se pasa al state */
              const product = products.filter(
                product => product.id === idProduct
              );
              return (
                <EditProduct
                  product={product[0]}
                  setReloadProducts={setReloadProducts}
                />
              );
            }}
          />
        </Switch>
        <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
      </main>
    </Router>
  );
}

export default App;
