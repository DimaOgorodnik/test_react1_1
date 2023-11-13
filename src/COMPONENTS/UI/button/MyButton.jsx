import React from "react";
import classes from "./MyButtonModule.css";
const MyButton = ({ children, click }) => {
  return (
    <button onClick={click} className="MyBtn">
      {children}
    </button>
  );
};

export default MyButton;
