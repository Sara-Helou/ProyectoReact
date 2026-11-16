import React from 'react'

const Eventos = () => {
    const hasDadoClick=(e)=>{
        alert("Has dado click");
    };

    const hasEntrado=(e)=>{
        alert("Has entrado");
    }
  return (
    <div>
      <h1>Eventos en React</h1>
      <button onDoubleClick={hasDadoClick}>Clickea aqui!!!</button>

      <div className='caja' id='caja' onMouseEnter={hasEntrado}>
        Soy una caja
      </div>
    </div>
  )
}

export default Eventos
