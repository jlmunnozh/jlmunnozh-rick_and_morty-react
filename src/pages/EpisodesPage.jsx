import { useLoaderData } from "react-router-dom";

const EpisodesPage = () => {
    const dataEpisodes = useLoaderData();
    console.log(dataEpisodes);
    
    return (
        <h1>Pagina de Episodios</h1>
      );
}
 
export default EpisodesPage;