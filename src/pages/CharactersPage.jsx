import { Link, useLoaderData } from "react-router-dom";

const CharactersPage = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Personajes</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
          {data.results !== undefined && data.results.map(element => {
            const { id, name, status, species, type, gender, origin, location, image, episode, url, created } = element;
            return (
              <div
                key={id}
                className="rounded-2xl overflow-hidden flex flex-col"
              >
                <Link
                  to={url}
                >
                  <img
                    src={image}
                    alt={name}
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                  <Link
                    to={url}
                  >
                    <h3 className="text-2xl font-bold">{name}</h3>
                  </Link>
                  <h4 className="text-base font-semibold">{status === 'Alive' ? '🟢' : '🔴'} {status} - {species} - {gender} {type ? `- ${type}` : ''} </h4>
                  <Link to={origin.url || './'} className="text-sm text-gray-400"><span className="font-bold">Origen:</span> {origin.name}</Link>
                  <Link to={location.url} className="text-sm text-gray-400"><span className="font-bold">Ubicación:</span> {location.name}</Link>
                  <h5 className="text-sm text-gray-400"><span className="font-bold">Creado:</span> {created}</h5>
                  <Link to={episode[0]} className="py-2 px-8 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">Primera aparición</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CharactersPage;