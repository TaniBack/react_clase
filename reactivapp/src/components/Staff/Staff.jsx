import React, { Component } from 'react';
import PokemonsApi from '../PokemonsApi';
import axios from 'axios'

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { pokeLista: [] }
        // Event binding (Bindear eventos)
    }
  

    async componentDidMount(){
        await new Promise( resolve => setTimeout(resolve, 5000)); // Simular retardo
          // const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
          // const data = await resp.json();
        // Al usar Axios nos deshacemos del Fetch 
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          const data = resp.data;
          this.setState({
              pokeLista: data.results
        })
        console.log('componentDidMount');
    }

      render() {
        return (
            <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
        );
    }
  }
  
  export default Staff;


