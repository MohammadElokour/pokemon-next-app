import React from "react";
import Error from "@src/components/Error";
import { getPokemonTypes } from "@src/apis/Requests";
import TypeCard from "./components/TypeCard";

const PokemonTypes = async () => {
  const pokemonTypesList = await getPokemonTypes();

  if (!pokemonTypesList?.length) return <Error hideBtn />;

  return (
    <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {pokemonTypesList.map((type) => (
        <React.Fragment key={type.name}>
          <TypeCard typeData={type} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default PokemonTypes;
