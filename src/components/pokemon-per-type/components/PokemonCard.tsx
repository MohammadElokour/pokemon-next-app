import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPokemonByUrl, NamedResource } from "@src/apis/Requests";

type PokemonPerTypeProps = {
  pokemon: NamedResource;
};

const PokemonCard = async ({ pokemon }: PokemonPerTypeProps) => {
  const { name: pokemonName, url } = pokemon;

  // a failed request for one card shouldn't break the whole page,
  // so fall back to a plain card that links by name
  const pokemonData = await getPokemonByUrl(url);
  const pokemonImgSrc = pokemonData?.sprites.front_default ?? "/pokeball.png";
  const types = pokemonData?.types ?? [];
  const type1Color = types[0]?.type.name ?? "unknown";
  const type2Color = types[1]?.type.name ?? type1Color;
  const bgGradient = `bg-linear-to-r from-${type1Color} to-${type2Color}`;

  return (
    <Link href={`/pokemon/${pokemonData?.id ?? pokemonName}`}>
      <div
        className={`${bgGradient} p-2 w-full min-h-[200px] transition-all hover:ring-3 ring-white rounded-2xl flex justify-evenly items-center cursor-pointer`}
      >
        <Image
          src={pokemonImgSrc}
          width={175}
          height={175}
          alt={`image of ${pokemonName}`}
        />
        <p className="text-center text-2xl uppercase text-white font-bold tracking-wider">
          {pokemonName}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
