import { useCallback, useState } from "react";

export const useFetch = () => {
  const [error, setError] = useState(null);
  const fetchData = useCallback(async (setFunction, url) => {
    try {
      console.log("useFetch:", url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFunction(data);
      //window.history.replaceState(data, "", "");
      return data;
    } catch (error) {
      console.error("ERROR", error);
      setError(error.message);
    }
  }, []);
  return [fetchData, error];
};
