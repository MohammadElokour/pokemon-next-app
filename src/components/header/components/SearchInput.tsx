"use client";

import { SearchNormal1 } from "iconic-react";
import { useRouter } from "next/navigation";

import React from "react";

export const SearchInput = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [val, setVal] = React.useState("");
  const router = useRouter();

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value);
    },
    []
  );

  const onSumbit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!val) return;
      setVal("");
      inputRef.current?.blur();
      router.push(`/pokemon/${val.toLocaleLowerCase()}/`);
    },
    [router, val]
  );

  return (
    <form onSubmit={onSumbit}>
      <div className="w-full sm:w-5/6 m-auto flex flex-grow items-center py-4 px-4 bg-white text-gray-500 rounded-xl [&>input:focus-within]:placeholder-transparent focus-within:shadow-md focus-within:text-gray-700 focus-within:bg-white">
        <SearchNormal1 size="27" color="#6b7280" />
        <input
          type="text"
          value={val}
          ref={inputRef}
          onChange={onChange}
          placeholder="Search for a Pokémon"
          className="w-10 pl-2 text-xl flex-grow bg-transparent outline-none mt-0.5"
        />
      </div>
    </form>
  );
};
