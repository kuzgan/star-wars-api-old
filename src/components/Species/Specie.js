import React from "react";
import { Link } from "react-router-dom";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { useCapital } from "../../Hooks/useCapital";
import { RelatedFilms } from "../Widgets/RelatedFilms";
import { RelatedCharacters } from "../Widgets/RelatedCharacters";

export const Specie = () => {
  const { data, error, loading, homeworldName } = useSubpageLogic();
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
          <span>Classification: {capitalize(data?.classification)}</span>
          <span>Designation: {capitalize(data?.designation)}</span>
          <span>Average height: {capitalize(data?.average_height)}</span>
          <span>Skin colors: {capitalize(data?.skin_colors)}</span>
          <span>Hair colors: {capitalize(data?.hair_colors)}</span>
          <span>Eye colors: {capitalize(data?.eye_colors)}</span>
          <span>Average lifespan: {capitalize(data?.average_lifespan)}</span>
          <span>Homeworld: {data.homeworld ? <Link to={`/${data.homeworld.replace("https://swapi.dev/api/", "")}`}>{homeworldName.name || "Loading..."}</Link> : <>No data</>}</span>
          <span>Language: {capitalize(data?.language)}</span>
        </div>
      )}
      <RelatedFilms urls={data.films} />
      <RelatedCharacters urls={data.people} />
    </div>
  );
};
