import React from "react";
import { Link } from "react-router-dom";
import { useRelatedResources } from "../../Hooks/useRelatedResources";

export const RelatedPlanets = ({ urls }) => {
  const { data, loading, error } = useRelatedResources(urls);

  if (error) {
    return (
      <div>
        <h3>Related Planets</h3>
        <span>There was an error fetching data. {error}</span>
      </div>
    );
  }

  return (
    <div>
      <h3>Related Planets</h3>
      {loading ? (
        <div>Loading related planets...</div>
      ) : data.length !== 0 ? (
        <div>
          <span>
            {data.map((element, index) => {
              return (
                <Link key={index} to={element.url.replace("https://swapi.dev/api", "")}>
                  {Object.values(element)[0]}
                </Link>
              );
            })}
          </span>
        </div>
      ) : (
        <span>No Related Planets, There Is.</span>
      )}
    </div>
  );
};
