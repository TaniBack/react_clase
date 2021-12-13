import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return <nav>
      <ul>
        {/* Creamos una lista de navegacion y le indicamos a donde enruta */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Link to sustituye a Href */}
      </ul>



    </nav>;
  }
}

export default Nav;
