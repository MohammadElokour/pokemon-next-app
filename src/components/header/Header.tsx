import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./components/SearchInput";

const Header = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex self-center justify-center items-center mx-auto pt-2 sm:py-5 hover:ring my-4 ring-blue-900 rounded-full transition-all w-fit px-8"
      >
        <Image
          className="w-[175px] sm:w-[250px]"
          src="/pokemon_logo.png"
          alt="Pokemon Logo"
          quality={100}
          width={256}
          height={94}
          priority
        />
      </Link>
      <SearchInput />
    </div>
  );
};

export default Header;
