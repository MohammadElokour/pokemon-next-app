import Loader from "@src/components/loader";
import PokemonPerType from "@src/components/pokemon-per-type";
import React, { Suspense } from "react";

const PokemonBasedOnType = ({ params }: { params: { typeId: string } }) => {
  const { typeId } = params;
  return (
    <Suspense key={typeId} fallback={<Loader />}>
      <PokemonPerType id={typeId} />
    </Suspense>
  );
};

export default PokemonBasedOnType;
