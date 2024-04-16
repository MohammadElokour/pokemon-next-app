import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="sticky bottom-5 z-10 flex sm:flex-row flex-col text-center justify-between child:m-auto child:sm:m-0 shadow-xl p-3 sm:p-10 bg-blue-200 rounded-3xl min-h-10 child:font-semibold child:max-w-fit child:text-blue-950 [&>a:hover]:bg-blue-50 child:rounded-xl child:p-2 sm:child:p-2.5 [&>a:focus-within]:outline [&>a:focus-within]:outline-2 [&>a:focus-within]:outline-gray-700">
        <a href="https://melokour.me" target="_blank">
          About me
        </a>
        <p>© {currentYear} All Rights Reserved </p>
        <a href="https://pokemon.fandom.com/wiki/" target="_blank">
          Pokémon Wiki
        </a>
      </div>
      <div className="fixed bottom-0 w-full h-10 bg-blue-50 z-0" />
    </>
  );
};

export default Footer;
