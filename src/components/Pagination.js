import React, { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeUrl } from "../Store/urlSlice";

export const Pagination = (props) => {
  const [currentSite, setCurrentSite] = useState(1);
  let location = useLocation();

  const changePage = useCallback(({ selected }) => {
    props.setUrl(`https://swapi.dev/api${location.pathname}/?page=${+selected}&format=json`);
    window.history.pushState(props.data, "", `?page=${selected}`);
    setCurrentSite(+selected);
  });

  return (
    <div>
      <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={Math.ceil(props.data.count / 10)} onPageChange={changePage} initialPage={currentSite} />
      {currentSite}
      {/* {location.search.replace("?page=", "")} */}
    </div>
  );
};

{
  /* {props?.data.previous && <button onClick={() => dispatch(changeUrl({ url: props.data.previous }))}>Previous</button>}
{props?.data.next && (
  <button
    onClick={() => {
      dispatch(changeUrl({ url: props.data.next }));
      console.log("click");
    }}
  >
    Next
  </button>
)} */
}
