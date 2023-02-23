import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname.replace("/", ""));
  const [data] = useState();
  let location = useLocation();
  const query = /\/\w+/;
  const query2 = /\/\w+\/d+\//;

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div>
      {location.pathname === "/" ? <span>Home</span> : <Link to="/">Home</Link>}
      {location.pathname !== "/" &&
        (query.test(location.pathname) && query2.test(location.pathname) ? (
          <Link to={`${location.pathname.replace("/", "")}`}>{location.pathname.replace("/", "")}</Link>
        ) : (
          <span>{location.pathname.replace("/", "")}</span>
        ))}
      {(location.pathname !== "/" || location.pathname !== query) && <span>data.title</span>}

      {location.pathname === `/`}
      {<span></span>}
      <div>{data?.title}</div>
    </div>
  );
};
