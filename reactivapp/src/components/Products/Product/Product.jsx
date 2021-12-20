import React, { Component } from 'react'
import './Product.css';

import Button from '@mui/material/Button';

export class Product extends Component {
    // rconst 
    constructor(props) {
        super(props)
    
        this.state = {
            picture: this.props.info.picture || "https://t4.ftcdn.net/jpg/02/24/30/09/360_F_224300995_Y8S2mc26jhC1Ywlty5TfBTgcyxy4Inbg.jpg",
            supplier: this.props.info.supplier ||"TheBridge SA"  //Todos los componentes Products tendran un supplier que será por defecto o vendra de  this.props.info  (Products.jsx) 
        }
    }

    render() {
        const {name, price, picture} = this.props.info 
        //hacemos un destructuring de porps de Product para evitar poner <h2>Producto: {this.props.info.name}</h2>
 
        return (
            <div>
                {/* Leo los parametros de Product  */}
                <p>Producto: {name}</p>
                <p>Precio: {price} €</p>
                <p>Proveedor: {this.state.supplier}</p>
                <figure>
                    <img src={this.state.picture} alt={name} id="imgProduct"/>
                        <figcaption>Imagen de {name} a {price}€</figcaption>
                </figure>
                
                <Button onClick={this.props.delete} variant='contained'>Borrar</Button>
                
                {/* <button onClick={this.props.delete}>Borrar item</button> */}
                {/* obtenemos la funcion de deleteProduct desde el padre Products */}
            </div>
        )
    }
}

export default Product

