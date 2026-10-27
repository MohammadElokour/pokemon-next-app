export const getTypeIdFromUrl = (typeUrl: string) => typeUrl.split("/").at(-2)!;

// dynamic route params arrive percent-encoded; malformed input is kept as is
export const safeDecode = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};
