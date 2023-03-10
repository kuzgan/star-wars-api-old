import React from "react";
import { Link } from "react-router-dom";
import { useCapital } from "../../Hooks/useCapital";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { RelatedFilms } from "../Widgets/RelatedFilms";
import { RelatedVehicles } from "../Widgets/RelatedVehicles";
import { RelatedStarships } from "../Widgets/RelatedStarships";

export const Person = () => {
  const { data, error, loading, homeworldName, speciesName } = useSubpageLogic();
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
          <span>Hair color: {capitalize(data?.hair_color)}</span>
          <span>Height: {capitalize(data?.height)}</span>
          <span>Mass: {capitalize(data?.mass)}</span>
          <span>Skin color: {capitalize(data?.skin_color)}</span>
          <span>Eye color: {capitalize(data?.eye_color)}</span>
          <span>Birth year: {capitalize(data?.birth_year)}</span>
          <span>Gender: {capitalize(data?.gender)}</span>
          <span>Homeworld: {data.homeworld ? <Link to={`/${data.homeworld.replace("https://swapi.dev/api/", "")}`}>{homeworldName.name || "Loading..."}</Link> : <>No data</>}</span>
          <span>Species: {data.species?.length !== 0 ? <Link to={`/${data.species[0].replace("https://swapi.dev/api/", "")}`}>{speciesName?.name || "Loading..."}</Link> : <>No data</>}</span>
        </div>
      )}

      <RelatedFilms urls={data.films} />
      <RelatedVehicles urls={data.vehicles} />
      <RelatedStarships urls={data.starships} />
    </div>
  );
};
