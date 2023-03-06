import React, { useEffect, useState, useCallback } from "react";
import { useFetch } from "../../useFetch";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../Pagination";

export const People = () => {
  // https://swapi.dev/api/people/?page=1&format=json

  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const [fetchData, error] = useFetch();
  const [currentSite, setCurrentSite] = useState(1);
  const [loading, setLoading] = useState(true);

  let location = useLocation();

  const initFetch = useCallback(() => {
    const pageRegex = /\?page=\d+/;
    if (pageRegex.test(location.search)) {
      const page = location.search.match(/\d+/)[0];
      setUrl(`https://swapi.dev/api${location.pathname}/?page=${page}`);
      setCurrentSite(page);
    } else {
      window.history.replaceState(undefined, "", "?page=1");
      setUrl(`https://swapi.dev/api${location.pathname}/?page=1`);
      setCurrentSite(1);
    }
  }, [location]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    if (url === "") return;

    fetchData(setData, url).then(() => {
      setLoading(false);
    });
  }, [url]);

  const handlePopState = () => {
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get("page");
    setUrl(`https://swapi.dev/api${location.pathname}/?page=${page}`);
    setCurrentSite(page);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (error) {
    return <div>There was an error fetching data. {error}</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.results?.map((element, index) => {
            return (
              <div key={index}>
                <Link to={element.url.replace("https://swapi.dev/api", "")}>{element.name}</Link>
              </div>
            );
          })}

          <span> People: {currentSite - 1}</span>
          <span> Current URL: {url}</span>

          <Pagination data={data} setUrl={setUrl} currentSite={currentSite} setCurrentSite={setCurrentSite} location={location} />
        </>
      )}
    </div>
  );
};
