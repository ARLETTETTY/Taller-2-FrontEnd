import { Carousel } from 'primereact/carousel';

function PokemonCarousel({ pokemons }) {
  const itemTemplate = (pokemon) => (
    <div className="pokemon-card">
      <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-card__image" />
      <h4 className="pokemon-card__name">{pokemon.name}</h4>
      <div className="pokemon-card__id">ID: {pokemon.id}</div>
      <div className="pokemon-card__types">
        {pokemon.types.map((type) => (
          <span key={type.name} className="pokemon-type">
            {type.icon && (
              <img
                src={type.icon}
                alt={type.name}
                title={type.name}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Carousel
      value={pokemons}
      itemTemplate={itemTemplate}
      numVisible={1}
      numScroll={1}
      circular
      className="pokemon-carousel"
    />
  );
}

export default PokemonCarousel;
