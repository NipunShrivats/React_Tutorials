import React from "react";
import "./PokemonAPI.css";

export default function PokemonCard({ pokemonData }) {
  return (
    <li className="Plist">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <p className="pokemon-name">{pokemonData.name}</p>
      <div className="pokemon-heiglight">
        <p>{pokemonData.types.map((curr) => curr.type.name).join(", ")}</p>
      </div>

      <div className="info-lower-block">
        <p className="pokemon-info">
          <span>
            Height: <span>{pokemonData.height} m</span>
          </span>
        </p>
        <p className="pokemon-info">
          <span>
            Weight: <span>{pokemonData.weight} kg</span>
          </span>
        </p>
        <p className="pokemon-info">
          <span>
            Speed: <span>{pokemonData.stats[5].base_stat} km/h</span>
          </span>
        </p>
      </div>
    </li>
  );
}
