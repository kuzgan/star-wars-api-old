import React from "react";
import { Link } from "react-router-dom";
import { useRelatedResources } from "../../Hooks/useRelatedResources";

export const RelatedCharacters = ({ urls }) => {
  const { data, loading, error } = useRelatedResources(urls);

  if (error) {
    return (
      <div>
        <h3>Related Characters</h3>
        <span>There was an error fetching data. {error}</span>
      </div>
    );
  }

  return (
    <div>
      <h3>Related Characters</h3>
      {loading ? (
        <div>Loading related characters...</div>
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
        <span>No Related Characters, There Is.</span>
      )}
    </div>
  );
};
