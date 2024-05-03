import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getTypeIdFromUrl } from "@src/utils/shared";

type TypeProps = {
  typeData: { name: string; url: string };
};

const TypeCard = ({ typeData }: TypeProps) => {
  const { name: typeName, url } = typeData;
  const bgColor = `bg-${typeName}`;
  const id = getTypeIdFromUrl(url);
  return (
    <Link href={`pokemon/type/${id}`} className="last:mb-1">
      <div
        className={`${bgColor} p-4 sm:p-3 sm:min-h-40 gap-3 w-full hover:ring overflow-hidden ring-white transition-all rounded-2xl flex justify-evenly items-center cursor-pointer`}
      >
        <Image
          className="w-[75px] sm:w-[100px] ring ring-white rounded-full flex-shrink-0"
          src={`/types-icons/${typeName}.png`}
          alt={`${typeName} pokemon type icon`}
          quality={100}
          width={100}
          height={100}
          priority
        />
        <p className="text-left text-2xl sm:text-4xl uppercase text-white font-bold tracking-wider min-w-[207px]">
          {typeName}
        </p>
      </div>
    </Link>
  );
};

export default TypeCard;
