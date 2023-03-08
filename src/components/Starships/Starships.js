import React from "react";
import { Link } from "react-router-dom";
import { usePaginatedData } from "../../Hooks/usePaginatedData";
import { Pagination } from "../Pagination";

export const Starships = () => {
  const { setUrl, loading, data, error, currentSite, setCurrentSite, location } = usePaginatedData();

  if (error) {
    return <div>There was an error fetching data. {error}</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.results?.map((element, index) => {
            return (
              <div key={index}>
                <Link to={element.url.replace("https://swapi.dev/api", "")}>{element.name}</Link>
              </div>
            );
          })}
          <Pagination data={data} setUrl={setUrl} currentSite={currentSite} setCurrentSite={setCurrentSite} location={location} />
        </div>
      )}
    </div>
  );
};
