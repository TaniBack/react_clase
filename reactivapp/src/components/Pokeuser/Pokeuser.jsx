import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Pokeuser.css'


const Pokeuser = () => {

  const [pokemons, setPokemons] = useState([]);

  // simula un ComponentDidMount pasando un array vacío [] al final 
  useEffect(() => {
      const getPokemons = async () =>{
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          setPokemons(resp.data.results); //Guarda en el estado de pokemons la data 
      }
      getPokemons();
  }, []); 
// El array vacio al final es para que se recarge una vez al cargar la pag 
  
  return <div>

    <h1>Poke Users</h1>

    <p>{JSON.stringify(pokemons)}</p>
    <ul className="pokemons">
      {pokemons.map((pokemon) => <li className="pokemons">{pokemon.name}</li> )}
    </ul>

  </div>;
};

export default Pokeuser;



