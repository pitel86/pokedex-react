import React from "react";
import "./Pokemon.scss";

export const Pokemon = ({ pokemon }) => {
  return (
    <>
      {pokemon !== "" && (
        <div className="pokemon">
          <div className="pokemon__image-container">
            <img
              className="pokemon__image-container--image"
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />
          </div>
          <div className="pokemon__info-container">
            <h3 className="pokemon__info-container--name">{pokemon.name}</h3>
            <h4 className="pokemon__info-container--type">
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </h4>
            <p class="pokemon__info-container--more">Weight: ${pokemon.weight / 10} Kg</p>
            <p class="pokemon__info-container--more">Height: ${pokemon.height / 10} M</p>
            <p class="pokemon__info-container--more">Hp: {pokemon.stats[0].base_stat}</p>
            <p class="pokemon__info-container--more">Attack: {pokemon.stats[1].base_stat}</p>
            <p class="pokemon__info-container--more">Defense: {pokemon.stats[2].base_stat}</p>
            <p class="pokemon__info-container--more">Speed: {pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      )}
    </>
  );
};
