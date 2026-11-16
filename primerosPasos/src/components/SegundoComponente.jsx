import React from "react";

const SegundoComponente = () => {
  const libros = 
    [
      "Harry Potter",
      "Juego de Tronos",
      "Los Pilares de la Tierra",
      "Piratas del Caribe",
    ];

  // Opción 2

  let elementos = [];
  if (libros.length > 0) {
    for (let i = 0; i < libros.length; i++) {
      elementos.push(<li key={i}>{libros[i]}</li>);
    }
  }

  return (
    <div>
      <h2>Listado de Libros</h2>
      {/* Opción 1 */}
      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, indice) => {
            console.log(indice, libro);
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay ningún libro aún</p>
      )}

      {/* Opción 2 */}
      {libros.length>0 && <><h3>Otra lista</h3><ul>{elementos}</ul></>}
    </div>
  );
};

export default SegundoComponente;
