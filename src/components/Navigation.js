import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const url = useSelector((state) => state.url.value.url);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={`/${url}`}>Home</Link>
      <div>{}</div>
    </div>
  );
};
