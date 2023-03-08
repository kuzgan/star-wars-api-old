import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { useRelatedResources } from "../../Hooks/useRelatedResources";

export const RelatedVehicles = ({ urls }) => {
  const { data, loading, error } = useRelatedResources(urls);

  if (error) {
    return (
      <div>
        <h3>Related Vehicles</h3>
        <span>There was an error fetching data. {error}</span>
      </div>
    );
  }

  return (
    <div>
      <h3>Related Vehicles</h3>
      {loading ? (
        <div>Loading related vehicles...</div>
      ) : data.length !== 0 ? (
        <div>
          <span>
            {data.map((element, index) => {
              return (
                <Link key={index} to={element.url.replace("https://swapi.dev/api", "")}>
                  {element.name}
                </Link>
              );
            })}
          </span>
        </div>
      ) : (
        <span>No Related Vehicles, There Is.</span>
      )}
    </div>
  );
};
