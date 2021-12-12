import React, { Component } from 'react'

export class Product extends Component {
    // rconst 
    constructor(props) {
        super(props)
    
        this.state = {
            supplier: this.props.info.supplier ||"TheBridge SA"  //Todos los componentes Products tendran un supplier que será manual o vendra de  this.props.info  (Products.jsx) 
        }
    }

    render() {
        const {name, price} = this.props.info 
        //hacemos un destructuring de porps de Product para evitar poner <h2>Producto: {this.props.info.name}</h2>
 
        return (
            <div>
                {/* Leo los parametros de Product  */}
                <p>Producto: {name}</p>
                <p>Precio: {price} €</p>    
                <p>Proveedor: {this.state.supplier}</p>   
                <button onClick={this.props.delete}>Borrar item</button>
                {/* obtenemos la funcion de deleteProduct desde el padre Products */}
            </div>
        )
    }
}

export default Product

