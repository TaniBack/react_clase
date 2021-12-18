import React, { Component } from 'react'
import Nav from '../Nav'
import './Header.css';

// Importamos Context
// useContext de componente funcional Hooks
import { themeContext } from '../../context/themeContext';
// userContext de componente de clase
import { userContext } from '../../context/userContext';

export class Header extends Component {
    render() {
        return (
            /* Consumo el objetdo que ha mandado themContext que ha sido provided por App.js*/
            <themeContext.Consumer>
                {
                    ({ theme, toggleTheme }) =>
                        <header className={"header " + theme}>
                            <button onClick={toggleTheme}>Modo día/noche</button>
                            <div className="header-title">
                                <h1>First Rect App Project</h1>
                                <Nav />
                            </div>
                            {/* invocamos al userContext para poder hacer uso de el mismo con las etiquetas */}
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


                                    // userConsumer nos devuelve un objeto (user,login,logout) de App.js y hacemos un condicional (si existe username imprime html y sino, vacio)
                                    /* Usamos el valor que nos llega de Context */

                                    // Forma PRO usando un ternario : Nos traemos la funcion user & logout y creamos un ternario 
                                    ({ user, logout }) => user.name ?
                                        // Creo un fragment 
                                        <>
                                            <h4>Hola {user.name}</h4>
                                            <button onClick={logout}>Logout</button>
                                        </>
                                        : "" //--> else
                                }
                            </userContext.Consumer>
                        </header>
                }
            </themeContext.Consumer>
        )
    }
}

export default Header


