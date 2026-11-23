import React from 'react'

const Eventos = () => {
   const hasDadoClick=(e)=>{
        alert("Has dado doble click");
    };

    const hasDadoDobleClick=(e)=>{
        alert("Has dado doble click");
    };

    const hasEntrado=(e)=>{
        alert("Has entrado");
    }

    const hasSalido=(e)=>{
      alert("Has salido");
    }
    const estasDentro=(e)=>{
      console.log("Estas dentro del text");
    }
    const estasFuera=(e)=>{
      console.log("Estas fuera del text: " + e.target.value);
    }
      const hayCambio=(e)=>{
      console.log("Hay cambio en el text: " + e.target.value);
    }
  return (
    <div>
      <h1>Eventos en React</h1>
       <button onClick={hasDadoClick}>Clickea aqui!!!</button>
       <br />
      <button onDoubleClick={hasDadoDobleClick}>Clickea dos veces aqui!!!</button>

      <div className='caja' id='caja' onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
        Soy una caja
      </div>
      
      <p>
        <input type="text" onChange={hayCambio} onBlur={estasFuera} onFocus={estasDentro} placeholder='Introduce tu nombre'/>
      </p>
      <br />

    </div>
  )
}

export default Eventos
