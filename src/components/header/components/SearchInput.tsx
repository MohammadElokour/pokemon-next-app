"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autocomplete from "./Autocomplete";
import { useRouter } from "next/navigation";
import { Pokemon } from "@src/types/pokemon";
import { SearchNormal1 } from "iconic-react";

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
      <div className="relative flex items-center mt-5 gap-3 p-3 bg-blue-200 rounded-3xl shadow-xl z-50">
        <Link
          href="/"
          className="flex flex-shrink-0 sm:hidden ring ring-[#444b53] rounded-full"
        >
          <Image
            src="/pokeball-logo.png"
            width={54}
            height={54}
            alt="Pokeball Logo"
          />
        </Link>
        <Link
          href="/"
          className="hidden sm:flex self-center justify-center items-center p-2 mx-auto transition-all w-fit border-b-2 rounded-3xl border-transparent hover:border-blue-950"
        >
          <Image
            src="/pokemon_logo.png"
            alt="Pokemon Logo"
            quality={100}
            width={165}
            height={65}
            priority
          />
        </Link>
        <form onSubmit={onSubmit} className="relative w-full">
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
              className="w-10 pl-2 text-md sm:text-lg flex-grow bg-transparent outline-none mt-0.5"
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
