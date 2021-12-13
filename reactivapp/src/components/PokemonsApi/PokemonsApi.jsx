import React, { Fragment } from 'react';

const PokemonsApi = ({ lista }) => {
    return (
        <div>
            {
            lista.map(pokemon => 
              // Fragment es como una etiqueta invisible . Se usa cuando no queremos dividir el contenido en cajas "invisibles" . Es como un DIV 

              <Fragment key={pokemon.name} >
                  <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                  <p>{pokemon.url}</p>
              </Fragment>
            )
            }
        </div>
    );
}

PokemonsApi.defaultProps = {
    lista: []
  }

export default PokemonsApi;
