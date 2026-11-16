import React, { Component } from "react";

export default class PrimerComponente extends Component {
  render() {
    // const nombre = "Sara";
    // const profesion = "Developer Junior";
    let usuario = {
      nombre: "Sara",
      apellidos: "Helou González",
      profesion: "Developer Junior",
      direccion: "Una",
      telefono: "728364527",
      fechaNac: "24-12-2005"
    
    }

    console.log(usuario);
    return (
      <div>
        <h2>Primer Componente</h2>
        <p>Este es mi primer componente</p>
        {/* <p>{JSON.stringify(usuario)}</p> */}
        <p>Nombre: {usuario.nombre}</p>
        <p>Apellidos: {usuario.apellidos}</p>
        <p>Profesión: {usuario.profesion}</p>
        <p>Dirección: {usuario.direccion}</p>
        <p>Teléfono: {usuario.telefono}</p>
        <p>Fecha de nacimiento: {JSON.stringify(usuario.fechaNac)}</p>
      </div>
    );
  }
}
