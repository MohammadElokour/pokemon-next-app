import React from "react";
import Error from "@src/components/Error";
import { getPokemon } from "@src/apis/Requests";
import { safeDecode } from "@src/utils/shared";
import PokemonDetailsCard from "./components/PokemonDetailsCard";

const PokemonDetails = async ({ id }: { id: string }) => {
  const data = await getPokemon(safeDecode(id));
  if (!data)
    return (
      <Error
        title="Not Found!"
        msg="We have not found a pokemon with that name"
      />
    );

  if (!data.id)
    return (
      <Error title="No Data!" msg="There is no data for this category yet!" />
    );

  return <PokemonDetailsCard pokemonData={data} />;
};

export default PokemonDetails;
