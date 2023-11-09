import React, { useEffect, useState } from "react";
import { fetchData } from "../data/pokemonData";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

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
    <div className="mx-5 grid gap-4 grid-cols-1">
      {pokemonData.map((data, index) => (
        <Card key={index} className="p-2 bg-gray-800 rounded-2xl">
          <CardBody className="border rounded-xl flex flex-col items-center">
            <img
              src={data.imgFront}
              alt={data.name}
              className="w-32 bg-green-200 rounded-full p-1"
            />
            <Typography variant="h3">{data.name}</Typography>
            <Typography variant="paragraph">
              Primary Type: {data.primaryType}
            </Typography>
            <Typography variant="paragraph">ID: {data.id}</Typography>
            <Typography variant="paragraph">
              Weight: {data.weight} kg
            </Typography>
            <Typography variant="paragraph">
              Height: {data.height} cm
            </Typography>
            <Typography variant="paragraph">
              Types: {data.types.join(", ")}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default PokemonCard;
