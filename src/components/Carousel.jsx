import { Carousel } from 'primereact/carousel';

function PokemonCarousel({ pokemons }) {
  const itemTemplate = (pokemon) => (
    <div style={{ textAlign: "center" }}>
      <img src={pokemon.sprite} alt={pokemon.name} width={96} />
      <h4>{pokemon.name}</h4>
    </div>
  );

  return (
    <Carousel value={pokemons} itemTemplate={itemTemplate} numVisible={3} numScroll={1} />
  );
}

export default PokemonCarousel;
