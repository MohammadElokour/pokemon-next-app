// @ts-nocheck
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: "#929da3",
        fighting: "#ce416b",
        flying: "#8fa9de",
        poison: "#aa6bc8",
        ground: "#d97845",
        rock: "#c5b78c",
        bug: "#91c12f",
        ghost: "#5269ad",
        steel: "#5a8ea2",
        fire: "#ff9d55",
        water: "#5090d6",
        grass: "#63bc5a",
        electric: "#f4d23c",
        psychic: "#fa7179",
        ice: "#73cec0",
        dragon: "#0b6dc2",
        dark: "#745d4e",
        fairy: "#f1aceb",
        unknown: "#68a090",
        shadow: "#5a5465",
      },
    },
  },
  safelist: [
    "bg-normal",
    "bg-fighting",
    "bg-flying",
    "bg-poison",
    "bg-ground",
    "bg-rock",
    "bg-bug",
    "bg-ghost",
    "bg-steel",
    "bg-fire",
    "bg-water",
    "bg-grass",
    "bg-electric",
    "bg-psychic",
    "bg-ice",
    "bg-dragon",
    "bg-dark",
    "bg-fairy",
    "bg-unknown",
    "bg-shadow",
  ],
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
