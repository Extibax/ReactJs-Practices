/* Modules */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

/* Components */
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const queryApi = async () => {
      /* Consultar la API de JSON-SERVER */
      const result = await axios.get('http://localhost:4000/restaurant');
      console.log(result);
    }
    queryApi();
  }, []);
  
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/new" component={AddProduct} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
        <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
      </main>
    </Router>
  );
}

export default App;
