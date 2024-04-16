export const getTypeNameFromTypeId = (id: string) => {
  const pokemonTypes = {
    1: "normal",
    2: "fighting",
    3: "flying",
    4: "poison",
    5: "ground",
    6: "rock",
    7: "bug",
    8: "ghost",
    9: "steel",
    10: "fire",
    11: "water",
    12: "grass",
    13: "electric",
    14: "psychic",
    15: "ice",
    16: "dragon",
    17: "dark",
    18: "fairy",
    10001: "unknown",
    10002: "shadow",
  };
  const typeKey = Number(id) as keyof typeof pokemonTypes;
  return pokemonTypes[typeKey];
};

export const getTypeColor = (typeName: string) => {
  return `bg-${typeName}`;
};

export const getTypeIdFromUrl = (typeUrl: string) => typeUrl.split("/").at(-2);
