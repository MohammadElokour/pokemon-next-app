import Image from "next/image";
import React from "react";

const TypeBadge = ({ typeName }: { typeName: string }) => {
  return (
    <div
      className={`lg:py-3 lg:px-5 lg:min-w-[335px] flex lg:items-center lg:gap-3 top-5 lg:border-4 border-white rounded-full`}
    >
      <Image
        className="border-4 border-white rounded-full w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] lg:w-[100px] lg:h-[100px] "
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
  );
};

export default TypeBadge;
