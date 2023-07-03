import { Link, useLoaderData, useLocation } from "react-router-dom";

const ResidentesPage = () => {

    const dataLocations1 = useLoaderData();
    const location = useLocation();
    const id_pagina = location.search.substring(1);
    const relation = dataLocations1.results[+id_pagina - 1];

    return (
        <section className="py-20">
            <div className="container px-2 mx-auto flex flex-col gap-6">
                <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Link's de los Residentes</h1>
                <Link to={'/ubicaciones'} className="py-2 px-3 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">REGRESAR</Link>
                {/* parte dos */}
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-6">
                    {relation.residents.map((element) => {
                        return (
                            <p className="rounded-2xl overflow-hidden flex flex-col h-full p-4 bg-sky-900 flex flex-col gap-2" key={element}><Link to={element}>{element}</Link></p>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}

export default ResidentesPage;