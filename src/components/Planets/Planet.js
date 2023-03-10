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
