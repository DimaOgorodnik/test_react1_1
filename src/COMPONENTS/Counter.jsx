import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increments() {
    setCount(count + 1);
  }
  function decrements() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increments}>increments</button>
      <button onClick={decrements}>decrements</button>
    </div>
  );
};

export default Counter;
