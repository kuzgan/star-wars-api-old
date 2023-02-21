import React, { useCallback } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ data, setUrl, currentSite, setCurrentSite, location }) => {
  const changePage = useCallback(({ selected }) => {
    if (selected !== currentSite - 1) {
      setUrl(`https://swapi.dev/api${location.pathname}/?page=${+selected + 1}`);
      window.history.pushState(undefined, "", `?page=${selected + 1}`);
      setCurrentSite(selected + 1);
    }
  });

  return (
    <div>
      {Math.ceil(data?.count / 10) !== 1 && (
        <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={Math.ceil(data?.count ? Math.ceil(data.count / 10) : 0)} onPageChange={changePage} forcePage={currentSite - 1} />
      )}
      <div>Pagination: {currentSite - 1}</div>
    </div>
  );
};
