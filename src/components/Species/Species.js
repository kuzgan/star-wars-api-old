import React, { useEffect, useState, useCallback } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import { usePaginatedData } from "../../Hooks/usePaginatedData";
import { Pagination } from "../Pagination";

export const Species = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const [currentSite, setCurrentSite] = useState(1);
  const [loading, setLoading] = useState(true);

  const [fetchData, error] = useFetch();

  let location = useLocation();

  const initFetch = useCallback(() => {
    const pageRegex = /\?page=\d+/;
    if (pageRegex.test(location.search)) {
      const page = location.search.match(/\d+/)[0];
      window.history.replaceState(data, "", `?page=${page}`);
      setUrl(`https://swapi.dev/api${location.pathname}/?page=${page}`);
      console.log("initFetch", page);
      setCurrentSite(page);
    } else {
      window.history.replaceState(data, "", "?page=1");
      setUrl(`https://swapi.dev/api${location.pathname}/?page=1`);
      setCurrentSite(1);
    }
  }, [location]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    console.log("url", url);
    if (url === "") return;

    fetchData(setData, url).then(() => {
      setLoading(false);
    });
  }, [url]);

  const handlePopState = useCallback(() => {
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get("page");
    console.log("popstate", page);
    window.history.replaceState(undefined, "", "");
  }, [location]);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [url]);

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

          <span> People: {currentSite - 1}</span>
          <span> Current URL: {url}</span>

          <Pagination data={data} setUrl={setUrl} currentSite={currentSite} setCurrentSite={setCurrentSite} location={location} />
        </div>
      )}
    </div>
  );
};
