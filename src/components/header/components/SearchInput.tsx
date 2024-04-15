import React from "react";

export const SearchInput = () => {
  return (
    <div className="w-full sm:w-5/6 m-auto flex flex-grow items-center py-4 px-4 focus-within:outline outline-blue-600 bg-white text-gray-500 rounded-xl border border-transparent [&>input:focus-within]:placeholder-transparent focus-within:shadow-md focus-within:text-gray-700 focus-within:bg-white">
      {/* <Icon name="search" size="3xl" color="gray"></Icon> */}
      <input
        type="text"
        placeholder="Search for a Pokémon"
        className="w-10 pl-2 text-lg flex-grow bg-transparent outline-none"
      ></input>
    </div>
  );
};
