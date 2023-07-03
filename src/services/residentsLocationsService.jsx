export const readResidentsLocations = async () => {
    const response = await fetch(`${link}`);
    return response.json();
}