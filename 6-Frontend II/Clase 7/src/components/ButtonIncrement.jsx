import React from "react";
import useCounterStore from "../store/useCounterStore";

const ButtonIncrement = () => {
  const inc = useCounterStore((state) => state.inc);

  return <button onClick={inc}>increment</button>;
};

export default ButtonIncrement;
