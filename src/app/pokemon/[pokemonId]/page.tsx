import PokemonDetails from "@src/components/pokemon-details";
import React from "react";

const PokemonDetailsPage = ({ params }: { params: { pokemonId: string } }) => {
  const { pokemonId } = params;
  return <PokemonDetails id={pokemonId} />;
};

export default PokemonDetailsPage;
