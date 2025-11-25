import Navbar from '../components/Navbar';
import PokemonView from '../pages/PokemonView';

function ImplementacionContainer() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <PokemonView />
      </div>
    </>
  );
}

export default ImplementacionContainer;
