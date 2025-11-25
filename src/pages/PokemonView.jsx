import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from '../providers/context';
import PokemonCarousel from '../components/Carousel';
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

function PokemonView() {
  const { pokemons, cargarPokemons, loading, error } = useContext(PokemonContext);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    cargarPokemons(limit);
  }, []); 

  const handleMostrar = () => cargarPokemons(limit);

  return (
    <>
      <div className="pokemon-page">

        <h2 className="title-pokemon">Pokémon disponibles</h2>

        <div className="pokemon-controls">
          <InputNumber
            value={limit}
            onValueChange={(e) => setLimit(e.value)}
            min={1}
            max={1100}
            inputClassName="pokemon-input"
          />
          <Button
            label="Mostrar Pokémon"
            onClick={handleMostrar}
            className="pokemon-button"
          />
        </div>

        {loading && <div>Cargando...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && <PokemonCarousel pokemons={pokemons} />}
      </div>
    </>
  );
}

export default PokemonView;
