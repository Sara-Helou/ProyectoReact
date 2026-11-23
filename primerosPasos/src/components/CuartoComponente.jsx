import React, { useState } from "react";
import PropTypes from "prop-types";

const CuartoComponente = ({year=2026}) => {
  //recibimos en nuestro prop el año actual.
  //mediante useState y eventos camos a realizar el cambio de año.
  const [newYear, setNewYear] = useState(Number(year));
  const changeYear = (e) => {
    let dato = parseInt(e.target.value);
    //if(Number.isInteger(dato)){}
    if (dato) {
      setNewYear(dato);
    }
  };
  const anterior =(e)=>{
    setNewYear(newYear-1);
  }
  const siguiente =(e)=>{
    if(newYear){
     setNewYear(newYear+1);

    }
  }
  return (
    <div>
      <h2>Uso de props y UseState</h2>
      <p className="label">{newYear}</p>
      <button onClick={anterior}>Anterior</button>
      &nbsp;&nbsp;
      <button onClick={siguiente}>Siguiente</button> <br />
      <p>
        Cambiar año:
        <input
          type="text"
          onBlur={changeYear}
          placeholder="Cambia el año"
        ></input>
      </p>
      <br />
    </div>
  );
};

CuartoComponente.propTypes = {};

export default CuartoComponente;
