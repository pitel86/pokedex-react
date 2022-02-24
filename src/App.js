import './App.css';
import React,  { useState } from 'react';
import {Form} from './components/Form/Form';
import {Pokemon} from './components/Pokemon/Pokemon';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState("");
    
  const searchPokemon = async (pokemonSearch) =>{
    console.log("axios pokemon",pokemonSearch);
      (pokemonSearch !== "" || pokemonSearch !== undefined) && axios("https://pokeapi.co/api/v2/pokemon/" + pokemonSearch).then(
        (res) => {
          setPokemon(res.data);
          console.log(res.data);
        }
      );
  }
  

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <Form searchPokemon={searchPokemon}/>
      <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
