import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Header.css';
 

export class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <p>My first react product project</p>   
                <Nav/>      
            </div>
        )
    }
}

export default Header


