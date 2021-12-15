import React, { Component, Fragment } from 'react'
import Nav from '../Nav/Nav'
import './Header.css';
 // Importamos userContext 
import {userContext} from '../../context/userContext'

export class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <p>My first react product project</p>
                {/* Usamos el valor que nos llega de Context */}
                <userContext.Consumer>
                    {
                        // value =>
                        //     <Fragment>
                        //         {/* (user) =>  <p>¿Eres Taniu? {user.name} </p>
                        //             ({user}) =>  <p>¿Eres Taniu? {user.name} </p> */}
                        //         <p>Nombre: {value.user.name} </p>
                        //         <button onClick={value.logout}>Logout</button>
                        //         {/* <button onClick={logout}>Logout</button> */}
                        //     </Fragment>

                // Forma PRO usando un ternario 
                    // userConsumer nos devuelve un objeto (user,login,logout)  y hacemos un condicional (si existe username imprime html y sino, vacio)

                        ({ user, logout }) => user.name ?  
                        // Creo un fragment 
                            <> 
                                <h4>Hola {user.name}</h4>
                                <button onClick={logout}>Logout</button>
                            </> 
                            : "" //--> else
                    }
                </userContext.Consumer>
                <Nav />
            </div>
        )
    }
}

export default Header


