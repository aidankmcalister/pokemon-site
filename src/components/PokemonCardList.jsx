import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";
import PokemonCard from "./PokemonCard";
import InfiniteScroll from "react-infinite-scroll-component";

function PokemonCardList({ searchTerm }) {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const batchSize = 18;
  const totalPokemon = 1000;

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const allData = await Promise.all(
          Array.from({ length: totalPokemon }, (_, index) =>
            fetchData(index + 1)
          )
        );
        setAllPokemonData(allData);
      } catch (error) {
        console.error("Error fetching all data:", error);
      }
    };

    if (allPokemonData.length === 0) {
      fetchAllData();
    }
  }, [allPokemonData, totalPokemon]);

  useEffect(() => {
    const filtered = allPokemonData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        String(pokemon.id).includes(searchTerm)
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, allPokemonData]);

  useEffect(() => {
    setDisplayedPokemon(filteredPokemon.slice(0, batchSize));
  }, [filteredPokemon]);

  const fetchMoreData = () => {
    setDisplayedPokemon((prevDisplayed) => [
      ...prevDisplayed,
      ...filteredPokemon.slice(
        prevDisplayed.length,
        prevDisplayed.length + batchSize
      ),
    ]);
  };

  return (
    <div className="flex justify-center">
      <InfiniteScroll
        dataLength={displayedPokemon.length}
        next={fetchMoreData}
        hasMore={displayedPokemon.length < filteredPokemon.length}
        loader={<p>Loading...</p>}
        className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center m-5 p-2"
      >
        {displayedPokemon.map((data, index) => (
          <PokemonCard key={index} data={data} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PokemonCardList;
