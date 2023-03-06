import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";

export const RelatedVehicles = ({ vehicles }) => {
  const [arrayOfVehicles, setArrayOfVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!vehicles) return;
    Promise.all(vehicles.map((element) => fetch(element).then((res) => res.json())))
      .then((data) => {
        setArrayOfVehicles((previousArray) => [...previousArray, ...data.flat()]);
        setLoading(false);
        console.log(arrayOfVehicles);
      })
      .catch(() => {
        setError(true);
      });
  }, [vehicles]);

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
      <h3>Related Vehicles</h3>
      {loading ? (
        <div>Loading related vehicles...</div>
      ) : vehicles.length !== 0 ? (
        <div>
          <span>
            {vehicles.map((element, index) => {
              return (
                <Link key={index} to={element.replace("https://swapi.dev/api", "")}>
                  {arrayOfVehicles[index].title}
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
