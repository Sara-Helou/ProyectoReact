import React from 'react'
import PropTypes from 'prop-types'

const TercerComponente = ({
    nombre = "Anonimo",
    apellidos = "",
    ficha = { altura: "0", peso: "0", alergias: "" }
}) => {
  return (
    <div>   
        <h2>Comunico componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.peso}</li>
            <li>{ficha.alergias}</li>


        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

export default TercerComponente
