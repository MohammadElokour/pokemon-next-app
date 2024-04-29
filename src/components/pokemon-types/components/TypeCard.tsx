import React from "react";
import Link from "next/link";
import { getTypeIdFromUrl } from "@src/utils/shared";
import Image from "next/image";

type TypeProps = {
  typeData: { name: string; url: string };
};

const TypeCard = ({ typeData }: TypeProps) => {
  const { name: typeName, url } = typeData;
  const bgColor = `bg-${typeName}`;
  const id = getTypeIdFromUrl(url);
  return (
    <Link href={`pokemon/type/${id}`}>
      <div
        className={`${bgColor} w-full min-h-40 hover:ring-inset hover:ring-4 ring-white transition-all rounded-2xl flex justify-evenly items-center cursor-pointer`}
      >
        <Image
          className="ring ring-white rounded-full"
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
