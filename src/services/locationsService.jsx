export const readLocations = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    return response.json();
}