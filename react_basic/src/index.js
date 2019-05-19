import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import FirstComponent from "./components/Aplication";

ReactDOM.render( <FirstComponent />, document.getElementById("root"));

serviceWorker.unregister();
