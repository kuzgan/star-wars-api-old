import React, { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";

export const Person = () => {
  const [personData, setPersonData] = useState({});
  const [fetchData] = useFetch();

  useEffect(() => {
    fetchData(setPersonData, `https://swapi.dev/api${window.location.toString().replace(window.location.origin, "")}`);
  }, []);
  console.log("person", personData);
  return (
    <div>
      <span>{personData?.name}</span>
    </div>
  );
};
