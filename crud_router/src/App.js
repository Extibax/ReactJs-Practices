/* Modules */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Components */
import Products from "./components/Products";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={AddProduct} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/products/edit/:id" component={EditProduct} />
      </Switch>
    </Router>
  );
}

export default App;
