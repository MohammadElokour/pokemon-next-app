import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="sticky bottom-4 z-30 flex flex-row text-center justify-between child:m-auto child:sm:m-0 shadow-xl mb-5 p-2 sm:p-5 bg-blue-200 rounded-2xl child:font-medium child:max-w-fit child:text-blue-950 [&>a:hover]:ring-2 [&>a]:ring-blue-950 child:transition-all child:rounded-full child:p-0.5 sm:child:p-2 [&>a:focus-within]:outline [&>a:focus-within]:outline-2 [&>a:focus-within]:outline-gray-700">
        <a href="https://melokour.me" target="_blank">
          About me
        </a>
        <p>
          © {currentYear}{" "}
          <span className="hidden sm:inline">All Rights Reserved</span>
        </p>
        <a href="https://pokemon.fandom.com/wiki/" target="_blank">
          Pokémon Wiki
        </a>
      </div>
      <div className="fixed bottom-0 w-full h-7 bg-blue-950 z-10" />
    </>
  );
};

export default Footer;
