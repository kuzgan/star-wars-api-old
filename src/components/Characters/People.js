import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeUrl } from "../../Store/urlSlice";

export const People = () => {
  const initialUrl = "https://swapi.dev/api/people/?page=1&format=json";
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState({});
  const urlRef = useRef(initialUrl);
  const [fetchData] = useFetch();

  const dispatch = useDispatch();
  const updatedUrl = useSelector((state) => state.url.value.url);

  useEffect(() => {
    fetchData(setData, urlRef.current);
  }, [updatedUrl]);

  if (updatedUrl !== "") urlRef.current = updatedUrl;

  return (
    <div>
      {data.results?.map((element) => {
        return (
          <div key={element.name}>
            <Link to={element.url.replace("https://swapi.dev/api", "")}>{element.name}</Link>
          </div>
        );
      })}
      <Pagination data={data} url={urlRef.current} />
    </div>
  );
};
