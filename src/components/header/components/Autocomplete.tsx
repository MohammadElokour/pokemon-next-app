import React from "react";
import Link from "next/link";
import Loader from "@src/components/loader";

const Autocomplete = ({
  isLoading,
  clearSearch,
  hideDropDown,
  names,
}: {
  isLoading: boolean;
  clearSearch: () => void;
  hideDropDown: () => void;
  names: string[];
}) => {
  const handleSelect = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      clearSearch();
      hideDropDown();
    },
    [clearSearch, hideDropDown]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        hideDropDown();
      }
    },
    [hideDropDown]
  );

  return (
    <div
      onKeyDown={handleKeyDown}
      className="flex flex-col p-3 bg-white rounded-xl absolute w-full top-16 sm:max-h-[700px] max-h-[500px] overflow-y-auto shadow-lg z-50"
    >
      {isLoading && <Loader bgColor="bg-white" size={75} />}
      {!isLoading &&
        names.map((name) => (
          <Link
            key={name}
            className="autocomplete-link flex items-center gap-2 py-3 px-3 rounded-xl backdrop:outline-none hover:bg-gray-100 focus:bg-gray-100 focus-within:bg-gray-100 focus-visible:bg-gray-100 focus-within:outline-none focus:outline-none focus-visible:outline-none"
            href={`/pokemon/${name.toLocaleLowerCase()}/`}
            onClick={handleSelect}
          >
            <p className="text-lg text-gray-500 font-medium capitalize">
              {name}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default Autocomplete;
