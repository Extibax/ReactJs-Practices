/* Modules */
import React, { useState } from "react";

const Form = ({dataQuery}) => {
  /* State del componente */
  /* search = state, saveSearch = this.setState */
  const [search, setSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = e => {
    /* Cambiar el state */
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    /* Pasar hacia el componente la busqueda */
    dataQuery(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="country" onChange={handleChange}>
          <option value="">Selecciona una pais</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
