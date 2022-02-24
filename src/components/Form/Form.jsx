import React, { useState } from "react";

import './Form.scss'

export const Form = ({ searchPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    console.log("searchPokemon", pokemonName);
    searchPokemon(pokemonName.toLowerCase() )
};

const handleInput = (ev) => {
    const {value} = ev.target;
    setPokemonName(value);
    // console.log("change--formmulario", pokemonName);
};

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <input
          type="text" onChange={handleInput}
        />
        <button>Search Pokémon</button>
      </form>
    </div>
  );
};
