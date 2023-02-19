import React, { useEffect, useState, useRef, useCallback } from "react";
import { useFetch } from "../../useFetch";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeUrl } from "../../Store/urlSlice";
import ReactPaginate from "react-paginate";

export const People = () => {
  // https://swapi.dev/api/people/?page=1&format=json
  //const initialUrl = `https://swapi.dev/api${window.location.pathname}/?page=1&format=json`;
  // let newUrl = `https://swapi.dev/api/${window.location.pathname + window.location.search.replace("&format=json", "")}&format=json`;
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const [fetchData] = useFetch();
  const [currentSite, setCurrentSite] = useState(1);

  let location = useLocation();

  const initFetch = useCallback(() => {
    const pageRegex = /\?page=\d+/;
    if (pageRegex.test(location.search)) {
      const page = location.search.match(/\d+/)[0];
      setUrl(`https://swapi.dev/api${location.pathname}/?page=${page}&format=json`);
      setCurrentSite(page);
    } else {
      window.history.replaceState(undefined, "", "?page=1");
      setUrl(`https://swapi.dev/api${location.pathname}/?page=1&format=json`);
      setCurrentSite(1);
    }
  }, [location]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    if (url === "") return;
    fetchData(setData, url);
    window.history.replaceState(data, "", "");
  }, [url]);

  // const changePage = useCallback(({ selected }) => {
  //   if (selected !== currentSite - 1) {
  //     setUrl(`https://swapi.dev/api${location.pathname}/?page=${+selected + 1}&format=json`);
  //     window.history.pushState(undefined, "", `?page=${selected + 1}`);
  //     setCurrentSite(selected + 1);
  //   }
  // });

  return (
    <div>
      {data.results?.map((element, index) => {
        return (
          <div key={index}>
            <Link to={element.url.replace("https://swapi.dev/api", "")}>{element.name}</Link>
          </div>
        );
      })}
      {/* {Math.ceil(data?.count / 10) !== 1 && (
        <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={Math.ceil(data?.count ? Math.ceil(data.count / 10) : 0)} onPageChange={changePage} forcePage={currentSite - 1} />
      )} */}
      <span> People: {currentSite - 1}</span>

      <Pagination data={data} setUrl={setUrl} currentSite={currentSite} setCurrentSite={setCurrentSite} location={location} />
    </div>
  );
};
