import React from 'react';
import Spinner from '@bit/joshk.react-spinners-css.facebook';

// importamos el custom Hook 
import useFetch from '../../hooks/useFetch';


const Pokeuserhoked = () => {
  const {loading,result} = useFetch('https://pokeapi.co/api/v2/pokemon')
  const pokemons = result.results
  return (
    <section>
      <h1>Mis pokeusers</h1>
      <ul>
        {loading?<Spinner color="green"/>:pokemons.map((pokemon,i)=><li key={i}>Nombre: {pokemon.name}</li>)}

        {/* {loading?Spinner({color: 'blue'}):pokemons.map((pokemon,i)=><li key={i}>Nombre: {pokemon.name}</li>)} */}

        
      </ul>
    </section>
  );
};
export default Pokeuserhoked;