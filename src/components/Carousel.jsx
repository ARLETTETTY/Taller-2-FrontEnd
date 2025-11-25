import { Carousel } from 'primereact/carousel';

function PokemonCarousel({ pokemons }) {
  const itemTemplate = (pokemon) => (
    <div style={{ textAlign: "center" }}>
      <img src={pokemon.sprite} alt={pokemon.name} width={96} />
      <h4>{pokemon.name}</h4>
      <div>ID: {pokemon.id}</div>
      <div style={{ marginTop: 8 }}>
        {pokemon.types.map(type => (
          <img
            key={type.name}
            src={type.icon}
            alt={type.name}
            title={type.name}
            style={{ width: 64, margin: "0 4px" }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Carousel value={pokemons} itemTemplate={itemTemplate} numVisible={3} numScroll={1} />
  );
}

export default PokemonCarousel;
