import Image from "next/image";
import React from "react";
import { SearchInput } from "./components/SearchInput";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-10 bg-blue-50" />
      <div className="sticky top-5 flex text-center flex-col gap-10 p-5 sm:p-10 bg-blue-200 rounded-3xl shadow-xl">
        <div className="flex justify-center child:w-auto">
          <Image
            src="/pokemon_logo.png"
            alt="Pokemon Logo"
            quality={100}
            width={250}
            height={75}
            priority
          />
        </div>
        <SearchInput />
      </div>
    </>
  );
};

export default Header;
