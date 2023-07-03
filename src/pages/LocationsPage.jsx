import { Link, useLoaderData, useLocation } from "react-router-dom";

const LocationsPage = () => {

    const dataLocations = useLoaderData();

    return (
        <section className="py-20">
            <div className="container px-2 mx-auto flex flex-col gap-6">
                <h1 className="py-2 text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Ubicaciones</h1>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
                    {dataLocations.results !== undefined && dataLocations.results.map(element => {
                        const { id, name, type, dimension, residents, url, created } = element;
                        return (
                            <div key={id} className="rounded-2xl overflow-hidden flex flex-col h-full p-4 bg-sky-900 flex flex-col gap-2">
                                <Link to={url}>
                                    <h2 className="text-lg font-bold">Nombre: {name}</h2>
                                </Link>
                                <h3 className="text-base font-semibold text-gray-200">Tipo: {type}</h3>
                                <h4 className="text-base font-semibold text-gray-200">Dimensión: {dimension}</h4>
                                <h5 className="text-base font-semibold text-gray-400">Creación: {created}</h5>                              
                                {residents.length === 0 ? <h6 className="mt-auto text-amber-500 text-base font-bold">NO hay residentes (0)</h6> : <Link to={`residentes/${id}`} className="py-1 px-3 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">Total de Residentes: {residents.length}</Link>}

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default LocationsPage;