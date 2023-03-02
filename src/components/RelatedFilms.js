import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";

export const RelatedFilms = ({ films }) => {
  const [arrayOfFilms, setArrayOfFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!films) return;
    Promise.all(films.map((element) => fetch(element).then((res) => res.json())))
      .then((data) => {
        setArrayOfFilms((previousArray) => [...previousArray, ...data.flat()]);
        setLoading(false);
        console.log(arrayOfFilms);
      })
      .catch(() => {
        setError(true);
      });
  }, [films]);

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
      ) : films.length !== 0 ? (
        <div>
          <span>
            {films.map((element, index) => {
              return (
                <Link key={index} to={element.replace("https://swapi.dev/api", "")}>
                  {arrayOfFilms[index].title}
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
