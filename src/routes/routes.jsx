import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/primaryLayout";
import CharactersPage from "../pages/CharactersPage";
import NotFoundPage from "../pages/NotFoundPage";
import { readCharacters } from "../services/charactersService";
import LocationsPage from "../pages/LocationsPage";
import { readLocations } from "../services/locationsService";
import { readResidentsLocations } from "../services/residentsLocationsService";
import EpisodesPage from "../pages/EpisodesPage";
import ResidentesPage from "../pages/ResidentesPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'personajes',
        element: <CharactersPage />,
        loader: readCharacters
      },
      {
        path: 'ubicaciones',
        element: <LocationsPage />,
        loader: readLocations
      },
      {
        path: 'episodios',
        element: <EpisodesPage />,
        loader: readResidentsLocations
      },
      {
        path: 'ubicaciones/residentes',
        element: <ResidentesPage />,
        loader: readLocations, readResidentsLocations
      }
    ]
  },
]);