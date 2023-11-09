import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";

function PokemonCard() {
  const [pokemonData, setPokemonData] = useState([]);
  const batchSize = 18; // Number of requests to make in each batch
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
    <div>
      {pokemonData.map((data, index) => (
        <div key={index}>
          <h2>{data.name}</h2>
          <p>{data.id}</p>
          <img src={data.imgFront} alt={data.name} />
          <p>Weight: {data.weight} kg</p>
          <p>Height: {data.height} cm</p>
          <p>Types: {data.types.join(", ")}</p>
          <p>Primary Type: {data.primaryType}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
