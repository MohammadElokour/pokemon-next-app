import Link from "next/link";
import Image from "next/image";
import React from "react";

const TypeBadge = ({
  typeId,
  typeName,
}: {
  typeId: string;
  typeName: string;
}) => {
  return (
    <Link href={`/pokemon/type/${typeId}`}>
      <div className="duration-100 lg:py-3 lg:px-5 lg:min-w-[335px] flex lg:items-center lg:gap-3 top-5 lg:border-4 border-white [&>img]:hover:ring rounded-full hover:ring ring-white">
        <Image
          className="border-4 ring-white border-white rounded-full w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] lg:w-[100px] lg:h-[100px] "
          src={`/types-icons/${typeName}.png`}
          width={100}
          height={100}
          priority
          alt={`pokemon ${typeName} type icon`}
        />
        <p className="hidden lg:block text-4xl text-white font-semibold uppercase">
          {typeName}
        </p>
      </div>
    </Link>
  );
};

export default TypeBadge;
