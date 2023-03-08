import React from "react";
import { Link } from "react-router-dom";
import { useRelatedResources } from "../../Hooks/useRelatedResources";

export const RelatedStarships = ({ urls }) => {
  const { data, loading, error } = useRelatedResources(urls);

  if (error) {
    return (
      <div>
        <h3>Related Starships</h3>
        <span>There was an error fetching data.</span>
      </div>
    );
  }

  return (
    <div>
      <h3>Related Starships</h3>
      {loading ? (
        <div>Loading related starships...</div>
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
        <span>No related starships.</span>
      )}
    </div>
  );
};
