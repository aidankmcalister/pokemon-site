import React, { useState } from "react";
import "./App.css";
import PokemonCardList from "./components/PokemonCardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="font-poppins">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <PokemonCardList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
