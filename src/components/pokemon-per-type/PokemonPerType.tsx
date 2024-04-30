import React from "react";
import Error from "@src/components/Error";
import PokemonCard from "./components/PokemonCard";

type PokeTypeResponse = {
  id: string;
  pokemon: { pokemon: { name: string; url: string } }[];
};

const PokemonPerType = async ({ id }: { id: string }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  if (!res.ok) return <Error />;

  const data = (await res.json()) as PokeTypeResponse;
  if (!data.pokemon.length)
    return (
      <Error title="No Data!" msg="There is no data for this category yet!" />
    );

  const pokemonList = data.pokemon;

  return (
    <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {pokemonList.map(({ pokemon }) => (
        <React.Fragment key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default PokemonPerType;
