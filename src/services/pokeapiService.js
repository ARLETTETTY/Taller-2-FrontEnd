import axios from "axios";

// Puedes cambiar el límite según necesites.
const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit = 10) => {
  const response = await axios.get(`${URL_POKEMONS}?limit=${limit}`);
  const results = response.data.results;

  // Opcional: obtener detalles de cada pokemon usando el campo url
  // Esto hará una petición por cada pokemon (puedes paginar según requerimiento)
  const pokemonsDetails = await Promise.all(
    results.map(async (pokemon) => {
      const details = await axios.get(pokemon.url); // Estos detalles incluyen imagen y otros datos
      return {
        name: pokemon.name,
        url: pokemon.url,
        id: details.data.id,
        sprite: details.data.sprites.front_default,
        types: details.data.types.map(t => t.type.name),
      };
    })
  );

  return pokemonsDetails;
};
