import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { changeUrl } from "../Store/urlSlice";

export const Pagination = (props) => {
  const [currentSiteUrl, setCurrentSiteUrl] = useState(props.url);

  const dispatch = useDispatch();
  const updatedUrl = useSelector((state) => state.url.value.url);

  // useEffect(() => {
  //   setdata(props);
  // }, [data]);
  console.log(props);
  const changePage = ({ selected }) => {
    console.log("selected", selected);
    dispatch(changeUrl({ url: props.url.replace(/\d+/, ++selected) }));
  };

  return (
    <div>
      <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={Math.ceil(props.data.count / 10)} onPageChange={changePage} />

      {/* {props?.data.previous && <button onClick={() => dispatch(changeUrl({ url: props.data.previous }))}>Previous</button>}
      {props?.data.next && (
        <button
          onClick={() => {
            dispatch(changeUrl({ url: props.data.next }));
            console.log("click");
          }}
        >
          Next
        </button>
      )} */}
    </div>
  );
};
