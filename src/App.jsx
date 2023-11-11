import React, { useState } from "react";
import "./App.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PokemonCardList from "./components/PokemonCardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="font-poppins">
      <div className="flex justify-center">
        <div className="flex bg-gray-800 rounded-xl mt-3">
          <MagnifyingGlassIcon color="gray" width={"2.5rem"} className="p-1" />
          <input
            type="text"
            placeholder="Search Pokemon..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-transparent px-2"
          />
        </div>
      </div>
      <PokemonCardList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
