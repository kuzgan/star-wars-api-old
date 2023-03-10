import React from "react";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { useCapital } from "../../Hooks/useCapital";
import { RelatedFilms } from "../Widgets/RelatedFilms";
import { RelatedCharacters } from "../Widgets/RelatedCharacters";

export const Vehicle = () => {
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
          <span>Model: {capitalize(data?.model)}</span>
          <span>Manufacturer: {capitalize(data?.manufacturer)}</span>
          <span>Cost in credits: {capitalize(data?.cost_in_credits)}</span>
          <span>Length: {capitalize(data?.length)}</span>
          <span>Max atmosphering speed: {capitalize(data?.max_atmosphering_speed)}</span>
          <span>Crew: {capitalize(data?.crew)}</span>
          <span>Passengers: {capitalize(data?.passengers)}</span>
          <span>Cargo capacity: {capitalize(data?.cargo_capacity)}</span>
          <span>Consumables: {capitalize(data?.consumables)}</span>
          <span>Vehicle class: {capitalize(data?.vehicle_class)}</span>
        </div>
      )}
      <RelatedFilms urls={data.films} />
      <RelatedCharacters urls={data.pilots} />
    </div>
  );
};
