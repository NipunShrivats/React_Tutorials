import React, { useEffect, useState } from "react";
import "./PokemonDemo.css";

export default function PokemonDemo() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/raichu";

  // 1. ---- Regular fetch api ----
  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //       setError(error);
  //     });
  // };

  // 2. --- promises [async await] ---
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //   console.log(apiData);

  if (loading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="error">Error: {error.message}</h1>
      </div>
    );
  }

  //   if (apiData) {
  return (
    <>
      <section className="container">
        <header className="header">
          <h1>Lets Catch Pokémon!</h1>
        </header>
        <ul className="card">
          <li className="pokemon-card">
            <figure>
              <img
                className="img"
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
              />
            </figure>
            <h1 className="pokemon-name">{apiData.name}</h1>
            <div className="info-block">
              <p className="pokemon-info">
                Height: <span>{apiData.height}</span>
              </p>
              <p className="pokemon-info">
                Weight: <span>{apiData.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed: <span>{apiData.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
// }
