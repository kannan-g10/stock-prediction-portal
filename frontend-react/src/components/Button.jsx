import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, class: className, url }) => {
  return (
    <Link className={`p-2 rounded border ${className}`} to={url}>
      {text}
    </Link>
  );
};

export default Button;
