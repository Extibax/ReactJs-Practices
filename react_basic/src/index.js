import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* React sin JSX */

const title = React.createElement(
  "h1",
  { id: "title", className: "header" },
  "Hello World"
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
