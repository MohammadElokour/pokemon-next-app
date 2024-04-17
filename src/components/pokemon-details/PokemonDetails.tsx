import React, { Suspense } from "react";
import Error from "../Error";
import { Pokemon } from "@src/types/pokemon";
import PokemonDetailsCard from "./components/PokemonDetailsCard";

const PokemonDetails = async ({ id }: { id: string }) => {
  // Add fake delay to show loader style
  // await new Promise<void>((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  if (!res.ok)
    return (
      <Error
        title="Not Found!"
        msg="We have not found a pokemon with that name"
      />
    );

  const data = (await res.json()) as Pokemon;

  if (!data.id)
    return (
      <Error title="No Data!" msg="There is no data for this category yet!" />
    );

  return <PokemonDetailsCard pokemonData={data} />;
};

export default PokemonDetails;
