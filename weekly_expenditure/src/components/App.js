/* Modules */
import React from 'react';

/* Components */
import Header from "./Header";
import Form from "./Form";

/* Styles */
import "../styles/App.css"

function App() {
  return (
    <div className="App container">
      <Header title="Weekly Expenditure" />
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
              <Form />
          </div>
          <div className="one-half column">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
