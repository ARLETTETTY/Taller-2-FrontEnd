import Navbar from '../components/Navbar';
import Home from '../pages/Home';

function HomeContainer() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Home />
      </div>
    </>
  );
}

export default HomeContainer;
