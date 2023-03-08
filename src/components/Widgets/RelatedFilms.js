import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { useRelatedResources } from "../../Hooks/useRelatedResources";

export const RelatedFilms = ({ urls }) => {
  const { data, loading, error } = useRelatedResources(urls);

  if (error) {
    return (
      <div>
        <h3>Related Films</h3>
        <span>There was an error fetching data. {error}</span>
      </div>
    );
  }

  return (
    <div>
      <h3>Related Films</h3>
      {loading ? (
        <div>Loading related films...</div>
      ) : data.length !== 0 ? (
        <div>
          <span>
            {data.map((element, index) => {
              return (
                <Link key={index} to={element.url.replace("https://swapi.dev/api", "")}>
                  {element.title}
                </Link>
              );
            })}
          </span>
        </div>
      ) : (
        <span>No Related Films, There Is.</span>
      )}
    </div>
  );
};
