export const readResidentsLocations = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/12');
    return response.json();
}