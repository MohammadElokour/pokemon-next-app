export const getTypeColor = (typeName: string) => {
  switch (typeName) {
    case "normal":
      return "bg-[#929da3]";
    case "fighting":
      return "bg-[#ce416b]";
    case "flying":
      return "bg-[#8fa9de]";
    case "poison":
      return "bg-[#aa6bc8]";
    case "ground":
      return "bg-[#d97845]";
    case "rock":
      return "bg-[#c5b78c]";
    case "bug":
      return "bg-[#91c12f]";
    case "ghost":
      return "bg-[#5269ad]";
    case "steel":
      return "bg-[#5a8ea2]";
    case "fire":
      return "bg-[#ff9d55]";
    case "water":
      return "bg-[#5090d6]";
    case "grass":
      return "bg-[#63bc5a]";
    case "electric":
      return "bg-[#f4d23c]";
    case "psychic":
      return "bg-[#fa7179]";
    case "ice":
      return "bg-[#73cec0]";
    case "dragon":
      return "bg-[#0b6dc2]";
    case "dark":
      return "bg-[#745d4e]";
    case "fairy":
      return "bg-[#f1aceb]";
    case "unknown":
      return "bg-[#68a090]";
    case "shadow":
      return "bg-[#5a5465]";
    default:
      return "bg-[#555]";
  }
};
