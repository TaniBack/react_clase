
// usamos Hooks para tener un estado  importamos un metodo "useState" (cuand veamos use..) ya que App.js es una funcion y no tiene estado 
import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

// Importamos BrowserRouter para hacer redirecciones 
import { BrowserRouter} from 'react-router-dom';

// Importamos userContext 
import {userContext} from '../src/context/userContext'


// Componente funcional con un return que devuelve lo que se renderiza   
function App() {
  const [user, setUser] = useState({ name: "Taniu" }); // Estado de user inicial  . Destructuring -> Devuelve 2 cosas: el estado (user) y un metodo para modificar al estado  (setUser) (Serían como 2 variables)

  const login = (name) =>  setUser({ name }) //Cambia el estado con un nuevo nombre (lo rellena)

  const logout = () => setUser({ name: "" }) //Cambia el estado del name a vacío (limpia estado user)


  const value = {
    user, 
    login,
    logout
  }
  // Claves: user, login, logout 


  return (
    <div className="App"> 
    {/* el BrowserRouter enrutara el Header y Main  */}
      <BrowserRouter>
        <userContext.Provider value={value}>
        <h3>Componente Header</h3>
        <Header/>
        <hr/>
        <h3>Componente MAIN</h3>
        <Main/>  
        </userContext.Provider>
      </BrowserRouter>
        <hr/>
      <h3>Contenido fijo en App.js</h3>
        <p>Primer proyecto con React importando componentes en App.js :)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
      <h3>Componente Footer</h3>
        <Footer/>
    </div>
  );
}

export default App;
