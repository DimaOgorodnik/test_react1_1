import React from "react";
import "./MyInputModule.css";

const MyInput = (props) => {
  const { value, setValue } = props;
  return (
    <input
      className="MyInput"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default MyInput;
