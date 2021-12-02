import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <h1>Producto {this.props.name}</h1>
                <p>Precio: {this.props.price} €</p>
            </div>
        )
    }
}

export default Product
