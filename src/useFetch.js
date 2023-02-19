import { useEffect, useState } from "react";

export const useFetch = () => {
  const fetchData = async (setFunction, url) => {
    try {
      console.log("useFetch przed if", url);
      if (url === "") return;
      console.log("useFetch po if", url);
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
