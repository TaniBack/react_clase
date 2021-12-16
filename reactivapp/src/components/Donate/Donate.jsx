// import React from "react";
import React, { useState } from 'react';


// Componente funcional 

const Donate = () => {
  
  const [count, setCount] = useState(0);
  // useState devuelve un array [state, ()setState]
  // asi que usamos destructuring para sacarlos a variables
  // el estado es --> count. Y para modificar la variable "count" usamos setCount() (es como un setState pero con nombres personalizados) const [state, setState] = useState(initialState)

  // Creamos otro Hook 
  const [values, setValues] = useState({
                                        email: '',
                                        password: ''
                                      });

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    setValues({  //actualizamos el estado de cada value 
      email,
      // "email": email 
      password
      // "password": password 
    })
    console.log(values)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

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
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={handleChange}></input>
        <br/><br/>
        <label htmlFor="password">Password</label>
        <input name="password" type="text" onChange={handleChange}></input>

        <button>Login</button>
      </form>
      <p>{JSON.stringify(values)}</p>

      {values.email ? <h3>Se ha donado {count} por {values.email} </h3> : "" }  
      {/* Si hay datos, mostramos el h3, sino, no mostramos nada */}
    </>
  )
};

export default Donate;
