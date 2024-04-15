import { getTypeColor } from "@src/utils/shared";
import React from "react";

type Props = {
  typeData: { name: string; url: string };
};

const TypeCard = ({ typeData }: Props) => {
  const { name: typeName, url } = typeData;
  const bgColor = getTypeColor(typeName);
  return (
    <div
      className={`${bgColor} w-full min-h-80 bg-opacity-75 hover:bg-opacity-100 rounded-2xl flex justify-center items-center cursor-pointer`}
    >
      <p className="text-4xl uppercase text-white font-bold tracking-wider">
        {typeName}
      </p>
    </div>
  );
};

export default TypeCard;
