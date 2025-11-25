import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import pokeball from '/pokeball.png';

function Navbar() {
  const start = (
    <div className="navbar-logo">
      <img src={pokeball} alt="Pokeball" />
      <span>PokeApp</span>
    </div>
  );

  const end = (
    <div className="navbar-links">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/implementacion" className="navbar-link">
        Ver Pokémons
      </Link>
    </div>
  );

  return (
    <Menubar start={start} end={end} className="app-navbar" />
  );
}

export default Navbar;
