// import React from "react";
import React, { useState } from 'react';


// Componente funcional 

const Donate = () => {
  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asi que usamos destructuring para sacarlos a variables
    // el estado es --> count 
    // Para modificar la variable "count" usamos setCount() (es como un setState pero con nombres personalizados) const [state, setState] = useState(initialState)



    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

  return (
    <>
        <h1>Donación</h1>
        <button name='add' onClick={handleAddClick} >+</button>
        <h2>The value is: {count}</h2>
        <button name='sub' onClick={handleSubClick} >-</button>
    </>
)
};

export default Donate;
