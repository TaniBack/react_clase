import React, { Component } from "react";
 // Importamos userContext 
 import {userContext} from '../../context/userContext'

class Contact extends Component {
  static contextType = userContext  //Adhiere el contexto deseado a la clase  / añade a la clase un nuevo contexto  variable de JS = a mi contexto . Para evitar el uso de la etiqueta en el html de  <userContext.Consumer> 


  constructor(props) {
    super(props)
    this.name = React.createRef(); // crear la referencia
    this.state = {
      name: ""  
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Valor anterior con -prevProps-:")
    console.log(prevProps, this.props) //Valor anterior 
    console.log("Valor actual con actualizacion del estado -prevState-:")
    console.log(prevState, this.state) //Valor actual (post cambio de estado) con el setState del name 
    // hariamos una llamada al afucnion de getWeather por ejemplo con los valores nuevos 
  }

  //aqui se podria hacer una funcion que haga fetch (al clima, etc)

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // hacemos uso del valor del campo por referencia
    this.setState({name}) //actualizamos el estado 

    // Para consumir contexto , usamos un destructuring de context  que vienen dados del Provider 
    const {login, logout} = this.context
    // valores = valoresreservados "this.context"
    // Se puede usar como un elemento mas sin una funcion creasda por mi (ya creada)
    login(name);
    // Invocar a login  por provider, cambia contexto internamente 

    this.name.current.value = ""
  }


  render() {
    // usa el contexto (a la izquierda las variables)
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">¿Cual es tu Nombre?:</label><br/>
        <input type="text" id="name" name="name" ref={this.name}/><br />
        <input type="submit"/>
      </form>
    </div>
  }
}
export default Contact;


