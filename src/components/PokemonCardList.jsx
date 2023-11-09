import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";
import PokemonCard from "./PokemonCard";

function PokemonCardList() {
  const [pokemonData, setPokemonData] = useState([]);
  const batchSize = 18;
  const totalPokemon = 18;
  // const totalPokemon = 1000;

  useEffect(() => {
    const fetchDataAllPokemon = async () => {
      const allData = [];

      for (let i = 1; i <= totalPokemon; i += batchSize) {
        const batch = await Promise.all(
          Array.from({ length: batchSize }, (_, index) => fetchData(i + index))
        );
        allData.push(...batch);
      }

      setPokemonData(allData);
    };

    fetchDataAllPokemon();
  }, []);

  return (
    <div className="mx-5 grid gap-4 grid-cols-1">
      {pokemonData.map((data, index) => (
        <PokemonCard key={index} data={data} />
      ))}
    </div>
  );
}

export default PokemonCardList;
