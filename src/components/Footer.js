import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <p>Made by ME.</p>
      <Link to="https://github.com/kuzgan" target={"_blank"}>
        Check out my GitHub
      </Link>
    </div>
  );
};
