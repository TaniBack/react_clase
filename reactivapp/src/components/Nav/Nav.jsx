import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return <nav>
      <ul className="header">
        {/* Creamos una lista de navegacion y le indicamos a donde enruta */}
        <li className="header"><Link to="/">Home</Link></li>
        <li className="header"><Link to="/about">About</Link></li>
        <li className="header"><Link to="/staff">Staff</Link></li>
        <li className="header"><Link to="/contact">Contact</Link></li>
        <li className="header"><Link to="/donate">Donate</Link></li>
        <li className="header"><Link to="/pokeuser">Poke Users</Link></li>
        <li className="header"><Link to="/topic">Topics</Link></li>
        <li className="header"><Link to="/pokeuserhoked">PokeHoked</Link></li>
        {/* Link to sustituye a Href */}
      </ul>
    </nav>;
  }
}

export default Nav;
