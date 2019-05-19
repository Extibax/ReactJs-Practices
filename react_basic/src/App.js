import React from "react";
import "./App.css";

function App() {
  const name = "Juan";

  const employee = {
    name: "Juan",
    work: "Full Stack Developer"
  };

  return (
    <React.Fragment className="container">
      <h1>Aprendiendo React</h1>
      <p>Name: {employee.name}</p>
      <p>Work: {employee.work}</p>
    </React.Fragment>
  );
}

export default App;
