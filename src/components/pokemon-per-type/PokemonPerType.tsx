import React, { Suspense } from "react";
import PokemonCard from "./components/PokemonCard";
import Error from "../Error";
import Loader from "../loader";

type PokeTypeResponse = {
  id: string;
  pokemon: { pokemon: { name: string; url: string } }[];
};

const PokemonPerType = async ({ id }: { id: string }) => {
  // // Add fake delay to show loader style
  // await new Promise<void>((res) => setTimeout(() => res(), 5000));

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
        <Suspense
          key={pokemon.name}
          fallback={<Loader width={100} height={100} />}
        >
          <PokemonCard typeId={id} pokemon={pokemon} />
        </Suspense>
      ))}
    </section>
  );
};

export default PokemonPerType;
