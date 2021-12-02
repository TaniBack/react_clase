import React, { Component } from 'react'

export class Products extends Component {
    render() {
        return (
            <div>
                <Product name="TV" price="250"/>
                <Product name="iPhone" price="900"/>
                <Product name="Android" price="300"/>
                <Product name="PS5" price="350"/>
            </div>
        )
    }
}

export default Products

