import React, { useEffect, useState } from "react";
import "./PokemonAPI.css";
import PokemonCard from "./PokemonCard";

export default function PokemonAPI() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const fetchPokemon = async () => {
    try {
      const res1 = await fetch(API);
      const data1 = await res1.json();

      // imp**
      const detailedPokemonData = data1.results.map(async (currPokemon) => {
        const res2 = await fetch(currPokemon.url);
        const data2 = await res2.json();
        return data2;
      });
      //   console.log(detailedPokemonData);

      const detailedresponse = await Promise.all(detailedPokemonData);
      // console.log(detailedresponse);
      setPokemon(detailedresponse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  });

  // search
  const searchData = pokemon.filter((curr) =>
    curr.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-box">
        <h1 className="error">{error.message}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Lets Catch Pokémon!</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card-box">
          <ul>
            {/* {pokemon.map((currPokemon) => { */}
            {searchData.map((currPokemon) => {
              return (
                <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
