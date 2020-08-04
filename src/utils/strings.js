export const isVowel = (char) => {
  const VOWELS = ["a", "e", "i", "o", "u"];

  return VOWELS.includes(char.toLowerCase());
};
