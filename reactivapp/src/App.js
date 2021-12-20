
// usamos Hooks para tener un estado  importamos un metodo "useState" (cuand veamos use..) ya que App.js es una funcion y no tiene estado 
import React, { useState } from 'react';

import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './styles/styles.scss';

// Importamos BrowserRouter para hacer redirecciones 
import { BrowserRouter } from 'react-router-dom';

// Importamos userContext 
import { userContext } from '../src/context/userContext'
import { themeContext } from './context/themeContext';

// Componente funcional con un return que devuelve lo que se renderiza   
function App() {

  //Hook - useState para manejo de nombre de usuario 
  const [user, setUser] = useState({ name: "Taniu" }); // Estado de user inicial  . Destructuring -> Devuelve 2 cosas: el estado (user) y un metodo para modificar al estado  (setUser) (Serían como 2 variables)
  const login = (name) => setUser({ name }) //Cambia el estado con un nuevo nombre (lo rellena)
  const logout = () => setUser({ name: "" }) //Cambia el estado del name a vacío (limpia estado user)

  // Exportación de Objeto --> Claves: user, login, logout 
  const value = {
    user,
    login,
    logout
  }

  //Hook - Declaramos el estado de la funcion con useState 
  const [theme, setTheme] = useState("") //Tema día / noche 
  const toggleTheme = () => theme === "dark" ? setTheme("") : setTheme("dark")

  // Exportación de Objeto --> Claves: theme, uso de func toggleTheme
  const themeObj = {
    theme: theme,
    toggleTheme
  }

  return (
    <div className="App">
      {/* el BrowserRouter enrutara el Header y Main  */}
      <BrowserRouter>
        {/* Se "envuelve" los componentes a los que se quisiera pasar el Context (o que pudieran hacer uso de ello) */}
        <userContext.Provider value={value}>
          <themeContext.Provider value={themeObj}>
            {/* Se le envía al Consumer el objeto "value" para que puedan ser llamadas cada una de ellas */}
            <h3>Componente Header que consume</h3>
            <Header />
            <hr />
            <h3>Componente MAIN</h3>
            <Main />
          </themeContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
        <h3>Contenido fijo en App.js - Provider</h3>
        <p>Primer proyecto con React importando componentes en App.js :)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
      <h3>Componente Footer</h3>
      <Footer />
    </div>
  );
}

export default App;
