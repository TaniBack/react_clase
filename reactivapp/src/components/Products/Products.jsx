import React, { Component } from 'react'
import Product from './Product';
import jsonData from '../../jsonData';

export class Products extends Component {
    // Podriamos tener un estado para mostrar el ultimo elemento añadido 
    // guarda como una memoria del Componente lo que le vayamos pasando en lastAdded 
    constructor(props) {
        super(props)

        this.name = React.createRef(); 

        this.state = { //estado inicial del objeto 
             lastAdded: {},   //memoria del objeto 
             productList: jsonData //array [{}{}] de productos creados por defecto (estado inicial) importado de un jsonData.js
        }
    }
    
    // Funcion de añadir un producto desde el prompt
    createProduct = () => {
        const name = prompt("Introduce el producto")
        const price = prompt("Precio")
        const newProduct = {name, price}

        this.setState({lastAdded:newProduct}) //modificamos el estado de la variable lasAdded con los datos name y price del ultimo añadido 
        this.setState({productList:[...this.state.productList, newProduct]})
        // modificamos la clave productList en el que hacemos un neuvo array que tenga lo que ya habia (con spread operator) + newProduct 
        
        alert('Creado ' + name + ' con valor ' + price)
    }

    // Funcion de añadir un producto desde el Form 
    createProductForm = (name, price, supplier) => {
        const newProduct = {name, price, supplier}

        this.setState({lastAdded:newProduct})
        this.setState({productList:[...this.state.productList, newProduct]})
    }

    // Funcion de mostrar los productos 
    paintProducts = () => {
        // Leo el stado de productList. Transformmos los datos de un array -> MAP 
        // Lo recorro con un bucle y lo pintamos en el DOM 
        return this.state.productList.map((product, i) => <Product info={product} delete={() => this.deleteProduct(i)} key={i} />)
        // transformamos el objeto product a un componente 
        // Entra un objeto {productList} y sale un componente <Product><Product><Product> con su data 
        //le pasamos el mismo indice del array como clave unica  
        //posterior le pasamos la llamada a la funcion de deleteProduct en cada elemento 
    }  

    
    deleteAllProducts = () => {
        this.setState({ productList: [] })  //vacía la lista de productList
        alert('Se ha vaciado productList')
    }

    // Lo buscamos por el indice del array (i), filtramos en una variable y luego actualizamos la lista con los elementos filtrados 
    deleteProduct = (i) => {
        const products = this.state.productList.filter((product, j) => j !== i)
        this.setState({ productList: products })
    }

    handleChange = (event) =>{
        console.log(event.target.value); //imprime cada cambio en el input de Name 
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        // obtenemos los valores del Form y llamamos a la funcion de crear producto createProductForm 
            // const name = event.target.name.value
            const name = this.name.currentValue
            const price = event.target.price.value
            const supplier = event.target.supplier.value
        // Tambien podeos usar el Reac.createRef (usar referencia) para acceder a los datos del Form 
            const nameDos = "uso de Referencias"
        this.createProductForm (name, price, supplier) //Crear producto 
    }
    
    // es una mala practica meter querySelector dentro de las funciones en React (por conflictos con el DOM virtual) Podemos usar las referencias (event.target.elements.name)


    render() {
      // Aqui podemos crear objetos / array fijos 
        // const data = [
        //     {name: "Botas", price:4, supplier: "Vega SA"},
        //     {name: "Chaqueta", price:6},
        // ]

    return (
        <div>
            <h3>Componente Products</h3>
                {/* <Product name="iPhone" price="900"/>
                <Product name="PS5" price="350"/> */}
                <h5>Productos fijos creados en un array en render</h5>
                    {/* Le paso parametros */}
                    <Product info = {jsonData[0]}/> 
                    <Product info = {jsonData[1]}/> 

                <br />

                <button onClick={() => alert("Alerta fija")}>Alerta</button>
                {/*no llamamos a la funcion con () para que no se invoque automaticamente sino con el onClick*/}

                <br />

                <h5>Crear producto por prompt</h5>
                <button onClick={this.createProduct}>Crear producto</button> 

                <h5>Ultimo producto creado:</h5> 
                    <p>{this.state.lastAdded.name}</p>  {/* mostramos el nombre de lastAdded */}

                <br />

                <h5>Formulario de creacion de producto</h5>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre:</label><br/>
                    <input type="text" id="name" name="name" onChange={this.handleChange} ref={this.name}/><br />
                    <label htmlFor="price">Precio:</label><br/>
                    <input type="number" id="price" name="price"/><br/>
                    <label htmlFor="supplier">Proveedor:</label><br/>
                    <input type="text" id="supplier" name="supplier"/><br />
                    <input type="submit"/>
                </form> 

                <br />

                <h5>Listado de todos los productos paintProducts (productList (inicalmente jsonData.js) + newProduct)</h5>
                {this.paintProducts()}
                <br />
                <button onClick={this.deleteAllProducts}>Borrar todos</button>
        </div>
        )
    }
}

export default Products
