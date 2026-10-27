import { Pokemon } from "@src/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

// PokeAPI data rarely changes, so cache responses for a day instead of
// refetching on every request (Next 15+ no longer caches fetch by default)
const REVALIDATE_SECONDS = 60 * 60 * 24;

// types that exist in the API but have no regular Pokémon / icons in the app
const HIDDEN_TYPES = ["stellar", "unknown", "shadow"];

export type NamedResource = { name: string; url: string };

type ListResponse = {
  count: number;
  results: NamedResource[];
};

type TypeResponse = {
  id: number;
  name: string;
  pokemon: { pokemon: NamedResource }[];
};

const request = async <T>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
};

export const getPokemonTypes = async () => {
  // the endpoint is paginated (20 per page), so ask for all of them
  const data = await request<ListResponse>(`${BASE_URL}/type?limit=100`);
  if (!data) return null;
  return data.results.filter((type) => !HIDDEN_TYPES.includes(type.name));
};

export const getPokemonByType = (typeId: string) =>
  request<TypeResponse>(`${BASE_URL}/type/${encodeURIComponent(typeId)}`);

export const getPokemon = (idOrName: string) =>
  request<Pokemon>(
    `${BASE_URL}/pokemon/${encodeURIComponent(idOrName.trim().toLowerCase())}`
  );

export const getPokemonByUrl = (url: string) => request<Pokemon>(url);

// used client side by the search input; a limit above the total count
// returns every Pokémon in one request
export const getAllPokemonNames = async () => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=100000`);
  if (!res.ok) throw new Error(`Failed to fetch Pokémon names (${res.status})`);
  const data = (await res.json()) as ListResponse;
  return data.results.map((pokemon) => pokemon.name);
};
