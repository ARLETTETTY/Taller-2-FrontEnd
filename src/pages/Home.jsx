function Home() {
  return (
    <div className="home-page">
      <div className="home-box">
        <h1 className="home-title">PokeApp </h1>
        <h2 className="home-subtitle"> Visualización de Pokémon</h2>

        <p className="home-authors">
          <br />
          Integrantes: 
          <br /> 
          Arlette Carvajal
          <br />
          Nicolás Catalán
          <br /> 
        </p>
        <br />
        <p>
          Esta aplicación consume la PokeAPI para mostrar una selección de Pokémon con su imagen,
          identificador y tipos principales. Permite elegir cuántos Pokémon cargar y recorrerlos uno a uno mediante
          un carrusel interactivo.
        </p>

        <p>
          Cada tarjeta incluye el sprite del Pokémon, su ID y etiquetas con sus tipos. La vista de implementación
          utiliza PrimeReact React Router y el patrón Provider
          para manejar el estado global de los datos.
        </p>
      </div>
    </div>
  );
}

export default Home;
