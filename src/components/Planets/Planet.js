import React from "react";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { useCapital } from "../../Hooks/useCapital";
import { RelatedFilms } from "../Widgets/RelatedFilms";
import { RelatedResidents } from "../Widgets/RelatedResidents";

export const Planet = () => {
  const { data, error, loading } = useSubpageLogic();
  const [capitalize] = useCapital();

  if (error) {
    return <div>There was an error fetching data. {error}</div>;
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{data?.name}</h2>
          <span>Rotation period: {capitalize(data?.rotation_period)}</span>
          <span>Orbital period: {capitalize(data?.orbital_period)}</span>
          <span>Diameter: {capitalize(data?.diameter)}</span>
          <span>Climate: {capitalize(data?.climate)}</span>
          <span>Gravity: {capitalize(data?.gravity)}</span>
          <span>Terrain: {capitalize(data?.terrain)}</span>
          <span>Surface water: {capitalize(data?.surface_water)}</span>
          <span>Population: {capitalize(data?.population)}</span>
        </div>
      )}
      <RelatedFilms urls={data.films} />
      <RelatedResidents urls={data.residents} />
    </div>
  );
};

// {
//   "name": "Tatooine",
//   "rotation_period": "23",
//   "orbital_period": "304",
//   "diameter": "10465",
//   "climate": "arid",
//   "gravity": "1 standard",
//   "terrain": "desert",
//   "surface_water": "1",
//   "population": "200000",
//   "residents": [
//       "https://swapi.dev/api/people/1/",
//       "https://swapi.dev/api/people/2/",
//       "https://swapi.dev/api/people/4/",
//       "https://swapi.dev/api/people/6/",
//       "https://swapi.dev/api/people/7/",
//       "https://swapi.dev/api/people/8/",
//       "https://swapi.dev/api/people/9/",
//       "https://swapi.dev/api/people/11/",
//       "https://swapi.dev/api/people/43/",
//       "https://swapi.dev/api/people/62/"
//   ],
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/4/",
//       "https://swapi.dev/api/films/5/",
//       "https://swapi.dev/api/films/6/"
//   ],
//   "created": "2014-12-09T13:50:49.641000Z",
//   "edited": "2014-12-20T20:58:18.411000Z",
//   "url": "https://swapi.dev/api/planets/1/"
// }
