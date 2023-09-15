import React from "react";
import useCounterStore from "../store/useCounterStore";

const ComponentePrimo = () => {
  const { count } = useCounterStore();

  return <h2>Count en ComponentePrimo: {count}</h2>;
};

export default ComponentePrimo;
