import { SearchNormal1 } from "iconic-react";
import React from "react";

export const SearchInput = () => {
  return (
    <div className="w-full sm:w-5/6 m-auto flex flex-grow items-center py-4 px-4 bg-white text-gray-500 rounded-xl [&>input:focus-within]:placeholder-transparent focus-within:shadow-md focus-within:text-gray-700 focus-within:bg-white">
      <SearchNormal1 size="27" color="#6b7280" />
      <input
        type="text"
        placeholder="Search for a Pokémon"
        className="w-10 pl-2 text-xl flex-grow bg-transparent outline-none mt-0.5"
      />
    </div>
  );
};
