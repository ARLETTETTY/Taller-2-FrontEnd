import React, { useContext, useEffect, useState } from "react";
import Navbar from '../components/navbar';
import { PokemonContext } from '../providers/context';
import PokemonCarousel from '../components/Carousel';
import { InputNumber } from "primereact/inputnumber"; // O InputText si prefieres
import { Button } from "primereact/button";

function PokemonView() {
  const { pokemons, cargarPokemons, loading, error } = useContext(PokemonContext);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    cargarPokemons(limit); // carga inicial con el valor por defecto
  }, []);

  const handleRecargar = () => cargarPokemons(limit);

  return (
    <>
      <Navbar />
      <h2>Estos son los Pokémons disponibles</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1rem 0" }}>
        <InputNumber value={limit} onValueChange={(e) => setLimit(e.value)} min={1} max={1100} />
        <Button label="Recargar Pokémons" icon="pi pi-refresh" onClick={handleRecargar} />
      </div>

      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && <PokemonCarousel pokemons={pokemons} />}
    </>
  );
}

export default PokemonView;
