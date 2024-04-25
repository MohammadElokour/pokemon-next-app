import Image from "next/image";
import React from "react";
import { SearchInput } from "./components/SearchInput";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex self-center justify-center items-center mx-auto py-5 hover:ring my-4 ring-blue-900 rounded-full transition-all w-fit px-8"
      >
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
  );
};

export default Header;
