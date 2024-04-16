import Loader from "@src/components/loader";
import PokemonTypes from "@src/components/pokemon-types";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <PokemonTypes />
    </Suspense>
  );
}
