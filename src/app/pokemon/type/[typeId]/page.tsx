import React from "react";
import PokemonPerType from "@src/components/pokemon-per-type";

const PokemonBasedOnType = ({ params }: { params: { typeId: string } }) => {
  const { typeId } = params;
  return <PokemonPerType id={typeId} />;
};

export default PokemonBasedOnType;
