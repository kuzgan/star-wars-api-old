import React from "react";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { useCapital } from "../../Hooks/useCapital";
import { RelatedVehicles } from "../Widgets/RelatedVehicles";
import { RelatedStarships } from "../Widgets/RelatedStarships";
import { RelatedCharacters } from "../Widgets/RelatedCharacters";
import { RelatedPlanets } from "../Widgets/RelatedPlanets";
import { RelatedSpecies } from "../Widgets/RelatedSpecies";

export const Film = () => {
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
          <h2>{data?.title}</h2>
          <span>Opening crawl: {capitalize(data?.opening_crawl)}</span>
          <span>Director: {capitalize(data?.director)}</span>
          <span>Producer: {capitalize(data?.producer)}</span>
          <span>Release date: {capitalize(data?.release_date)}</span>
          <span>Episode id: {capitalize(data?.episode_id)}</span>
        </div>
      )}
      <RelatedCharacters urls={data.characters} />
      <RelatedPlanets urls={data.planets} />
      <RelatedVehicles urls={data.vehicles} />
      <RelatedStarships urls={data.starships} />
      <RelatedSpecies urls={data.species} />
    </div>
  );
};
