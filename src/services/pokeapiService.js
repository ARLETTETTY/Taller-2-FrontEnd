import axios from "axios";

const URL_POKEMONS = "http://localhost:3001/pokemon";

export const getPokemons = async (limit = 10) => {
  const response = await axios.get(`${URL_POKEMONS}?limit=${limit}`);
  const results = response.data.results;

  // La API ya trae todo resuelto, solo devolvemos el array
  const pokemonsDetails = results.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprite,
    types: pokemon.types
  }));

  return pokemonsDetails;
};
