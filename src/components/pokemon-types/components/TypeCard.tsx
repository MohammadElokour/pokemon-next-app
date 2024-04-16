import React from "react";
import Link from "next/link";
import { getTypeColor, getTypeIdFromUrl } from "@src/utils/shared";
import Image from "next/image";

type TypeProps = {
  typeData: { name: string; url: string };
};

const TypeCard = ({ typeData }: TypeProps) => {
  const { name: typeName, url } = typeData;
  const bgColor = getTypeColor(typeName);
  const id = getTypeIdFromUrl(url);
  return (
    <Link href={`pokemon/type/${id}`}>
      <div
        className={`${bgColor} w-full min-h-40 bg-opacity-65 hover:bg-opacity-85 rounded-2xl flex justify-evenly items-center cursor-pointer`}
      >
        <Image
          className="shadow-2xl rounded-full"
          src={`/types-icons/${typeName}.png`}
          alt={`${typeName} pokemon type icon`}
          quality={100}
          width={100}
          height={100}
          priority
        />
        <p className="text-left text-4xl uppercase text-white font-bold tracking-wider min-w-[207px]">
          {typeName}
        </p>
      </div>
    </Link>
  );
};

export default TypeCard;
