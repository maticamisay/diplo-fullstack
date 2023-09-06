import React, { useState } from "react";

const Button = ({ setCount, count }) => {
  const [button, setButton] = useState("Click me");
  return (
    <button onClick={() => setCount((prevState) => prevState + 1)}>
      count is {count}
    </button>
  );
};

export default Button;
