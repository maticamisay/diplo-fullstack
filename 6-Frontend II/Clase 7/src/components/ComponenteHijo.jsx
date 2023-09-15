import React from "react";
import ButtonIncrement from "./ButtonIncrement";
import SegundoComponenteHijo from "./SegundoComponenteHijo";

const ComponenteHijo = ({ contador }) => {
  return (
    <>
      contador: {contador}
      <SegundoComponenteHijo />
    </>
  );
};

export default ComponenteHijo;
