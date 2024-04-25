"use client";

import { SearchNormal1 } from "iconic-react";
import { useRouter } from "next/navigation";

import React from "react";
import Autocomplete from "./Autocomplete";
import { Pokemon } from "@src/types/pokemon";

export const SearchInput = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [val, setVal] = React.useState("");
  const [pokemonNames, setPokemonNames] = React.useState<string[]>([]);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value);
      fetchPokemonNames(e.target.value);
    },
    []
  );

  const fetchPokemonNames = (value: string) => {
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302")
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter(
          (pokemon: Pokemon) =>
            value && pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        const pokemonNames = results.map((pokemon: Pokemon) => pokemon.name);
        setPokemonNames(pokemonNames);
        setIsLoading(false);
      });
  };

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!val) return;
      setVal("");
      inputRef.current?.blur();
      router.push(`/pokemon/${val.toLocaleLowerCase()}/`);
    },
    [router, val]
  );

  const removeFocus = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  const clearInput = React.useCallback(() => {
    setVal("");
    setPokemonNames([]);
  }, []);

  const focusNextElement = () => {
    if (document.activeElement) {
      const focusable = document.getElementsByClassName("autocomplete-link");
      (focusable[0] as HTMLElement).focus();
    }
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        setIsFocused(false);
        inputRef.current?.blur();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusNextElement();
      }
    },
    [inputRef]
  );

  return (
    <>
      <div className="relative flex text-center flex-shrink-0 flex-col gap-10 p-5 bg-blue-200 rounded-3xl shadow-xl z-50">
        <form onSubmit={onSubmit} className="relative">
          <div className="w-full m-auto flex flex-grow items-center py-3 px-3 bg-white text-gray-500 rounded-xl [&>input:focus-within]:placeholder-transparent focus-within:shadow-md focus-within:text-gray-700 focus-within:bg-white">
            <SearchNormal1 size="22" color="#6b7280" />
            <input
              onKeyDown={handleKeyDown}
              type="text"
              value={val}
              ref={inputRef}
              onChange={onChange}
              placeholder="Search for a Pokémon"
              onFocus={() => setIsFocused(true)}
              className="w-10 pl-2 text-lg flex-grow bg-transparent outline-none mt-0.5"
            />
          </div>
          {pokemonNames.length >= 1 && isFocused && (
            <Autocomplete
              isLoading={isLoading}
              clearSearch={clearInput}
              hideDropDown={removeFocus}
              names={pokemonNames}
            />
          )}
        </form>
      </div>
      {isFocused && (
        <div
          id="backdrop"
          onClick={() => setIsFocused(false)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
};
