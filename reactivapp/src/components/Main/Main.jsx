import React, { Component } from 'react'
import Products from '../Products'

export class Main extends Component {
    render() {
        return (
            <div>
                <h4>Esto es el main</h4>
                <p>Sección principal donde importamos Products</p>
                <Products/>              
            </div>
        )
    }
}

export default Main

