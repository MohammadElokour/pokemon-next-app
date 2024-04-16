import React from "react";
import Link from "next/link";
import {
  getTypeColor,
  getTypeIdFromUrl,
  getTypeNameFromTypeId,
} from "@src/utils/shared";
import Image from "next/image";
import { Pokemon } from "@src/types/pokemon";

const PokemonDetailsCard = ({ pokemonData }: { pokemonData: Pokemon }) => {
  const { name, sprites, types } = pokemonData;
  const bgColor = getTypeColor(types[0].type.name);
  const pokemonImgSrc = sprites.front_default ?? "/pokeball.png";

  return (
    <div
      className={`${bgColor} p-2 w-full min-h-[200px] bg-opacity-85 rounded-2xl flex justify-evenly items-center`}
    >
      <p className="text-center text-2xl uppercase text-white font-bold tracking-wider">
        {name}
      </p>
      <Image
        src={pokemonImgSrc}
        width={175}
        height={175}
        alt={`image of ${name}`}
      />
    </div>
  );
};

export default PokemonDetailsCard;
