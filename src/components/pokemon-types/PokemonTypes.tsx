import React from "react";
import Error from "@src/components/Error";
import TypeCard from "./components/TypeCard";

type PokemonTypeData = {
  count: number;
  results: { name: string; url: string }[];
};

const PokemonTypes = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/");

  if (!res.ok) return <Error hideBtn />;

  const data = (await res.json()) as PokemonTypeData;

  if (!data.count) return <Error hideBtn />;

  const pokemonTypesList = data.results;

  return (
    <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {pokemonTypesList.toSpliced(-2).map((type) => (
        <React.Fragment key={type.name}>
          <TypeCard typeData={type} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default PokemonTypes;
