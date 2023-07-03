export const readCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  return response.json();
};