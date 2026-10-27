import PokemonDetails from "@src/components/pokemon-details";
import React from "react";

const PokemonDetailsPage = async ({
  params,
}: {
  params: Promise<{ pokemonId: string }>;
}) => {
  const { pokemonId } = await params;
  return <PokemonDetails id={pokemonId} />;
};

export default PokemonDetailsPage;
