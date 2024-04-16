import Image from "next/image";
import React from "react";

const Loader = ({
  width = 150,
  height = 150,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div className="flex w-full rounded-2xl bg-slate-200 text-center justify-center min-h-[200px]">
      <div className="self-center">
        <Image
          className="rounded-full z-10"
          src="/pokeloader.gif"
          alt="Pokeball Loader"
          quality={100}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default Loader;
