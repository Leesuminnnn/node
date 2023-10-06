import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onclick={increase}>+1</button>
      <button onclick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
