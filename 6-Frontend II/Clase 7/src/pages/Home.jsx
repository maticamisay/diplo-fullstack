import React from "react";
import ComponenteHijo from "../components/ComponenteHijo";
import ComponentePrimo from "../components/ComponentePrimo";
import useCounterStore from "../store/useCounterStore";

const Home = () => {
  const { count } = useCounterStore();
  return (
    <>
      <br />
      <ComponenteHijo contador={count} />
      <ComponentePrimo />
    </>
  );
};

export default Home;
