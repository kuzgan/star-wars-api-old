import { useEffect, useState } from "react";

export const useFetch = () => {
  const fetchData = async (setFunction, url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFunction(data);
    } catch (err) {
      console.error("ERROR", err);
    }
  };
  return [fetchData];
};
