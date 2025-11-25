import React, { useState } from "react";
import { PokemonContext } from "./context"; 
import { getPokemons } from "../services/pokeapiService";

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarPokemons = (limit = 10) => {
    setLoading(true);
    setError(null);
    getPokemons(limit)
      .then((data) => setPokemons(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  const globalState = { pokemons, cargarPokemons, loading, error };

  return (
    <PokemonContext.Provider value={globalState}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
