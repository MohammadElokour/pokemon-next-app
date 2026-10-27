import React from "react";
import PokemonPerType from "@src/components/pokemon-per-type";

const PokemonBasedOnType = async ({
  params,
}: {
  params: Promise<{ typeId: string }>;
}) => {
  const { typeId } = await params;
  return <PokemonPerType id={typeId} />;
};

export default PokemonBasedOnType;
