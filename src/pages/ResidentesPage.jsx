import { Link, useLoaderData, useParams } from "react-router-dom";
import React from "react";

const ResidentesPage = () => {

    const { id } = useParams()

    const dataResidents = useLoaderData();
    const resident = dataResidents.results[+id - 1];

    let i = 0;

    console.log(resident.name)

    return (

        <section className="py-20">
            <div className="container px-2 mx-auto flex flex-col gap-4">
                <h1 className="text-teal-500 font-bold text-3xl text-center transition-colors hover:text-amber-200">Relación de Residentes</h1>
                <p className="text-amber-200 font-extrabold text-3xl text-center transition-colors hover:text-teal-500">.:: {resident.name} ::.</p>
                <Link to={'/ubicaciones'} className="py-2 px-3 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">REGRESAR</Link>
                {/* parte dos */}
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6">
                    {resident.residents.map((element) => {
                        // console.log(element);                        
                        // console.log(i);
                        i++;

                        const [habitante, setHabitante] = React.useState([])

                        React.useEffect(() => {
                            const dataResident = async () => {
                                const response = await fetch(`${element}`);
                                const habit = await response.json()
                                setHabitante(habit)
                            }
                            dataResident();
                        }, [])

                        return (

                            <div className="rounded-2xl overflow-hidden flex flex-col h-full p-4 bg-sky-900 flex flex-col gap-2 transition-colors hover:bg-amber-200 hover:text-sky-950" key={element}>
                                <p className="text-lg font-bold">Residente N° {i}</p>
                                <h2 className="text-lg font-bold">Nombre: {habitante.name}</h2>
                                <h3 className="text-base">Especie: {habitante.species}</h3>
                                <h4 className="text-base">Género: {habitante.gender}</h4>
                                <h5 className="text-base">Estado: {habitante.status} {habitante.status === 'Alive' ? '🟢' : habitante.status === 'Dead' ? '🔴': '🟡'} </h5>
                                <Link to={element}><img src={habitante.image} alt={habitante.image} width={128} height={128} className="object-cover"/></Link>
                                
                                {/* <Link to={element} className="text-base">{element}</Link>
                                <img src={habitante.image} alt={habitante.image} width={128} height={128} className="object-cover"/> */}
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>

    );
}

export default ResidentesPage;