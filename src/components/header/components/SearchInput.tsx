"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autocomplete from "./Autocomplete";
import { useRouter } from "next/navigation";
import { SearchNormal1 } from "iconic-react";
import { getAllPokemonNames } from "@src/apis/Requests";

const filterNames = (names: string[], value: string) => {
  const query = value.trim().toLowerCase();
  return query ? names.filter((name) => name.includes(query)) : [];
};

export const SearchInput = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const allNamesRef = React.useRef<Promise<string[]> | null>(null);
  const latestValRef = React.useRef("");
  const [val, setVal] = React.useState("");
  const [pokemonNames, setPokemonNames] = React.useState<string[]>([]);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  // the full name list is fetched once and then filtered locally on every keystroke
  const fetchPokemonNames = React.useCallback((value: string) => {
    latestValRef.current = value;
    if (!allNamesRef.current) {
      setIsLoading(true);
      allNamesRef.current = getAllPokemonNames().catch((error) => {
        allNamesRef.current = null; // allow retrying on the next keystroke
        throw error;
      });
    }
    allNamesRef.current
      .then((names) => {
        if (latestValRef.current !== value) return;
        setPokemonNames(filterNames(names, value));
      })
      .catch(() => setPokemonNames([]))
      .finally(() => setIsLoading(false));
  }, []);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value);
      fetchPokemonNames(e.target.value);
    },
    [fetchPokemonNames]
  );

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const query = val.trim().toLowerCase();
      if (!query) return;
      setVal("");
      inputRef.current?.blur();
      setIsFocused(false);
      router.push(`/pokemon/${encodeURIComponent(query)}/`);
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
          className="flex shrink-0 sm:hidden ring-3 ring-[#444b53] rounded-full"
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
          className="hidden sm:flex self-center justify-center items-center p-2 mx-auto transition-all w-fit rounded-3xl hover:bg-blue-300 border-4 border-transparent hover:border-[#444b53]"
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
          <div className="w-full m-auto flex grow items-center py-3 px-3 bg-white text-gray-500 rounded-xl [&>input:focus-within]:placeholder:text-transparent focus-within:shadow-md focus-within:text-gray-700 focus-within:bg-white">
            <SearchNormal1 size="22" color="#6b7280" />
            <input
              onKeyDown={handleKeyDown}
              type="text"
              value={val}
              ref={inputRef}
              onChange={onChange}
              placeholder="Search for a Pokémon"
              onFocus={() => setIsFocused(true)}
              className="w-10 pl-2 text-md sm:text-lg grow bg-transparent outline-hidden mt-0.5"
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
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-30"
        />
      )}
    </>
  );
};
