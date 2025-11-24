import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import PokemonView from './pages/PokemonView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemons" element={<PokemonView />} />
    </Routes>
  );
}

export default App;
