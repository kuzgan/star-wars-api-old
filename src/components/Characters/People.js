import React, { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";

export const People = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?format=json&page=1");
  const [peopleData, setPeopleData] = useState({});
  const [fetchData] = useFetch();

  useEffect(() => {
    fetchData(setPeopleData, url);
  }, [url]);
  return (
    <div>
      {peopleData.results?.map((element, index) => {
        return (
          <div key={index}>
            <Link to={element.url.replace("https://swapi.dev/api", "")}>{element.name}</Link>
            {index}
          </div>
        );
      })}
    </div>
  );
};
