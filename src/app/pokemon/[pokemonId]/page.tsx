import Loader from "@src/components/loader";
import PokemonDetails from "@src/components/pokemon-details";
import React, { Suspense } from "react";

const PokemonDetailsPage = ({ params }: { params: { pokemonId: string } }) => {
  const { pokemonId } = params;
  return (
    <Suspense key={pokemonId} fallback={<Loader />}>
      <PokemonDetails id={pokemonId} />
    </Suspense>
  );
};

export default PokemonDetailsPage;
