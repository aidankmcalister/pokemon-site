import PokemonCardList from "./components/PokemonCardList";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <PokemonCardList />
    </div>
  );
}

export default App;
