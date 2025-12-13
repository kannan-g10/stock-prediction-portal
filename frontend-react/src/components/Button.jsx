import React from "react";

const Button = ({ text, class: className }) => {
  return <button className={`p-2 rounded border ${className}`}>{text}</button>;
};

export default Button;
