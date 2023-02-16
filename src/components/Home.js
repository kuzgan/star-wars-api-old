import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/films">Films</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/species">Species</Link>
    </div>
  );
};
