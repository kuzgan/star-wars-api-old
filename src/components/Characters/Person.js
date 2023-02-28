import React, { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";
import { useCapital } from "../../useCapital";
import { RelatedFilms } from "../RelatedFilms";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeToInitial } from "../Store/nameSlice";

export const Person = () => {
  const [Data, setData] = useState({});
  const [homeworldName, setHomeworldName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const [fetchData, error] = useFetch();
  const [capitalize] = useCapital();

  useEffect(() => {
    fetchData(setData, `https://swapi.dev/api${window.location.toString().replace(window.location.origin, "")}`)
      .then((Data) => {
        dispatch(changeName({ name: Data.title }));
        if (Data.homeworld) {
          fetchData(setHomeworldName, Data.homeworld);
        }
        if (Data.species.length !== 0) {
          fetchData(setSpeciesName, Data.species[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (error) {
    return <div>There was an error fetching data. {error}</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{Data?.name}</h2>
          <span>Hair color: {capitalize(Data?.hair_color)}</span>
          <span>Height: {capitalize(Data?.height)}</span>
          <span>Mass: {capitalize(Data?.mass)}</span>
          <span>Skin color: {capitalize(Data?.skin_color)}</span>
          <span>Eye color: {capitalize(Data?.eye_color)}</span>
          <span>Birth year: {capitalize(Data?.birth_year)}</span>
          <span>Gender: {capitalize(Data?.gender)}</span>
          <span>Homeworld: {Data.homeworld ? <Link to={`/${Data.homeworld.replace("https://swapi.dev/api/", "")}`}>{homeworldName.name || "Loading..."}</Link> : <>No data</>}</span>
          <span>Species: {Data.species?.length !== 0 ? <Link to={`/${Data.species[0].replace("https://swapi.dev/api/", "")}`}>{speciesName?.name}</Link> : <>No data</>}</span>
        </div>
      )}
      <RelatedFilms films={Data.films} />
    </div>
  );
};

//   {
//     "name": "Luke Skywalker",
//     "height": "172",
//     "mass": "77",
//     "hair_color": "blond",
//     "skin_color": "fair",
//     "eye_color": "blue",
//     "birth_year": "19BBY",
//     "gender": "male",
//     "homeworld": "https://swapi.dev/api/planets/1/",
//     "films": [
//         "https://swapi.dev/api/films/1/",
//         "https://swapi.dev/api/films/2/",
//         "https://swapi.dev/api/films/3/",
//         "https://swapi.dev/api/films/6/"
//     ],
//     "species": [],
//     "vehicles": [
//         "https://swapi.dev/api/vehicles/14/",
//         "https://swapi.dev/api/vehicles/30/"
//     ],
//     "starships": [
//         "https://swapi.dev/api/starships/12/",
//         "https://swapi.dev/api/starships/22/"
//     ],
//     "created": "2014-12-09T13:50:51.644000Z",
//     "edited": "2014-12-20T21:17:56.891000Z",
//     "url": "https://swapi.dev/api/people/1/"
// }
