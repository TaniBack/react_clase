// importamos el contexto que vamos a usar
import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

// Importamos Context
// themeContext de componente funcional Hooks
import { themeContext } from '../../context/themeContext';

function Nav() {

  const {theme, toggleTheme} = useContext(themeContext); 

  return (
    <nav className={`nav ${theme}`}>
    {/* Creamos una lista de navegacion y le indicamos a donde enruta */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/pokeuser">Pokeuser</Link></li>
        <li><Link to="/topics">Topics</Link></li>
                {/* Link to sustituye a Href */}

      </ul>
    </nav>
    );
}

export default Nav