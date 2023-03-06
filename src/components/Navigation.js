import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { changeName, changeToInitial } from "../Store/nameSlice";
import { useDispatch, useSelector } from "react-redux";

export const Navigation = () => {
  const [title, setTitle] = useState();
  const titleOfPage = useSelector((state) => {
    return state.name.value;
  });
  let location = useLocation();

  const query = /\/\w+/;
  const query2 = /\/\w+\/\d+/;

  return (
    <div>
      {location.pathname === "/" ? <span>home</span> : <Link to="/">home</Link>}
      {location.pathname !== "/" && <span>/</span>}
      {query.test(location.pathname) && query2.test(location.pathname) ? (
        <Link to={`${location.pathname.replace(/\d+|\//g, "")}`}>{location.pathname.replace(/\d+|\//g, "")}</Link>
      ) : (
        <span>{location.pathname.replace("/", "")}</span>
      )}
      {query2.test(location.pathname) && <span>/</span>}
      {/* {query2.test(location.pathname) && <span>{location.pathname.replace(/[a-zA-Z]|\//g, "")}</span>} */}
      {query2.test(location.pathname) && <span>{titleOfPage}</span>}
    </div>
  );
};
