import React, { Component } from "react";


class Contact extends Component {

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


  componentDidMount() {

  }

  //aqui se podria hacer una funcion que haga fetch (al clima, etc)

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // hacemos uso del valor del campo por referencia
    this.setState({name}) //actualizamos el estado 
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name" ref={this.name}/><br />
        <input type="submit"/>
      </form>
    </div>
  }
}
export default Contact;


