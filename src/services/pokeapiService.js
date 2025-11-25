import axios from "axios";

const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon";

// Servicio principal
export const getPokemons = async (limit = 10) => {
  const response = await axios.get(`${URL_POKEMONS}?limit=${limit}`);
  const results = response.data.results;

  const pokemonsDetails = await Promise.all(
    results.map(async (pokemon) => {
      // Obtiene detalles completos del Pokémon
      const details = await axios.get(pokemon.url);

      // Para cada tipo del Pokémon, obtén su sprite desde su endpoint
      const typesWithIcons = await Promise.all(
        details.data.types.map(async (typeObj) => {
          try {
            const typeDetails = await axios.get(typeObj.type.url);
            // Navega por la estructura 'generation-vii' y 'lets-go-pikachu-lets-go-eevee'
            const iconUrl =
              typeDetails.data.sprites?.["generation-vii"]?.["lets-go-pikachu-lets-go-eevee"]?.name_icon ?? "";
            return {
              name: typeObj.type.name,
              icon: iconUrl
            };
          } catch (e) {
            // Si falla la obtención, deja el icono vacío
            return {
              name: typeObj.type.name,
              icon: ""
            };
          }
        })
      );

      return {
        name: pokemon.name,
        url: pokemon.url,
        id: details.data.id,
        sprite: details.data.sprites.front_default,
        types: typesWithIcons
      };
    })
  );

  return pokemonsDetails;
};
