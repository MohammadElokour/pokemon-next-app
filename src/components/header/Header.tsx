import Image from "next/image";
import React from "react";
import { SearchInput } from "./components/SearchInput";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-10 bg-blue-50 z-10" />
      <div className="sticky top-5 flex text-center flex-col gap-10 p-5 sm:p-10 bg-blue-200 rounded-3xl shadow-xl z-20">
        <Link href="/" className="flex justify-center child:w-auto">
          <Image
            src="/pokemon_logo.png"
            alt="Pokemon Logo"
            quality={100}
            width={250}
            height={75}
            priority
          />
        </Link>
        <SearchInput />
      </div>
    </>
  );
};

export default Header;
