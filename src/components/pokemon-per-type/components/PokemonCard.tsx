import React from "react";
import Link from "next/link";
import { getTypeIdFromUrl } from "@src/utils/shared";
import { Pokemon } from "@src/types/pokemon";
import Image from "next/image";

type PokemonPerTypeProps = {
  typeId: string;
  pokemon: { name: string; url: string };
};

const getPokemonData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data as Pokemon;
};

const PokemonCard = async ({ typeId, pokemon }: PokemonPerTypeProps) => {
  const { name: pokemonName, url } = pokemon;

  const pokemonData = await getPokemonData(url);
  const { sprites, types, id } = pokemonData;
  const pokemonImgSrc = sprites.front_default ?? "/pokeball.png";
  const type1Color = types[0].type.name;
  const type2Color = types.length > 1 ? types[1].type.name : type1Color;
  const bgGradient = `bg-gradient-to-r from-${type1Color} to-${type2Color}`;

  return (
    <Link href={`/pokemon/${id}`}>
      <div
        className={`${bgGradient} p-2 w-full min-h-[200px] transition-all hover:ring-inset hover:ring-4 ring-white rounded-2xl flex justify-evenly items-center cursor-pointer`}
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
