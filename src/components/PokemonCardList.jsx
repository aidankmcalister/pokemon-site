import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";
import PokemonCard from "./PokemonCard";
import InfiniteScroll from "react-infinite-scroll-component";

function PokemonCardList() {
  const [pokemonData, setPokemonData] = useState([]);
  const batchSize = 18;
  const totalPokemon = 1000;

  useEffect(() => {
    const fetchDataInitial = async () => {
      const initialData = await Promise.all(
        Array.from({ length: batchSize }, (_, index) => fetchData(index + 1))
      );
      setPokemonData(initialData);
    };

    fetchDataInitial();
  }, []);

  const fetchMoreData = async () => {
    const nextBatchStart = pokemonData.length + 1;
    const nextBatchEnd = nextBatchStart + batchSize - 1;
    const end = Math.min(nextBatchEnd, totalPokemon);

    const batch = await Promise.all(
      Array.from({ length: end - nextBatchStart + 1 }, (_, index) =>
        fetchData(nextBatchStart + index)
      )
    );

    setPokemonData((prevData) => [...prevData, ...batch]);
  };

  return (
    <div className="flex justify-center">
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={fetchMoreData}
        hasMore={pokemonData.length < totalPokemon}
        loader={<p>Loading...</p>}
        className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center m-5 p-2"
      >
        {pokemonData.map((data, index) => (
          <PokemonCard key={index} data={data} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PokemonCardList;
