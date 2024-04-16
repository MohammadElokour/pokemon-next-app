import React from "react";
import Link from "next/link";
import {
  getTypeColor,
  getTypeIdFromUrl,
  getTypeNameFromTypeId,
} from "@src/utils/shared";
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
  const typeName = getTypeNameFromTypeId(typeId);
  const bgColor = getTypeColor(typeName);

  const pokemonData = await getPokemonData(url);
  const pokemonImgSrc = pokemonData.sprites.front_default ?? "/pokeball.png";

  return (
    <Link href={`/pokemon/${pokemonData.id}`}>
      <div
        className={`${bgColor} p-2 w-full min-h-[200px] bg-opacity-60 hover:bg-opacity-100 rounded-2xl flex justify-evenly items-center cursor-pointer`}
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
