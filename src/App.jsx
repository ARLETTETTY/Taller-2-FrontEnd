import { Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ImplementacionContainer from "./containers/ImplementacionContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/implementacion" element={<ImplementacionContainer />} />
      <Route path="/pokemons" element={<ImplementacionContainer />} />
    </Routes>
  );
}

export default App;
