import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import pokeball from '/pokeball.png'; // Asegúrate que está en /public

function Navbar() {
  const items = [
    {
      label: (
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <i className="pi pi-home" style={{ fontSize: '20px' }}></i>
          Home
        </Link>
      ),
    },
    {
      label: (
        <Link to="/pokemons" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <i className="pi pi-shop" style={{ fontSize: '20px' }}></i>
          Ver Pokémons
        </Link>
      ),
    },
  ];

  return (
    <Menubar
      model={items}
      start={
        <span style={{ fontWeight: 'bold', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={pokeball} alt="Pokeball" style={{ width: 32 }} />
          PokeApp
        </span>
      }
    />
  );
}

export default Navbar;
