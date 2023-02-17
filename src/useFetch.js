import { useEffect, useState } from "react";

export const useFetch = () => {
  const fetchData = async (setFunction, url) => {
    try {
      console.log("to ja", url);
      const response = await fetch(url);
      const data = await response.json();
      setFunction(data);
      // window.history.pushState(data, "", url);
    } catch (err) {
      console.error("ERROR", err);
    }
  };
  return [fetchData];
};
