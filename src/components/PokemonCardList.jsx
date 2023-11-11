import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";
import PokemonCard from "./PokemonCard";
import InfiniteScroll from "react-infinite-scroll-component";

function PokemonCardList() {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const batchSize = 18;
  const totalPokemon = 1000;

  useEffect(() => {
    const fetchDataInitial = async () => {
      try {
        setIsLoading(true);
        const initialData = await Promise.all(
          Array.from({ length: batchSize }, (_, index) => fetchData(index + 1))
        );
        setAllPokemonData(initialData);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (allPokemonData.length === 0) {
      fetchDataInitial();
    }
  }, [allPokemonData, batchSize]);

  const fetchMoreData = async () => {
    if (isLoading || !allPokemonData) return;

    const nextBatchStart = allPokemonData.length + 1;
    const nextBatchEnd = nextBatchStart + batchSize - 1;
    const end = Math.min(nextBatchEnd, totalPokemon);

    setIsLoading(true);

    try {
      const batch = await Promise.all(
        Array.from({ length: end - nextBatchStart + 1 }, (_, index) =>
          fetchData(nextBatchStart + index)
        )
      );

      setAllPokemonData((prevData) => [...prevData, ...batch]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <InfiniteScroll
        dataLength={allPokemonData?.length || 0}
        next={fetchMoreData}
        hasMore={allPokemonData?.length < totalPokemon && !isLoading}
        loader={<p>Loading...</p>}
        className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center m-5 p-2"
      >
        {allPokemonData.map((data, index) => (
          <PokemonCard key={index} data={data} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PokemonCardList;
